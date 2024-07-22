---
title: Custom Endpoints
sidebar_label: Custom Endpoints
hide_table_of_contents: false
---

<intro-end />

Metagraph developers have the ability to define their own endpoints to add additional functionality to their applications. Custom endpoints are supported on each of the layers, with different contextual data and scalability considerations for each. These endpoints can be used to provide custom views into snapshot state, or for any custom handling that the developer wishes to include as part of the application.

## Defining a Route

A route can be defined by overriding the `routes` function available on `DataApplicationL0Service` or `DataApplicationL1Service`, creating endpoints on the metagraph L0 node or data L1 node, respectively. Custom routes are defined as instances of http4s `HttpRoutes`.

Here is a minimal example that shows how to return a map of currency addresses with a balance on the metagraph. The example accesses the `addresses` property of L0 chain context and returns it to the requester. 
```scala
  // modules/l0/.../l0/Main.scala

  override def routes(implicit context: L0NodeContext[IO]): HttpRoutes[IO] = HttpRoutes.of {
    case GET -> Root / "addresses" =>
      OptionT(context.getLastCurrencySnapshot)
        .flatMap(_.dataApplication.toOptionT)
        .flatMapF(da => deserializeState(da.onChainState).map(_.toOption))
        .value
        .flatMap {
          case Some(value) => Ok(value.addresses)
          case None => NotFound()
        }
  }
```

For a slightly more complex example, the code below shows how to return the Data Application's calculated state from an endpoint. It also shows a more common pattern for route definition which moves route definitions to their own file, defined as a case class extending `Http4sDsl[F]`. Note that `calculatedStateService` is not available as part of `L0NodeContext` so it must be passed to the case class. 
```scala
  // modules/l0/.../l0/Main.scala
  override def routes(implicit context: L0NodeContext[IO]): HttpRoutes[IO] = CustomRoutes[IO](calculatedStateService).public

  // modules/l0/.../l0/CustomRoutes.scala
  case class CustomRoutes[F[_] : Async](calculatedStateService: CalculatedStateService[F]) extends Http4sDsl[F] with PublicRoutes[F] {
    @derive(encoder, decoder)
    case class CalculatedStateResponse(
      ordinal        : Long,
      calculatedState: CheckInDataCalculatedState
    )

    private def getLatestCalculatedState: F[Response[F]] = {
      calculatedStateService.getCalculatedState
        .map(state => CalculatedStateResponse(state.ordinal.value.value, state.state))
        .flatMap(Ok(_))
    }

    private val routes: HttpRoutes[F] = HttpRoutes.of[F] {
      case GET -> Root / "calculated-state" / "latest" => getLatestCalculatedState
    }

    val public: HttpRoutes[F] =
      CORS
        .policy
        .withAllowCredentials(false)
        .httpRoutes(routes)

    override protected def prefixPath: InternalUrlPrefix = "/"
  }
```

### Custom Route Prefix

All custom defined routes exist under a prefix, shown in the example above as `Root`. By default this prefix is `/data-application`, so for example you might define an `addresses` route which would be found at `http://<base-url>:port/data-application/addresses`. 

It is possible to override the default prefix to provide your own custom prefix by overriding the `routesPrefix` method. 

For example, to use the prefix "/d" instead of "/data-application":
```scala
  override def routesPrefix: ExternalUrlPrefix = "/d"
```

## Examples

For more complete examples of custom route implementations, see [Example Codebases](../resources/example-codebases).

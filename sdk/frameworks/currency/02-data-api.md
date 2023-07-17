---
title: Data API
sidebar_label: Data API
hide_table_of_contents: false
---

<intro-end />

The Data API is a module available to Currency Framework developers to ingest and validate custom data types through their metagraphs. It's a set of tools for managing data interactions within the metagraph that is flexible enough to support a wide range of application use cases such as IoT, NFTs, or custom application-specific blockchains. 

:::info Example Code
Want to jump directly to a code example? A number of examples can be found on Github under the [Metagraph Examples](https://github.com/Constellation-Labs/metagraph-examples/tree/main/examples) repo.
:::

## Data Application Architecture
Data applications or metagraphs implementing the Data API are built on top of the Currency Framework. In a standard Currency Framework metagraph, the metagraph consists of 3 mL0 (metagraph L0) nodes and 3 cL1 (currency L1) nodes. Data applications build on top of this structure and introduce a 2nd L1 layer that runs in parallel with the currency L1 layer. A data application's minimal structure consists of 3 mL0 (metagraph l0) nodes, 3 dL1 (data L1) nodes, and optionally 3 cL0 (currency l0) nodes. Blocks produced by both the cL1 and dL1 nodes undergo consensus on the L0 layer and their data is grouped together within metagraph snapshots. 

### The DataApplication Instance
Data Applications provide an instance of `BaseDataApplicationL0Service` and `BaseDataApplicationL1Service` to the L0 and Data L1 CurrencyApp definitions, found in Main.scala for L0 and L1 respectively. The definition of these services contain a set of overridable methods that allow the developer to provide custom data validation logic to the existing application flow. 

A Data Application, at it's core, is about state management. We define our initial state shape, accept data updates to the application, accept or reject those updates based on validation criteria, and then return a new state on each snapshot. 


### Data Update Lifecycle
__Data L1 layer lifecycle__
1. Update received by POST endpoint on L1 (POST `/data`)
2. Update is decoded as `Signed[DataUpdate]`
3. `deserializeUpdate` called
4. Signature validated
5. `validateUpdate` called
6. Data enqueued for L1 consensus


__L0 layer lifecycle__
1. `validateData` called
2. `combine` called
3. `serializeState` called

### The Data Endpoint
Data is submitted to an application through a single REST endpoint on data L1 nodes, located at `/data`. This endpoint accepts data as a signed JSON request in the below format. Multiple data types can be supported through this single endpoint and are parsed in your application code. 

```json
{
  "value": {
    // This type is defined by your application code
  },
  "proofs": [{
    "id": "<public key>",
    "signature": "<signature of data in value key above>"
  }]
}
```

### Lifecycle Methods
#### Genesis State
A Data Application allows the developer to define any state schema for their metagraph. The initial state is defined in the DataApplicationL0Service `genesis` overridable method. State definitions must extend the `DataState` class. 

For example, you could define State using numeric types:
```scala
class State(length: Long, width: Long) extends DataState

override def genesis: State = State(0,0)
```

Or one or more Maps:
```scala
class State(devices: Map[Address, AggregatedUsage]) extends DataState

override def genesis: State = State(Map.empty)
```

#### validateUpdate
This method validates the update on the L1 layer and can return synchronous errors through the /data API endpoint. Context information (oldState, etc.) is not available to this method so validations need to be based on the contents of the update only. Validations requiring context should be run in `validateData` instead.

For example, validate a field is within a positive range:
```scala
def validateUpdate(update: Update): IO[DataApplicationValidationErrorOr[Unit]] = IO {
  if (update.usage <= 0) {
    DataApplicationValidationError.invalidNec
  } else {
    ().validNec
  }
}
```

#### validateData
This method runs on the L0 layer and validates an update (data) that has passed L1 validation and consensus. `validateData` has access to the old or current application state, and a list of updates. Validations that require access to state information should be run here. 

For example, validate that a user has a balance before allowing an action:
```scala
def validateData(oldState: State, updates: NonEmptyList[Signed[Update]]): IO[DataApplicationValidationErrorOr[Unit]] = IO {
  updates
    .map(_.value)
    .map {
      val currentBalance = acc.balances.getOrElse(update.address, 0)

      if (currentBalance > 0) {
        ().validNec 
      } else {
        DataApplicationValidationError.invalidNec
      }
    }
    .reduce
}
```

#### combine
The `combine` method accepts the current state and a list of validated updates and should return the new state. This is where state is ultimately updated to generate the new snapshot state. 

For example, subtract one from a balance map:
```scala
def combine(oldState: State, updates: NonEmptyList[Signed[Update]]): IO[State] = IO {
  updates.foldLeft(oldState) { (acc, update) =>
    val currentBalance = acc.balances.getOrElse(update.address, 0)

    acc.focus(_.balances).modify(_.updated(update.address, currentBalance - 1))
  }
}
```

#### serializeState and deserializeState
These methods are required to convert state to and from byte arrays, used in the snapshot, and the State class defined in the genesis method.  

For example, serialize to/from a State object:
```scala
  def serializeState(state: State): IO[Array[Byte]] = IO {
    state.asJson.deepDropNullValues.noSpaces.getBytes(StandardCharsets.UTF_8)
  }

  def deserializeState(bytes: Array[Byte]): IO[Either[Throwable, State]] = IO {
    parser.parse(new String(bytes, StandardCharsets.UTF_8)).flatMap { json =>
      json.as[State]
    }
  }
```

#### serializeUpdate and deserializeUpdate
These methods are required to convert updates sent to the `/data` endpoint to and from byte arrays. Signatures are checked against the byte value of the `value` key of the update so these methods give the option to introduce custom logic for how data is signed by the client. 

For example, serialize to/from a JSON update:
```scala
  def serializeUpdate(update: Update): IO[Array[Byte]] = IO {
    update.asJson.deepDropNullValues.noSpaces.getBytes(StandardCharsets.UTF_8)
  }

  def deserializeUpdate(bytes: Array[Byte]): IO[Either[Throwable, Update]] = IO {
    parser.parse(new String(bytes, StandardCharsets.UTF_8)).flatMap { json =>
      json.as[Update]
    }
  }
```

### Custom HTTP Endpoints
Custom GET endpoints can be defined as part of the `routes` overridable method of `BaseDataApplicationL1Service`. These endpoints can be used to provide custom views into snapshot state, or for any custom handling that the developer wishes to include as part of the application. 

For example, a simple endpoint that returns all "addresses" from state might look like this
```scala
  override def routes(implicit context: L1NodeContext[IO]): HttpRoutes[IO] = HttpRoutes.of {
      case GET -> Root / "addresses" =>
        OptionT(context.getLastCurrencySnapshot)
          .flatMap(_.data.toOptionT)
          .flatMapF(deserializeState(_).map(_.toOption))
          .value
          .flatMap {
            case Some(value) =>
              Ok(value.addresses)
            case None =>
              NotFound()
          }
  }
```

A full example can be seen in the [DataAPI example IoT project](https://github.com/Constellation-Labs/metagraph-examples/blob/main/examples/DataApi-Water-And-Energy-Usage/template/modules/data_l1/src/main/scala/com/my/currency/data_l1/Main.scala#L56). 
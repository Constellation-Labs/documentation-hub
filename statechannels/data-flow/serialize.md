---
title: Serialize
slug: serialize
hide_table_of_contents: false
---

![Define](/img/statechannels/dataflow.png)

<intro-end />

Now that we have established the baseline requirements for a state channel snapshot schema, we can examine Constellation’s implementation. This is the state channel that is responsible for: 

- Organizing the network
- Managing global consensus
- Defining the parameters of the DAG L0 token

## Syntax used to define the snapshot schema

```scala
object L0TokenDef extends StateChannelDef[L0TokenStep, Ω, L0TokenStep]{
 
  override val address = Address("DAG3k3VihUWMjse9LE93jRqZLEuwGd6a5Ypk4zYS")

  override val kryoRegistrar: Map[Class[_], StateChannelKryoRegistrationId] =
Map(
  classOf[L0TokenTransaction] -> 1000,
  classOf[L0TokenBlock] -> 1001,
  classOf[CreateStateChannelSnapshot] -> 1002
)
```

### Snapshot schema

In this example we are creating the state channel snapshot schema for an L0 token by extending it from the `StateChannelDef` trait and specifying the input data type that is required to be received by the cell as `L0TokenStep`. The `L0TokenStep` data type has been defined within a separate `types.scala` file which you will see in a subsequent code snippet below (it's a union of data types).

```scala
object L0TokenDef extends StateChannelDef[L0TokenStep, Ω, L0TokenStep]
```

### Wallet address

This is the how the wallet address is defined for the state channel definition.

```scala
override val address = Address("DAG3k3VihUWMjse9LE93jRqZLEuwGd6a5Ypk4zYS")
```

### kryoRegistrar

Each data type that is defined within the state channel snapshot schema must be registered with its own unique Kyro ID so that it can be serialized using Kyro. The requirement is to assign each data type with an arbitrary ID greater than or equal to 1000. As seen above, the `L0TokenStep` data type is comprised of three different data types, each of which has a unique ID: 1000, 1001, 1002. Every state channel has its own independent ID range for assignment to data types so there is no need to concern yourself with conflict between Kryo IDs that have been assigned to types within other state channels.

```scala
override val kryoRegistrar: Map[Class[_], StateChannelKryoRegistrationId] =

    Map(

      classOf[L0TokenTransaction] -> 1000,

      classOf[L0TokenBlock] -> 1001,

      classOf[CreateStateChannelSnapshot] -> 1002
)
```

### Validation logic defined within snapshot

The `makeCell[F[_]` is where the validation logic is defined within the snapshot schema. The `L0TokenStep` data type is defined as the input type which is stored in the Cell for execution where it will undergo hylomorphic recursion whereby `AlgebraM` proxies the inner value `(a)` from `More` or `(result)` from `Done`, passing it to the output. The `Algebra` is a fold operation which reduces the ending type to the output terminal object. This is considered the Catamorphism operation of the Hylomorphic recursion scheme.

```scala
override def makeCell[F[_]: Async](
  input: L0TokenStep,
  hgContext: HypergraphContext[F]
): Cell[F, StackF, L0TokenStep, Either[CellError, Ω],L0TokenStep] =
  new Cell[F, StackF, L0TokenStep, Either[CellError, Ω], L0TokenStep] (
    data = input,
    hylo = scheme.hyloM(
      AlgebraM[F, StackF, Either[CellError, Ω]] {
        case More(a) => a.pure[F]
        case Done(result) => result.pure[F]
      },
      CoalgebraM[F, StackF, Ω] { input =>
        val logger = Slf4jLogger.getLogger[F]

        input match {
          case ProcessSnapshot(snapshot) =>
            logger.info(s"ProcessSnapshot executed") >>
              logger.info(s"Update balances") >>
              Applicative[F].pure(Done(NullTerminal.asRight[CellError]))

          case CreateStateChannelSnapshot() =>
            logger.info(s"Create state-channel snapshot") >>
              Applicative[F].pure(Done(L0TokenStateChannelSnapshot().asRight[CellError]))

          case _ => Applicative[F].pure(Done(CellError("Unhandled coalgebra
case") .asLeft[Ω]))
        }
       }
    ),
    convert = a => a
  )
```

### Validation logic itself is defined

This is where the validation logic itself is defined. You can think of it as simply defining a sequence of events that you need executed in order to arrive at a programmatic outcome. This can incorporate rich data types that are being streamed into the state channel from any origin, whether that is an API call into a blockchain like Ethereum, a database, an IoT device, etc.

```scala
CoalgebraM[F, StackF, Ω] { input =>
        val logger = Slf4jLogger.getLogger[F]

        input match {
          case ProcessSnapshot(snapshot) =>
            logger.info(s"ProcessSnapshot executed") >>
              logger.info(s"Update balances") >>
              Applicative[F].pure(Done(NullTerminal.asRight[CellError]))

          case CreateStateChannelSnapshot() =>
            logger.info(s"Create state-channel snapshot") >>
              Applicative[F].pure(Done(L0TokenStateChannelSnapshot().asRight[CellError]))

          case _ => Applicative[F].pure(Done(CellError("Unhandled coalgebra
case") .asLeft[Ω]))
        }
       }
    ),
```

The `CoalgebraM` is the termination condition for the execution chain - it reacts on a single or multiple classes to return `Done` class. For every other type it executes repetitively the inner algebra and coalgebra for single steps. The `Coalgebra` is an unfold operation consisting of all steps used by a Cell and holds the execution order. This is considered the Anamorphism operation of the Hylomorphic recursion scheme.

In this example, it is utilizing `Slf4jLogger` to log the events which are triggered by the application logic defined under `input match`.

The `L0TokenStep` input type is a union type comprised of the `ProcessSnapshot` and `CreateStateChannelSnapshot` data types (defined in [`types.scala`](https://github.com/Constellation-Labs/tessellation/blob/develop/examples/l0-token/src/main/scala/org/example/types.scala)) which are denoted by the case statement that precedes them. When the State Channel receives either input type, the relevant application logic is triggered in response.

If an input is received that doesn't match these two types `case _`  it will reject it and throw an error `Unhandled coalgebra case`.

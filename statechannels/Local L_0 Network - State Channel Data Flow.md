---
title: State Channel L_0 Data Flow
hide_table_of_contents: false
---

<head>
    <title> State Channel L_0 Data Flow
</title>
    <meta 
      name="description"
      content="Lorem ipsum"
  />
    </head>

## State Channel L_0 Data Flow


![](https://github.com/Constellation-Labs/documentation-hub/blob/main/static/img/coreconcepts/6%20-%20state%20channel%20data%20flow.jpg)

### STEP 1: Define State Channel Snapshot Schema 

In order for the state channel to submit data into the Hypergraph for
validation it must first define the data types that it requires to
transmit to the network. This is what is referred to as state channel's
Application Chain Interface (ACI). Defining a "State Channel Snapshot Schema" allows the
Global Layer 0 network to understand what inputs to accept and which DAG
address to associate the state channel with so that the network is aware
of the balance of DAG held within this state channel address for
throughput allotment. Once this state channel snapshot schema is defined
it becomes immutable, creating a "monadic execution context" referred to
as a "L_0 Cell". A cell is an object that handles stages of
requests/queries and returns a result. It's an encapsulation of a
consensus process. Cells can be nested, joined or chained together, in
parallel or in sequence. This forms a data flow pipeline where
decentralized consensus is validating the data types defined by the
state channel which flow through the network where a function processes
the input type into the output type.

-   *What type of inputs can the L_0 cell support?*

> L0 inputs are an abstraction of data type(s) that have been defined in
> the state channel snapshot schema. Inputs can accept any arbitrary
> data structure, provided it is transitively human readable (i.e.
> JSON). A state channel is free to decide which data it wants to make
> public for other channels to deserialize if they want it to be
> verifiably correct, however, it could just be as simple as a posting a
> hashtable/hashmap that reflects an updated state of a system. In this
> scenario the data and logic that was used to form this state data
> could be kept within the state channel; effectively ensuring the data
> is kept private from the public network. Ultimately the use case will
> dictate the requirements and approach taken.

-   *What are the parameters of a state channel snapshot schema?*

> Below you will find a code snippet written in
> [Scala](https://www.geeksforgeeks.org/introduction-to-scala/), taken
> from Constellation Network's [Tessellation Code
> Repository](https://github.com/Constellation-Labs/tessellation) which
> can be compiled using the Java Virtual Machine (JVM). We can reference
> [StateChannelDef.scala](https://github.com/Constellation-Labs/tessellation/blob/a56b797b7a765450be69fd7f292762e1f5c6f75d/modules/kernel/src/main/scala/org/tessellation/kernel/StateChannelDef.scala)
> as a template for understanding the requirements for creating a state
> channel snapshot schema. To provide context we will examine the code
> row by row:

```scala
trait StateChannelDef[A \<: Ω, B <: Ω, S <: Ω] {

  val address: Address
  val kryoRegistrar: Map[Class[_], StateChannelKryoRegistrationId]

  def makeCell[F\[_]: Async](
    input: A,
    hgContext: HypergraphContext[F]
  ): Cell[F, StackF, A, Either[CellError, B], S]

  def inputPipe[F[_]: Async]: Pipe[F, A, A] = identity
  def outputPipe[F[_]: Async]: Pipe[F, B, B] = identity
```

-   The StateChannelDef trait serves as the highest-level interface
    which takes any data type input and encapsulates it within the Omega
    **Ω** data type which is the highest-level data type in HGTP. Omega
    is an abstract data type that enables the L_0 network to accept any
    data type that a state channel proxies to it for state validation. A
    is the input, B is the output, S is the termination condition for
    the execution chain.
```scala
val address: Address
```
-   The val address is an immutable data type where you pass in the
    Constellation Network wallet address that you want to associate the
    state channel with. The address is a hash of a public key that takes
    the form of a base58 string. An example of a Constellation address
    is DAG5ZTe31ysjikEgREqnf9CQR2KVYv3pfxV5NQZY. The address is divided
    into three parts: the prefix being 0xDAG, the parity check bit, and
    the tail. In this example, 5 is the parity direct sum bit and
    ZTe31ysjikEgREqnf9CQR2KVYv3pfxV5NQZY is the tail. We can verify the
    integrity of the address by adding all digits in the tail as a
    direct sum and comparing with the parity check bit. In the example,
    3+1+9+2+3+5 = 23 ; 2 + 3 = 5, which can also be represented as 23
    divmod 9 = 5.
```scala
val kryoRegistrar: Map[Class[_], StateChannelKryoRegistrationId]
```
-   Kryo is a Java framework that HGTP uses to facilitate serialization
    of objects into streams of bytes. When Kryo goes to write an
    instance of an object, first it needs to write something that
    identifies the object\'s class. **By default, all classes that Kryo
    will read or write must be registered beforehand**. By using Kryo
    serialization with pre-registration, the protocol ensures that only valid  	objects will be deserialized.
```scala
def makeCell[F[_]: Async](

  input: A,

  hgContext: HypergraphContext[F]

): Cell[F, StackF, A, Either[CellError, B], S]
```
-   The makeCell\[F\[\_\] creates a structure for executing state
    channel recursion, referred to here as hgContext:
    HypergraphContext\[F\]. This tells the L_0 what the parameterized
    data type input is (**A**) and the logic to apply to it to create
    the output (**B**). This creates an execution chain where the output
    from the state channel is either an error of computation or a
    terminal object \[CellError, B\], with (**S**) representing the
    termination condition.
```scala
def inputPipe[F[_]: Async]: Pipe[F, A, A] = identity

def outputPipe[F[_]: Async]: Pipe[F, B, B] = identity
```
-   A Pipe is a streaming element with an open input and output that
    reacts according to the embedded logic defined in the state channel
    snapshot schema. The Global L_0 network will transform data that is
    received from the state channel based on its execution context.
    Think of it as a function that takes a stream of a certain type and
    returns another stream of the same or different type, which enables
    asynchronous computations to be executed through incremental
    fetching of data such as a file, database, socket, etc. Data is
    loaded if and only if data is needed further down in the processing
    pipeline. If an error occurs downstream or an exception is thrown
    and not handled, the state channel will stop piping data. This is
    possible because of Scala's ability to verify and enforce
    constraints of types at compile time. Altogether, this enables
    repetitive execution of data passed into the L_0 Cell, which passes
    the output of the first execution as an input to the second
    execution, and so on until pre-defined conditions are met.

### STEP 2: Specify Logic that will Fold Data into a State Channel Snapshot

Now that we have established the base line requirements for a state
channel snapshot schema, we can begin to examine Constellation Network's
implementation. This is the state channel that is responsible for
organizing the network, managing global consensus, and defining the
parameters of the DAG L0 Token. We will start with an overview of the
syntax which is specific to defining the state channel snapshot schema
for the L_0 Cell.

-   *How do you create a state channel snapshot schema?*

> The code examples below that will be referenced are sourced from
> [L0TokenDef.scala](https://github.com/Constellation-Labs/tessellation/blob/develop/examples/l0-token/src/main/scala/org/example/L0TokenDef.scala)
> &
> [types.scala](https://github.com/Constellation-Labs/tessellation/blob/develop/examples/l0-token/src/main/scala/org/example/types.scala).
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
```scala
object L0TokenDef extends StateChannelDef[L0TokenStep, Ω, L0TokenStep]
```
-   In this example we are creating the state channel snapshot schema
    for an L0 Token by extending it from the StateChannelDef trait and
    specifying the input data type that is required to be received by
    the state channel L_0 cell as L0TokenStep. The L0TokenStep data type
    has been defined within a separate "types.scala" file which you will
    see in a subsequent code snippet below (it's a union of data types).
```scala
override val address = Address("DAG3k3VihUWMjse9LE93jRqZLEuwGd6a5Ypk4zYS")
```
-   This is the how the wallet address is defined for the state channel
    definition.
```scala
override val kryoRegistrar: Map[Class[_], StateChannelKryoRegistrationId] =

    Map(

      classOf[L0TokenTransaction] -> 1000,

      classOf[L0TokenBlock] -> 1001,

      classOf[CreateStateChannelSnapshot] -> 1002
)
```
-   Each data type that is defined within the state channel snapshot
    schema must be registered with its own unique Kyro ID so that it can
    be serialized using Kyro. The requirement is to assign each data
    type with an arbitrary ID greater than or equal to 1000. As seen
    above, the L0TokenStep data type is comprised of three different
    data types, each of which has a unique ID -- 1000, 1001, 1002. Every
    state channel has its own independent ID range for assignment to
    data types so there is no need to concern yourself with confliction
    between KryoIDs that have been assigned to types within other state
    channels.

This is a continuation of the code snippet from
[L0TokenDef.scala](https://github.com/Constellation-Labs/tessellation/blob/develop/examples/l0-token/src/main/scala/org/example/L0TokenDef.scala):

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

-   The **makeCell\[F\[\_\]** is where the validation logic is defined
    within the State Channel Snapshot Schema. The **L0TokenStep** data
    type is defined as the input type which is stored in the L_0 Cell
    for execution where it will undergo hylomorphic recursion whereby
    **AlgebraM** proxies the inner value (**a**) from **More** or
    (**result**) from **Done**, passing it to the output. The
    **Algebra** is a fold operation which reduces the ending type to the
    output terminal object. This is considered the Catamorphism
    operation of the Hylomorphic recursion scheme.
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
-   This is where the validation logic itself is defined. You can think
    of it as simply defining a sequence of events that you need executed
    in order to arrive at a programmatic outcome. This can incorporate
    rich data types that are being streamed into the state channel from
    any origin, whether that is an API call into a blockchain like
    Ethereum, a database, an IoT device, etc.

-   The **CoalgebraM** is the termination condition for the execution
    chain - it reacts on a single or multiple classes to return **Done**
    class. For every other type it executes repetitively the inner
    algebra and coalgebra for single steps. The **Coalgebra** is an
    unfold operation consisting of all steps used by a Cell and holds
    the execution order. This is considered the Anamorphism operation of
    the Hylomorphic recursion scheme.

-   In this example it is utilizing Slf4jLogger to log the events which
    are triggered by the application logic defined under "**input
    match**".

-   The **L0TokenStep** input type is a union type comprised of the
    **ProcessSnapshot** and **CreateStateChannelSnapshot** data types
    (defined in
    [types.scala](https://github.com/Constellation-Labs/tessellation/blob/develop/examples/l0-token/src/main/scala/org/example/types.scala))
    which are denoted by the case statement that precedes them. When the
    State Channel receives either input type, the relevant application
    logic is triggered in response.

-   If an input is received that doesn't match these two types (**case
    \_** ) it will reject it and throw an error "Unhandled coalgebra
    case".

The takeaway here is that all of the different validation steps defined
inside of the Cell are applied to the arbitrary data types required,
which creates a cryptographic representation of the data that is flowing
through the network so that the output of the Cell is the data structure
which reflects each of these steps, backed by a cryptographic hash. This
creates an abstract data type which you can then easily stitch together
by applying combinatorial functions to other Cells that have been
defined within the state channel or external state channels that are
also interfaced with HGTP.


### STEP 3: Sign and Send Binary Data to the Global L_0 Network

The state channel snapshots are posted to the Global L0 network
according to the frequency in which you have defined and will only
accept data that has been signed by the state channel. This is a simple
POST request API with the following syntax:
*POST /state-channel/{address}/snapshot*

The full Swagger UI API documentation can be viewed here: \[Insert
Hyperlink\]

### STEP 4: Query and Retrieve Binary Data from a Global Snapshot

Constellation provides a GET API that will allow you to retrieve state
channel data from the global snapshot by specifying the specific state
channel snapshot hash and its content as an Array\[Byte\]. State channel
snapshots create a linear chain with next snapshot referencing the
previous one, and so on.

The full Swagger UI API documentation can be viewed here: \[Insert
Hyperlink\]

Implementation Considerations: Depending on the use case and business
model, a state channel can decide to deserialize its state snapshot
information in an automated way for simpler consumption as a product or
service. For example, one could decide to incorporate this state data
into a front-end application of some software application or web site.
It could also create a secured API for querying deserialized data as a
monetized service. The way in which this data is implemented and exposed
is entirely up to the design choices and objectives of the state
channel.

### STEP 5: Deserialize the Binary Data according to the State Channel Snapshot Schema

State channel snapshots are stored within the Global L0 Hypergraph as
serialized binary objects, or byte streams. The Global L_0 does not
deserialize data contained within the state channel snapshots. In order
to recreate the object in memory you will need to know how to
deserialize the state channel snapshot. Data types are pre-registered at
the "type level" using Kyro serialization to enable verification, with
each data type possessing a unique Kryo ID. Knowledge of the Kryo ID and
corresponding data type schema will be required, in addition to any
other data handling considerations (compression, encryption, etc.).

It is up to the State Channel to decide how to communicate and/or
document their state channel snapshot schema to enable deserialization
of the data contained within their snapshots. A state channel can decide
to make some or all of this information public or private depending on
their use case and security requirements.

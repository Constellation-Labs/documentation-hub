---
title: Define
slug: define
hide_table_of_contents: false
---

![Define](/img/statechannels/dataflow.png)

<intro-end />

A state channel snapshot schema provides the following information about your state channel to the global L0 network:

- What inputs to accept
- The DAG address linked to the state channel
- The balance of DAG held in the linked address for throughput allotment

Once the snapshot schema is defined, it becomes immutable, creating a L0 cell. Cells can be nested, joined or chained together, in parallel or in sequence. This forms a data flow pipeline where the data types are validated. Finally, a function processes the input type into the output type.

## What type of inputs can the cell support?

L0 inputs are an abstraction of data types that have been defined in the state channel snapshot schema. Inputs can accept any kind of data as long as it can be parsed by the scala code (e.g. JSON). 

A state channel is free to decide which data it wants to make public for other channels to deserialize if they want it to be verifiably correct. However, it could just be as simple as posting a hashtable/hashmap that reflects an updated state of a system. In this scenario, the data and logic could be kept within the state channel, ensuring the data is kept private from the public network. Ultimately, the requirements and approach will depend on each use case.

## What are the parameters of a snapshot schema?

Below, you will find a Scala code snippet from the [Tessellation repo](https://www.notion.so/https-elk-finance-db740420371a47d89f4422e632f2bf31). We can reference `StateChannelDef.scala` as a template for understanding the requirements for creating a state channel snapshot schema. For context, we’ll go over the code line-by-line:

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

### StateChannelDef

The `StateChannelDef` trait serves as the highest-level interface which takes any data type input and encapsulates it within the Omega **Ω** data type which is the highest-level data type in HGTP. Omega is an abstract data type that enables the L_0 network to accept any data type that a state channel proxies to it for state validation. A is the input, B is the output, S is the termination condition for the execution chain.

```scala
trait StateChannelDef[A \<: Ω, B <: Ω, S <: Ω] {
```

### address

The `val address` is an immutable data type where you pass in the Constellation Network wallet address that you want to associate the state channel with. The address is a hash of a public key that takes the form of a base58 string. An example of a Constellation address is `DAG5ZTe31ysjikEgREqnf9CQR2KVYv3pfxV5NQZY`. The address is divided into three parts: the prefix being 0xDAG, the parity check bit, and the tail. In this example, 5 is the parity direct sum bit and `ZTe31ysjikEgREqnf9CQR2KVYv3pfxV5NQZY` is the tail. We can verify the integrity of the address by adding all digits in the tail as a direct sum and comparing with the parity check bit. In the example, 3+1+9+2+3+5 = 23 ; 2 + 3 = 5, which can also be represented as 23 divmod 9 = 5.

```scala
val address: Address
```

### kyroRegistrar

Kryo is a Java framework that HGTP uses to facilitate serialization of objects into streams of bytes. When Kryo goes to write an instance of an object, first it needs to write something that identifies the object's class. **By default, all classes that Kryo will read or write must be registered beforehand**. By using Kryo serialization with pre-registration, the protocol ensures that only valid objects will be deserialized.

```scala
val kryoRegistrar: Map[Class[_], StateChannelKryoRegistrationId]
```

### makeCell

The `makeCell[F[_]` creates a structure for executing state channel recursion, referred to here as `hgContext: HypergraphContext[F]`. This tells the L_0 what the parameterized data type input is `A` and the logic to apply to it to create the output `B`. This creates an execution chain where the output from the state channel is either an error of computation or a terminal object `[CellError, B]`, with `S` representing the termination condition.

```scala
def makeCell[F[_]: Async](

  input: A,

  hgContext: HypergraphContext[F]

): Cell[F, StackF, A, Either[CellError, B], S]
```

### inputPipe

A Pipe is a streaming element with an open input and output that reacts according to the embedded logic defined in the state channel snapshot schema. The Global L_0 network will transform data that is received from the state channel based on its execution context. Think of it as a function that takes a stream of a certain type and returns another stream of the same or different type, which enables asynchronous computations to be executed through incremental fetching of data such as a file, database, socket, etc. Data is loaded if and only if data is needed further down in the processing pipeline. If an error occurs downstream or an exception is thrown and not handled, the state channel will stop piping data. This is possible because of Scala's ability to verify and enforce constraints of types at compile time. Altogether, this enables repetitive execution of data passed into the L_0 Cell, which passes the output of the first execution as an input to the second execution, and so on until pre-defined conditions are met.

```scala
def inputPipe[F[_]: Async]: Pipe[F, A, A] = identity

def outputPipe[F[_]: Async]: Pipe[F, B, B] = identity
```
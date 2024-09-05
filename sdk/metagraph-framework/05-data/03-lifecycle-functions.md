---
title: Lifecycle functions
sidebar_label: Lifecycle functions
hide_table_of_contents: false
---

<intro-end />

Lifecycle functions are essential to the design and operation of a metagraph within the Euclid SDK. These functions enable developers to hook into various stages of the framework's lifecycle, allowing for the customization and extension of the core functionality of their Data Application. By understanding and implementing these functions, developers can influence how data is processed, validated, and persisted, ultimately defining the behavior of their metagraph.

### How Lifecycle Functions Fit into the Framework
In the Euclid SDK, lifecycle functions are organized within the L0 (DataApplicationL0Service), Currency L1 (CurrencyL1App), and Data L1 (DataApplicationL1Service) modules. These modules represent different layers of the metagraph architecture:

- **L0 Layer:** This is the base layer responsible for core operations like state management, validation, and consensus. Functions in this layer are critical for maintaining the integrity and consistency of the metagraph as they handle operations both before (`validateData`, `combine`) and after consensus (`setCalculatedState`).
- **Data L1 Layer:** This layer manages initial validations and data transformations through the /data endpoint. It is responsible for filtering and preparing data before it is sent to the L0 layer for further processing.
- **Currency L1 Layer:** This layer handles initial validations and transaction processing through the /transactions endpoint before passing data to the L0 layer. It plays a crucial role in ensuring that only valid and well-formed transactions are forwarded for final processing. Note that currency transactions are handled automatically by the framework and so only a small number of lifecycle events are available to customize currency transaction handling (`transactionValidator`, etc.).

By implementing lifecycle functions in these layers, developers can manage everything from the initialization of state in the `genesis` function to the final serialization of data blocks. Each function serves a specific purpose in the metagraph's lifecycle, whether it’s validating incoming data, updating states, or handling custom logic through routes and decoders.

### Lifecycle Overview
The diagram below illustrates the flow of data within a metagraph, highlighting how transactions and data updates move from the Currency L1 and Data L1 layers into the L0 layer. The graphic also shows the sequence of lifecycle functions that are invoked at each stage of this process. By following this flow, developers can understand how their custom logic integrates with the framework and how data is processed, validated, and persisted as it progresses through the metagraph.

![Euclid SDK](/img/sdk/data-update-lifecycle.png)

:::note
Note that some lifecycle functions are called multiple times and across L1 and L0 layers. It is usually recommended to create a common, shared implementation for these functions. 
:::

## Functions
### genesis
Data Applications allow developers to define custom state schemas for their metagraph. Initial states are established in the `genesis` function within the `l0` module's `DataApplicationL0Service`. Use the `OnChainState` and `CalculatedState` methods to define the initial schema and content of the application `state` for the `genesis snapshot`.

For example, you can set up your initial states using map types, as illustrated in the Scala code below:

```scala
class OnChainState(updates: List[Update]) extends DataOnChainState
class CalculatedState(info: Map[String, String]) extends DataCalculatedState

override def genesis: DataState[OnChainState, CalculatedState] = DataState(OnChainState(List.empty), CalculatedState(Map.empty))
```

In the code above, we set the initial state to be: 
* `OnChainState`: Empty list
* `CalculatedState`: Empty Map
 
### signedDataEntityDecoder
This method parses custom requests at the `/data` endpoint into the `Signed[Update]` type. It should be implemented in both `Main.scala` files for the `l0` and `data-l1` layers.
By default, you can use the `circeEntityDecoder` to parse the JSON:

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

The default implementation is straightforward:
```scala
def signedDataEntityDecoder[F[_] : Async: Env]: EntityDecoder[F, Signed[Update]] = circeEntityDecoder
```
For custom parsing of the request, refer to the example below:
```scala
  def signedDataEntityDecoder[F[_] : Async: Env]: EntityDecoder[F, Signed[Update]] = {
    EntityDecoder.decodeBy(MediaType.text.plain) { msg =>
    // Assuming msg.body is a comma-separated string of key-value pairs.
      val dataMap = msg.body.split(",").map { pair =>
        val Array(key, value) = pair.split(":")
        key.trim -> value.trim
      }.toMap

      val update = Update(dataMap.value)
      val hexId = Hex(dataMap.pubKey)
      val hexSignature = Hex(dataMap.signature)
      val signatureProof = SignatureProof(Id(hexId), Signature(hexSignature))
      val proofsSet = SortedSet(signatureProof)

      val proofs = NonEmptySet.fromSetUnsafe(proofsSet)
      Signed(update, proofs)
    }
  }
```
In this custom example, we parse a simple string formatted as a map, extracting the `value`, `pubKey`, and `signature` necessary to construct the `Signed[Update]`. 
This method allows for efficient handling of incoming data, converting it into a structured form ready for further processing.

### validateUpdate
This method validates the update on the L1 layer and can return synchronous errors through the `/data` API endpoint. Context information (oldState, etc.) is not available to this method so validations need to be based on the contents of the update only. Validations requiring context should be run in `validateData` instead. It should be implemented in both `Main.scala` files for the `l0` and `data-l1` layers

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
The code above rejects any update that has the update value less than or equal to 0.

### validateData
This method runs on the L0 layer and validates an update (data) that has passed L1 validation and consensus. `validateData` has access to the old or current application state, and a list of updates. Validations that require access to state information should be run here. It should be implemented in both `Main.scala` files for the `l0` and `data-l1` layers

For example, validate that a user has a balance before allowing an action:
```scala
def validateData(oldState: DataState[OnChainState, CalculatedState], updates: NonEmptyList[Signed[Update]]): IO[DataApplicationValidationErrorOr[Unit]] = IO {
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
The code above rejects any update that the current balance is lower than 0.

### combine
The `combine` method accepts the current state and a list of validated updates and should return the new state. This is where state is ultimately updated to generate the new snapshot state.
It should be implemented in both `Main.scala` files for the `l0` and `data-l1` layers

For example, subtract one from a balance map:
```scala
def combine(oldState: DataState[OnChainState, CalculatedState], updates: NonEmptyList[Signed[Update]]): IO[State] = IO {
  updates.foldLeft(oldState) { (acc, update) =>
    val currentBalance = acc.balances.getOrElse(update.address, 0)

    acc.focus(_.balances).modify(_.updated(update.address, currentBalance - 1))
  }
}
```
The code above will subtract one for the given address and update the state

### serializeState and deserializeState
These methods are required to convert the onChain state to and from byte arrays, used in the snapshot, and the OnChainState class defined in the genesis method.
It should be implemented in both `Main.scala` files for the `l0` and `data-l1` layers

For example, serialize to/from a State object:
```scala
  def serializeState(state: OnChainState): IO[Array[Byte]] = IO {
    state.asJson.deepDropNullValues.noSpaces.getBytes(StandardCharsets.UTF_8)
  }

  def deserializeState(bytes: Array[Byte]): IO[Either[Throwable, OnChainState]] = IO {
    parser.parse(new String(bytes, StandardCharsets.UTF_8)).flatMap { json =>
      json.as[OnChainState]
    }
  }
```
The codes above serialize and deserialize using `Json`

### serializeCalculatedState and deserializeCalculatedState
These methods are essential for converting the CalculatedState to and from byte arrays. Although the `CalculatedState` does not go into the snapshot, it is stored in the `calculated_state` directory under the `data` directory. For more details, refer to the [State Management](./state-management)  section.
It should be implemented in both `Main.scala` files for the `l0` and `data-l1` layers

For example, serialize to/from a State object:
```scala
  def serializeCalculatedState(state: CalculatedState): IO[Array[Byte]] = IO {
    state.asJson.deepDropNullValues.noSpaces.getBytes(StandardCharsets.UTF_8)
  }

  def deserializeCalculatedState(bytes: Array[Byte]): IO[Either[Throwable, CalculatedState]] = IO {
    parser.parse(new String(bytes, StandardCharsets.UTF_8)).flatMap { json =>
      json.as[CalculatedState]
    }
  }
```
The codes above serialize and deserialize using `Json`

### serializeUpdate and deserializeUpdate
These methods are required to convert updates sent to the `/data` endpoint to and from byte arrays. Signatures are checked against the byte value of the `value` key of the update so these methods give the option to introduce custom logic for how data is signed by the client. 
It should be implemented in both `Main.scala` files for the `l0` and `data-l1` layers

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
The codes above serialize and deserialize using `Json`

### serializeBlock and deserializeBlock
These methods are required to convert the data application blocks to and from byte arrays, used in the snapshot.  
It should be implemented in both `Main.scala` files for the `l0` and `data-l1` layers

For example, serialize to/from a State object:
```scala
  def serializeBlock(block: Signed[DataApplicationBlock]): IO[Array[Byte]] = IO {
    state.asJson.deepDropNullValues.noSpaces.getBytes(StandardCharsets.UTF_8)
  }

  def deserializeBlock(bytes: Array[Byte]): IO[Either[Throwable, Signed[DataApplicationBlock]]] = IO {
    parser.parse(new String(bytes, StandardCharsets.UTF_8)).flatMap { json =>
      json.as[Signed[DataApplicationBlock]]
    }
  }
```
The codes above serialize and deserialize using `Json`

### setCalculatedState
This function updates the `calculatedState`. For details on when and why this function is called, refer to the [State Management](./state-management) section.
It should be implemented in both `Main.scala` files for the `l0` and `data-l1` layers

```scala
  override def setCalculatedState(
    ordinal: SnapshotOrdinal,
    state  : CalculatedState
  )(implicit context: L0NodeContext[IO]): IO[Boolean] = {
      val currentCalculatedState = currentState.state
      val updated = state.devices.foldLeft(currentCalculatedState.devices) {
        case (acc, (address, value)) =>
          acc.updated(address, value)
      }

      CalculatedState(snapshotOrdinal, CalculatedState(updated))
    }.as(true)
        
```
The code above simply replaces the current address with the new value, thereby overwriting it.

### getCalculatedState
This function retrieves the `calculatedState`. 
It should be implemented in both `Main.scala` files for the `l0` and `data-l1` layers
```scala
  override def getCalculatedState(implicit context: L0NodeContext[IO]): IO[(SnapshotOrdinal, CheckInDataCalculatedState)] = 
  currentState.state.map(calculatedState => (calculatedState.ordinal, calculatedState.state))
        
```
The code above is an example of how to implement the retrieval of `calculatedState`.

### hashCalculatedState
This function hashes the `calculatedState`, which is used for `proofs`.
It should be implemented in both `Main.scala` files for the `l0` and `data-l1` layers
```scala
  override def hashCalculatedState(
    state: CalculatedState
  )(implicit context: L0NodeContext[IO]): IO[Hash] = {
    val jsonState = state.asJson.deepDropNullValues.noSpaces
    Hash.fromBytes(jsonState.getBytes(StandardCharsets.UTF_8))
  }
        
```
The code above is an example of how to implement the hashing of `calculatedState`.

### dataEncoder and dataDecoder
Custom encoders/decoders for the updates.
It should be implemented in both `Main.scala` files for the `l0` and `data-l1` layers
```scala
def dataEncoder: Encoder[Update] = deriveEncoder
def dataDecoder: Decoder[Update] = deriveDecoder
```
The code above uses the `circe` semiauto deriveEncoder and deriveDecoder

### calculatedStateEncoder and calculatedStateDecoder
Custom encoders/decoders for the calculatedStates.
It should be implemented in both `Main.scala` files for the `l0` and `data-l1` layers
```scala
def calculatedStateEncoder: Encoder[CalculatedState] = deriveEncoder
def calculatedStateDecoder: Decoder[CalculatedState] = deriveDecoder
```
The code above uses the `circe` semiauto deriveEncoder and deriveDecoder

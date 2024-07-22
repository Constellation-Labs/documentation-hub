---
title: Lifecycle functions
sidebar_label: Lifecycle functions
hide_table_of_contents: false
---

<intro-end />

To effectively utilize the Data Application within a Metagraph, it is essential to implement a variety of lifecycle functions. These functions are critical for the proper functioning of the Metagraph and are located within the `l0` and `data-l1` modules. Specifically, these functions are part of the `DataApplicationL0Service` and `DataApplicationL1Service`, respectively.

In the sections below, we will provide a comprehensive overview of each available function. For each function, we will describe its role within the lifecycle of the Metagraph. By implementing these functions correctly, users ensure that the Metagraph operates smoothly

## Functions
### genesis
Data Applications allow developers to define custom state schemas for their metagraph. Initial states are established in the `genesis` function within the `Main.scala` of the `l0` module. Use the `OnChainState` and `CalculatedState` methods to define the initial schema and content of the application `state` for the `genesis snapshot`.

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
This method parses custom requests at the `/data endpoin`t into the `Signed[Update]` type. It should be implemented in both `Main.scala` files for the `l0` and `data-l1` layers.
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

### routes
Custom GET endpoints can be defined as part of the `routes` overridable method of `BaseDataApplicationL1Service`. These endpoints can be used to provide custom views into snapshot state, or for any custom handling that the developer wishes to include as part of the application. 
It can be implemented in both `Main.scala` files for the `l0` and `data-l1` layers

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

A full example can be seen in the [DataAPI example IoT project](https://github.com/Constellation-Labs/metagraph-examples/blob/8f4a77cc51d5ea5d1ab458767766e49fbab52f7e/examples/water-and-energy-usage/modules/l0/src/main/scala/com/my/water_and_energy_usage/l0/Main.scala#L128). 

## Lifecycle Order
The lifecycle functions in a metagraph are executed in a specific order to ensure proper state management and data processing:

1. `genesis`: Sets up the initial states (l1).
2. `signedDataEntityDecoder`: Parses incoming requests (l1).
3. `validateUpdate`: Validates the update (l1).
4. `serializeUpdate - encoderData`: Serializes the update before sending to l0 (l1).
5. `deserializeUpdate - decoderData`: Deserializes the update (l0).
6. `deserializeState - decoderCalculatedState - deserializeCalculatedState`: Deserializes the states (OnChain and CalculatedState) (l0).
7. `getCalculatedState`: Retrieves the calculated state to validate proof and ordinal.
8. `validateData`: Validates the update (l0).
9. `combine`: Updates the states (l0).
10. `serializeState`: Serializes the OnChain state (l0).
11. `serializeBlocks`: Serializes the data application blocks (l0).
12. `hashCalculatedState`: Hashes the calculated state (l0).
13. `setCalculatedState`: Updates the calculated state after consensus and majority (l0).
14. `serializeCalculatedState - encoderCalculatedState`: Serializes the calculated state (l0).

This ordered execution ensures that all data transitions and state manipulations are processed systematically and correctly.

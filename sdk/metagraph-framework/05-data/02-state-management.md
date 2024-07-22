---
title: State Management
sidebar_label: State Management
hide_table_of_contents: false
---

<intro-end />

The DataAPI encompasses two distinct types of states: `OnChainState` and `CalculatedState`, each serving unique purposes.

* `OnChainState`: As the name implies, this state contains all the information intended to be permanently stored on the blockchain. This state

* `CalculatedState`: This state exists off-chain and is constructed based on incoming data. It is not stored on the blockchain

## Creating State Classes
Each state described above represents functionality from the Data Application. To create these states, you need to implement custom `traits` provided by the Data Application:

* The `OnChainState` must extend the `DataOnChainState` trait.
* The `CalculatedState` must extend the `DataCalculatedState` trait.

Both traits, `DataOnChainState` and `DataCalculatedState`, can be found in the [tessellation repository](https://github.com/Constellation-Labs/tessellation/blob/541c389f1194a3233b3357e78d5ba601d2139c68/modules/shared/src/main/scala/org/tessellation/currency/dataApplication/package.scala).

You can create your state classes within the `shared_data` module of your metagraph. To see examples of how these states are implemented, refer to the metagraph examples.

States are typically placed in the directory path: `modules -> shared_data -> types -> Types.scala`, but you are encouraged to organize your directories and files as suits your project's needs.

## OnChainState x CalculatedState
As previously described, both `OnChainState` and `CalculatedState` serve distinct purposes. The `OnChainState` is designed to persist information that users want recorded on the blockchain, whereas the `CalculatedState` is intended to hold data that should remain off the blockchain.

Consider the example from the [water and energy usage](https://github.com/Constellation-Labs/metagraph-examples/blob/main/examples/water-and-energy-usage). project. 

In this scenario, every update to water and energy usage is recorded. For instance, if we receive a request to update the water usage by 10 units, this information should be persisted on the blockchain using `OnChainState` to track the update accurately.

Shifting focus slightly, let's say there is a need to provide an encrypted private key for making requests to an external API, which only your metagraph can decrypt and execute. Suppose we need to check the energy expenditure from two months prior using this key. In this case, your metagraph decrypts the key, performs the external call, and retrieves the data. However, since this data is sensitive, it should not be stored on the blockchain. This is a perfect use case for `CalculatedState`, which conceals sensitive information from the blockchain while still allowing access to it.

The above example illustrates a basic application of these states. Further details on how to update these states will be provided in the subsequent sections.

## Updating State
The DataAPI includes several lifecycle functions crucial for the proper functioning of the metagraph. 

You can review all these functions in the [Lifecycle Functions](./lifecycle-functions) section.

In this discussion, we'll focus on the following functions: `combine` and  `setCalculatedState`

### combine
Is the central function to updating the states. This function processes incoming requests/updates by either increasing or overwriting the existing states. Here is the function's signature:

```scala
override def combine(
  currentState: DataState[OnChainState, CalculatedState],
  updates: List[Signed[Update]]
): IO[DataState[OnChainState, CalculatedState]]
```

The combine function is invoked after the requests have been validated at both layers (l0 and l1) using the `validateUpdate` and `validateData` functions.

The `combine` function receives the `currentState` and the `updates`
* `currentState`: As indicated by the name, this is the current state of your metagraph since the last update was received.
* `updates`: This is the list of incoming updates. It may be empty if no updates have been provided to the current snapshot.
 
The output of this function is also a state, reflecting the new state of the metagraph post-update. Therefore, it's crucial to ensure that the function returns the correct updated state.

Returning to the `water and energy usage` example, you can review the implementation of the combine function [here](https://github.com/Constellation-Labs/metagraph-examples/blob/main/examples/water-and-energy-usage/modules/shared_data/src/main/scala/com/my/water_and_energy_usage/shared_data/combiners/Combiners.scala). 
In this implementation, the function retrieves the current value of water or energy and then increments it based on the amount specified in the incoming request for the `CalculatedState`, while also using the current updates as the `OnChainState`.

### setCalculatedState
Following the combine function and after the snapshot has been accepted and consensus reached, we obtain the `majority snapshot`. This becomes the official snapshot for the metagraph. At this point, we invoke the `setCalculatedState` function to update the `CalculatedState`.

This state is typically stored `in memory`, although user preferences may dictate alternative storage methods. 
You can explore the implementation of storing the `CalculatedState` in memory by checking the [CalculatedState.scala](https://github.com/Constellation-Labs/metagraph-examples/blob/main/examples/water-and-energy-usage/modules/shared_data/src/main/scala/com/my/water_and_energy_usage/shared_data/calculated_state/CalculatedState.scala) and [CalculatedStateService.scala](https://github.com/Constellation-Labs/metagraph-examples/blob/main/examples/water-and-energy-usage/modules/shared_data/src/main/scala/com/my/water_and_energy_usage/shared_data/calculated_state/CalculatedStateService.scala) classes, where we have detailed examples.

In the sections below, we will discuss `serializers` used to serialize the states.

## Serializers/Deserializers
We also utilize other lifecycle functions for `serialize/deserialize` processes, each designed specifically for different types of states.

For the `OnChainState`, we use the following functions:
```scala
def serializeState(
  state: OnChainState
): F[Array[Byte]]

def deserializeState(
  bytes: Array[Byte]
): F[Either[Throwable, OnChainState]]
```

For the `CalculatedState` we have:
```scala
def serializeCalculatedState(
  state: CalculatedState
): F[Array[Byte]] 

def deserializeCalculatedState(
  bytes: Array[Byte]
): F[Either[Throwable, CalculatedState]]
```

The `OnChainState` serializer is employed during the snapshot production phase, prior to consensus, when nodes propose snapshots to become the official one.
Once the official snapshot is selected, based on the majority, the `CalculatedState` serializer is used to serialize this state and store the `CalculatedState` on disk.

The deserialization functions are invoked when constructing states from the `snapshots/calculatedStates` stored on disk. For instance, when restarting a metagraph, it's necessary to retrieve the state prior to the restart from the stored information on disk.

In the following section, we will provide a detailed explanation about disk storage.

## Disk Storage
When operating a Metagraph on layer 0 (ml0), a directory named `data` is created. This directory is organized into the following subfolders:

* `incremental_snapshot`: Contains the Metagraph snapshots.
* `snapshot_info`: Stores information about the snapshots, including internal states like balances.
* `calculated_state`: Holds the Metagraph calculated state.

Focusing on the `calculated_state`, within this folder, files are named after the snapshot ordinal. These files contain the CalculatedState corresponding to that ordinal. We employ a logarithmic cutoff strategy to manage the storage of these states.

This folder is crucial when restarting the Metagraph. It functions as a `checkpoint`: instead of rerunning the entire chain to rebuild the `CalculatedState`, we utilize the files in the `calculated_state` directory. This method allows us to rebuild the state more efficiently, saving significant time.

## Data Privacy
As previously mentioned, the `CalculatedState` serves a crucial role by allowing the storage of any type of information discreetly, without exposing it to the public. This functionality is particularly useful for safeguarding sensitive data. When you use the `CalculatedState`, you can access your information whenever necessary, but it remains shielded from being recorded on the blockchain..
This method offers an added layer of security, ensuring that sensitive data is not accessible or visible on the decentralized ledger.

By leveraging `CalculatedState`, organizations can manage proprietary or confidential information such as personal user data, trade secrets, or financial details securely within the metagraph architecture. The integrity and privacy of this data are maintained, as it is stored in a secure compartment separated from the public blockchain.

## Scalability
Metagraphs face a constraint concerning the size of snapshots: `they must not exceed 500kb`. If snapshots surpass this threshold, they will be rejected, which can impose significant limitations on the amount of information that can be recorded on the blockchain.

This is where the CalculatedState becomesparticularly valuable. It allows for the storage of any amount of data, bypassing the size constraints of blockchain snapshots. Moreover, CalculatedState offers
flexibility in terms of storage preferences,enabling users to choose how and where their data is stored.

This functionality not only alleviates the burden of blockchain size limitations but also enhances data management strategies. By utilizing CalculatedState, organizations can efficiently manage larger datasets, secure sensitive information off-chain, and optimize their blockchain resources for critical transactional data.
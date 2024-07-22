---
title: Data Application Module
sidebar_label: Overview
hide_table_of_contents: false
---

<intro-end />

The Data Application (or Data API) is a module available to Metagraph Framework developers to ingest and validate custom data types through their metagraphs. It's a set of tools for managing data interactions within the metagraph that is flexible enough to support a wide range of application use cases such as IoT, NFTs, or custom application-specific blockchains. 

:::info Example Code
Want to jump directly to a code example? A number of examples can be found on Github under the [Metagraph Examples](https://github.com/Constellation-Labs/metagraph-examples/tree/main/examples) repo.
:::


## Basics
The basic function of a Data Application is to accept data through a special endpoint on the Data L1 layer, found at `POST /data`. Receiving a request triggers a series of lifecycle functions for the data update, running it through validation and consensus on both Data L1 and L0, and then eventual inclusion into the custom data portion of the metagraph snapshot. 

This process is defined in detail in [Lifecycle Functions](./lifecycle-functions) but an abreviated version is provided below as an overview. In order to interact with the framework, developers can tap into these lifecycle events to override the default behavior and introduce their own custom logic.

### Data Flow
1. Data accepted by the `/data` endpoint
2. Data is parsed (and reformatted if necessary) with `signedDataEntityEncoder`
3. Custom validations are run on Data L1 with `validateUpdate`
4. Data is packaged into blocks, run through L1 consensus and sent to L0
5. Additional custom validations are run w/L0 context available with `validateData`
6. Data is packaged into on-chain (snapshot) and off-chain (calculated state) representations with the `combine` function
7. The snapshot undergoes consensus and is accepted into the chain

See [Lifecycle Functions](./lifecycle-functions) for more detail.

### State Management and Storage
State is defined within the Metagraph Framework in two ways: on-chain (snapshot) and off-chain (calculated state). The developer has control over how both kinds of state are created via the `combine` lifecycle function which is called prior to each round of L0 consensus. 

On-chain state is stored in the metagraph's snapshot chain and each of these snapshots is submitted to the Global L0 for inclusion in a global snapshot. As such, on chain state incurs fees and has a maximum size of 500kb (see [Limitations and Fees](/metagraphs/concepts/limitations-fees)). This also means that any data stored in on-chain state is made public through the public nature of global snapshots on the Hypergraph. However, the developer has the option to encrypt that state through the `serializeState` lifecycle function, or alternatively, to limit the data that's stored in on-chain state. 

Off-chain or "calculated" state is data that is stored off-chain but can be recreated by the accumulation of all snapshots in order from genesis to current. In this way, it's calculated from the chain but not part of the chain data itself. Calculated state is stored in memory by default, and recreated from a file-based cache on bootup, but the relevant lifecycle functions can be used to hook into other data stores such as a local database or an external storage service. Since calculated state is never sent to the Hypergraph, it does not incur any fees and has no limitations on size or structure beyond hardware limits. 

See [State Management](./state-management) for more details. 

### Querying Metagraph Data
Metagraphs support the creation of custom HTTP endpoints on any of the metagraph layers. These endpoints are useful for allowing external access to calculated state or creating views of the chain data for users. 

See [Custom Queries](/sdk/metagraph-framework/custom-endpoints) for more details. 

### Scheduled Tasks
Scheduled tasks on a metagraph are possible through the concept of daemons, worker processes that run on a timer. These processes allow the metagraph codebase to react to time-based triggers rather than waiting for an incoming transaction or data update to react to. Daemons are especially useful for syncing behavior, such as fetching data from an external source on a regular schedule or pushing internal data externally on a regular basis. 

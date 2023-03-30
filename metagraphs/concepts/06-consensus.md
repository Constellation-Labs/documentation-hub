---
title: Consensus
hide_table_of_contents: false
---
<intro-end />

The consensus architecture for Constellation consists of two primary layers, Layer 0 (L0) and Layer 1 (L1), both of which can be considered extendable forms of consensus. The L0 layer is primarily used to represent the overall state snapshot of data in the system, while the L1 layer acts as the leading edge of newly added data in a graph format. The L1 layer serves as a data source for the L0 layer, which compiles everything together into a single state. L1 operates on data without considering prior state changes, except for immediate data dependencies. Through the SDK and framework, both L0 and L1 can work with different data types, representing consensus on various types of data with arbitrary validation criteria. L0 & L1 components function together to power multiple types of different applications on different data types, beyond just currency applications, and can be customized or used individually, with the standard configuration recommended of both an L0 & L1 extension.

The below diagram shows all the steps involved in the custom consensus mechanism (both Layer-1 and Layer-0).

![Complete Consensus](/img/statechannels/consensus_complete.png)

## Consensus Layers

The customized consensus mechanism in this model involves both Layer 1 and Layer 0. Each meta graph (or extended application invoking the same consensus model) consensus is performed by node operators subscribing to or running the application, with a cluster of at least 3 nodes recommended for decentralized and trust-minimized consensus. Metagraphs incentivize node operators with rewards for staking, which can be paid out in any token such as DAG, BTC, or a metagraphs own L0 token. Each metagraph can communicate back to the larger network through the L0 snapshot integration mechanism, which can be used to synchronize state information across multiple implementing applications. 

### Layer 1
This is the first stage of the consensus mechanism, which is part of the metagraph’s initial operations. Metagraph nodes receive Layer 1 transactions from external sources (data sources, centralized components of the application, etc.) and perform validation, potentially specific to that L1 extension & unrelated to bulk external state, allowing greater parallelization and scalability.

### Layer 0
This is the second stage of the consensus mechanism, following the Layer 1 consensus step. Once the metagraph nodes have validated the Layer 1 transactions, they are folded into snapshots. These snapshots are then input to the Layer 0 consensus. Here, validation occurs upon the shared layers, with L0 nodes validating the shared subset of operations offered by the L1, as well as confirming their L1 validations are consistent with total state updates. The snapshots here are also accumulated by each meta graph into a global L0 state by the main DAG L0 chain.

## PRO Model 
:::info Planned for a future release
The PRO model is currently under development and is scheduled to be released in the Taurus era. 
:::

The PRO Model (Proof of Reputable Observation) acts on input ratings supplied by users about other peers, providing relative decision making behavior local to each node in the case of forks and conflicts occurring on the network. A mechanism similar to slashers is used when multiple signatures are produced across various data, and the local model scores infer ratings across the network. This allows users to configure their conflict choice weightings. The PRO Model is utilized during the download process and network joining to ensure the correct network is joined. During the consensus proposal acceptance phase, the majority is chosen relative to the node's own beliefs and ratings. Data from models of multiple nodes is added to snapshots to form a deterministic basis for resolving minor forks and trivial conflicts to prevent excessive forking.

## Diagrams

Layer 1 transactions are passed through the initial round of validation, i.e., the Layer 1 consensus mechanism. Once this initial round of validation is completed and signed by the required number of validating nodes, the transactions are collated into either Layer 1 blocks (containing Layer 1 transactions) or a meta graph L0 snapshot. L0 Metagraph snapshots are customizable to the application and can contain any custom data intended to be passed to the global DAG Layer 0 for the second round of consensus and to be captured on the ledger.
Various meta graph snapshots are then grouped into a 'global snapshot,' which is passed through the Layer 0 consensus mechanism. Each application snapshot that forms the global snapshot undergoes a custom consensus mechanism defined for that metagraph. If the snapshot passes Layer 0 consensus, it is captured on the ledger as part of the global snapshot.
Validation mechanisms in Layer 0 may differ from those in L1 consensus and are concerned with shared executable dependencies offered by L0. If the validation fails, the Layer 1 snapshot is discarded. Layer 1 should subscribe to events from Layer 0 to identify if a Layer 1 snapshot has failed the consensus and should be reset. 

This is as shown on the diagrams below.

![Layer 1](/img/statechannels/consensus_layer1.png)

![Layer 0](/img/statechannels/consensus_layer0.png)


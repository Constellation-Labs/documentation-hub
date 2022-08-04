---
title: Nodes
slug: nodes
hide_table_of_contents: false
---

Constellation’s Hypergraph Network is powered by its decentralized network of nodes. These nodes provide the processing power that enables Hypergraph to process huge **volumes** of data of different **varieties** at very high **velocities** (the 3Vs of Big Data). Based on their role in the network and their functions, Hypergraph defines these types of nodes:

## State channel node

Such a node is specific to a state channel and enables the state channel to run its business logic. These nodes typically allow the state channel to handle the following functions:

1. **Accept** huge volumes of varied data sets from various real-world data sources. These are referred to as Layer 1 transactions.
2. **Validate** data (Layer 1 transactions) received from real world data sources by
passing them through the first level of consensus (Layer 1 consensus).
3. **Fold** the validated Layer 1 transactions into the state channel snapshots (Layer 1 snapshot). Each state channel snapshot can contain data that is specific to the state channel.
4. **Sign** the state channel snapshot using the state channel’s signature key. This allows Layer 0 to validate the authenticity of the data posted to it.
5. **Send** these state channel snapshots (Layer 1 snapshot) to Layer 0 for the second
level of consensus (Layer 0 consensus).
6. **Subscribe** to Layer 0 events so that any state channel snapshot that has been invalidated by Layer 0 consensus can be suitably corrected. Node operators running such a node are usually rewarded in the corresponding Layer 0 token.

## Validator node (full node)

Such a node operates on Global L0; it’s the glue that brings all Layer 1 protocols together by providing a global cross-chain liquidity pool. These nodes provide the following functionalities:

1. Accept state channel snapshots from Layer 1 (state channel nodes operating on Layer 1).
2. Validate the signature associated with the state channel snapshot to ensure authenticity of the snapshot.
3. Group state channel snapshots from various state channels into a global snapshot.
4. Run a consensus mechanism on the global snapshot to validate the data associated with the state channel snapshots. As part of the global snapshot processing, balances may be updated to reflect validated Layer 1 snapshots. These balances may be either in DAG or the corresponding Layer 0 tokens. 
5. Store the validated global snapshot on the ledger.
6. Provide cross-chain liquidity pool, which enables various Layer 1 protocols to be interoperable. This is achieved using DAG tokens as the medium of exchange. Node operators running such a node are usually rewarded in DAG.

## Hybrid node

A hybrid node is one that can operate both as a state channel node and a validation node. Node operators running such a node can be rewarded either in the corresponding Layer 0 token or in DAG.

## Lite node

This is a special type of node that is specific to a state channel. These nodes require lower amounts of collateral and processing power and hence can be run on a variety of devices by users who do not possess the required collateral to run a full node. These nodes usually run on devices such as mobile phones, cars, consumer devices, smart watches, etc. and provide validation of data at the source.
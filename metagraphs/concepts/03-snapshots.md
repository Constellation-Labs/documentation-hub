---
title: Snapshots
hide_table_of_contents: false
---
<intro-end />

## Overview

Snapshots are critical components in the Constellation Network's Hypergraph network. They represent the state of the network at a specific moment in time. Much like blocks are the unit of state that’s saved to the immutable ledger in blockchain-based systems, snapshots are the unit of state saved to Constellation’s DAG-based immutable ledger.

There are two primary snapshot types for metagraph development:

1. **Global Snapshots**: Generated on the Global L0 network, these snapshots encapsulate the network state at a specific point in time. They include data from both the DAG L1 and metagraph networks.
2. **Metagraph Snapshots**: Produced by a metagraph's L0 network layer, these snapshots are submitted to the Global L0 for inclusion in a Global Snapshot. They can be submitted as raw serialized data, which is not decodable by the Global L0, or as specific serialized data formats that are decodable by the Global L0 for validation, such as the Currency Snapshot format described below.


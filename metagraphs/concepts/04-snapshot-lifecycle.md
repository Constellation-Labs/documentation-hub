---
title: Snapshot Lifecycle
hide_table_of_contents: false
---
<intro-end />

:::info

This document describes the lifecycle of Currency Snapshots, a specific form of metagraph snapshots. 

:::

Currency Snapshots are a specific snapshot format that can be deserialized and validated by the Global L0 network. These snapshots contain Metagraph Token transactions and associated metadata. Other consensus processes are possible on metagraphs but the following is provided as a specific illustrative example. 

## Triggering snapshot consensus

Snapshots are created during a process called “Snapshot Consensus” on a Currency Metagraph’s L0 network. *Currency L0* node (or nodes) receives blocks created by *Currency L1* nodes. Every time the block is received by Currency L0 node, it starts its own event-based consensus round. The round can be facilitated with other nodes but snapshot consensus can be finished by just a single node. In case of multiple nodes the proposals are exchanged between the nodes.

```jsx
┌────────────────────────────────┐
│                                │
│            L1 NODES            │
│                                │
└───┬────────────────────────────┘
    │ send blocks
    ▼
┌────────────────────────────────┐
│                                │
│            L0 NODES            │◄────┐
│                                │     │
└───┬────────────────────────────┘     │
    └──────────────────────────────────┘
            snapshot consensus
```

## Snapshot Consensus Results

The outcome of Snapshot Consensus is the **`CurrencySnapshot`** artifact. To reach consensus, all nodes must agree, achieved through a majority algorithm. In case of conflict, the vote with the most signatures is considered the truth. The artifact must be signed by all L0 nodes participating in the snapshot consensus round (facilitators). Once created, the artifact is stored on the node to provide access for the next consensus round, allowing the formation of a proper chain by referencing the previous artifact in the next one. The artifact is also sent to the Global L0 network, and once accepted, the currency state is confirmed in the global state.

```jsx
             ┌────────────────────────────────┐
             │                                │
             │            L1 NODES            │
             │                                │
             └───┬────────────────────────────┘
                 │ 1. send blocks
                 ▼
             ┌────────────────────────────────┐
             │                                │
       ┌─────┤            L0 NODES            │◄───┐
       │     │                                │    │
       │     └───┬────────────────────────────┘    │
       │         │                                 │
3.send snapshot  └─────────────────────────────────┘
       │         2. create snapshot (via consenus)
       │
       │     ┌────────────────────────────────┐
       │     │                                │
       │     │      Global L0 NODES           │
       └────►│                                │
             └────────────────────────────────┘
```

## Snapshot Consensus Triggers

The Currency Snapshot from the Currency L0 network serves as the trigger for Global snapshot consensus on Global L0. Similarly, the block from Currency L1 acts as the trigger for snapshot consensus on the Currency L0 network. 

## Handling Inconsistencies

In certain circumstances, a Currency Snapshot may not reach the Global Snapshot. This could be the result of technical issues such hardware faults or network host downtime, or the snapshot could be rejected by the Global L0 during validation. Currency snapshots in this state would not have the confirmation from the Global L0 and would not be included in the global state. In these cases, the snapshot should be rolled back to the latest Currency Snapshot included in a Global Snapshot. In such cases, any previously accepted transaction in that snapshot would be rejected and would need to be resent.

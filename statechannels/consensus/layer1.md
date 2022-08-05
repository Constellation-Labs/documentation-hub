---
title: Layer 1 Consensus
slug: layer1
hide_table_of_contents: false
---

This is the consensus mechanism that is run as part of the state channel operations. State
channel nodes receive Layer 1 transactions from external sources (data sources, centralized components of the application, etc.). It follows the same consensus mechanism as layer-0, but is customized by the specific implementation.

These Layer-1 transactions are passed through the initial round of validation i.e., the Layer-1 consensus mechanism. Once this initial round of validation has been completed and signed by the required number of validating nodes, the transactions are collated into either Layer-1 blocks (containing Layer-1 transactions) or Layer-1 snapshots. Layer-1 snapshots are customizable to the state channel and can contain any custom data that is intended to be passed to Layer-0 for the second round of consensus and to be captured on the ledger.

This is as shown on the diagram below.

![Layer 1](/img/statechannels/consensus_layer1.png)
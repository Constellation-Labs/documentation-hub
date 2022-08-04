---
title: Layer 0 Consensus
slug: layer0
hide_table_of_contents: false
---

This is the second stage of the consensus mechanism, and it follows the Layer 1 consensus step described in the section above. Once the state channel nodes have validated the Layer 1 transactions, they are folded into Layer 1 snapshots. These blocks are the input to Layer-0 consensus.

## Overview

The Layer 1 snapshots from various state channels are grouped together into a ‘global snapshot’. This global snapshot is passed through the Layer-0 consensus mechanism. Each Layer-1 snapshot which forms the global snapshot undergoes a custom consensus mechanism that is defined for that state channel. If the snapshot passes Layer-0 consensus, it is captured on the ledger as part of the global snapshot. If the validation fails, the Layer-1 snapshot is discarded.
Layer-1 should subscribe to events from Layer-0 to identify if a Layer-1 snapshot has failed the consensus. This will allow Layer-1 to take any corrective actions.

This is as depicted in the diagram below.

![Layer 1](/img/statechannels/consensus_layer0.png)
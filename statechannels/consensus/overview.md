---
title: Overview
slug: overview
hide_table_of_contents: false
---

## State Channel Consensus

- State channel consensus is performed by node operators, and a state channel requires at least one node to operate and self-validate, but a cluster of 3 nodes is recommended for decentralized and trustless consensus.
- State channels incentivize node operators with rewards for staking with them.
- Rewards can be paid out in any token such as DAG, BTC or a state channel’s own L0 token.

## Layers of Consensus

### Layer 1
This is the consensus mechanism that is run as part of the state channel operations. State channel nodes receive Layer 1 transactions from external sources (data sources, centralized components of the application, etc.).

### Layer 0
This is the second stage of the consensus mechanism, and it follows the Layer 1 consensus step described in the section above. Once the state channel nodes have validated the Layer 1 transactions, they are folded into Layer 1 snapshots. These blocks are the input to Layer 0 consensus.

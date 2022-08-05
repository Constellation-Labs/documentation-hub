---
title: Overview
slug: overview
hide_table_of_contents: false
---

The L0 protocol is a form of extendable consensus, where the same procedure can be applied both to individual sub-networks & state channels, as well as by the network as a whole. The same process is applied at both layers, with the participation & validation determined by application-specific dependencies, and individual peer pub-sub behavior. 

- State channel consensus is performed by node operators, and a state channel requires at least one node to operate and self-validate, but a cluster of 3 nodes is recommended for decentralized and trust minimized consensus.
- State channels incentivize node operators with rewards for staking with them.
- Rewards can be paid out in any token such as DAG, BTC, or a state channel’s own L0 token.

There are two layers of consensus that are supported by Hypergraph:

### Layer 1 consensus
This is the consensus mechanism that is run as part of the state channel operations. State channel nodes receive Layer 1 transactions from external sources (data sources, centralized components of the application, etc.) and can run validation potentially specific to that L1 extension.

### Layer 0 consensus
This is the second stage of the consensus mechanism, and it follows the Layer 1 consensus step described in the section above. Once the state channel nodes have validated the Layer 1 transactions, they are folded into Layer 1 snapshots. These blocks are the input to Layer 0 consensus. Here, validation proceeds upon the shared layers, with L0 nodes validating the shared subset of operations offered by the L1, as well as confirming their L1 validations if members of that L1.
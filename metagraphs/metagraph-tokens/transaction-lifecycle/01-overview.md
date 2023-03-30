---
title: Overview
hide_table_of_contents: true
---

<head>
  <style>{`
    :root {
      --doc-item-container-width: 60rem;
    }
  `}
  </style>
</head>

<intro-end />

This document describes the lifecycle of a L0 token transaction from creation to finality. It is a useful reference for understanding how a transaction flows through each layer of the network to either be rejected at various stages, or to reach finality after being included in a Global Snapshot. 

![Token Lifecycle](/img/metagraphs/token-lifecycle.png)
## Lifecycle Overview

- **Transaction Creation:** A transaction is created, signed, and sent to the Currency L1 network via the REST API
- **Initial L1 Transaction Validation:** The transaction undergoes initial validation which checks the signature, destination address, and parent chain of the transaction for validity.
    - If initial validation fails, an error is returned from the REST API endpoint to the sender and the transaction is dropped.
- **L1 Transaction Pool:** Transactions that pass initial validation are added the Currency L1 transactions pool in a “waiting” state.
- **Block Creation Consensus:** A block creation round (L1 consensus) is initiated on the Currency L1 network which bundles transactions into blocks
- **Currency L1 Block Validation:** Transactions within each block are further validated at this point which checks if the parents of a block were accepted and checks that all balance changes are valid.
    - If transaction fails during block consensus, the entire block fails and the transactions are dropped
- **Currency L0 Block Validation:** Valid blocks are sent to the Currency L0 layer and the same block validations are run again.
- **Currency L0 Snapshot Consensus:** Valid blocks are added to a Currency Snapshot which undergoes snapshot consensus
- **Global L0 Validation:** Currency Snapshots are sent to the Global L0 for final validation and inclusion into a Global Snapshot.
- **Finality:** Once included in a Global Snapshot, a transaction has reached finality and cannot be rejected or reverted.
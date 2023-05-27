---
title: Lifecycle Process
hide_table_of_contents: false
---

<intro-end />

## Transaction Creation

Transactions can be created by a wallet app or developer library. Transactions must be signed with the sender’s private key and follow other transaction format guidelines. 

See [wallets](/learn/tools-resources/wallets), [dag4.js](/hypergraph/dag4), and [Network APIs](/hypergraph/architecture). 

## Initial L1 Transaction Validation

The `/transactions` endpoint on the Currency L1 REST API receives transactions via POST request and performs limited validation on each transaction. 

The transaction is immediately validated for the following:

- Transaction format is correct
- It has a correct signature belonging to the sender address
- The destination address is different from the source address
- The parent reference (lastRef) is valid

A parent reference can be invalid if the transaction has the same or a lower ordinal than a transaction that has already been processed by the node. It can also be invalid if the ordinal is one greater than the known last reference but the transaction provides a different lastRef hash than the node expects. 

Note that a balance check is not performed at this stage so no immediate error is returned to the sender via the REST API in the case of the sender having insufficient balance to complete the transaction. Transaction balance checks are performed later during the block validation process. 

Transactions that fail validation are dropped and an error is returned to the sender via the API response. 

## L1 Transaction Pool

Transactions that pass initial validation are moved to the transaction mempool in a “waiting” state. Transactions stay in this pool until they are pulled into a block during the block creation process. 

## Block Creation Consensus

The block creation process bundles transactions into blocks which then undergo additional validations. 

An individual node can initiate a block creation round if the following criteria are met: 

- The node is connected to the L1 network
- At least 3 total L1 network nodes are in “Ready” state
- There are transactions in the transaction pool waiting to be processed

During the round, transactions are pulled from the transaction pool. There is an upper limit to the number of transactions that pulled per round. This value can be configured for custom implementations. For DAG and L0 tokens, the maximum number of transactions per round is 100 for each facilitator participating in the round. So for a round with 3 facilitators, up to 300 transactions could be pulled. If the number of transactions in the transaction pool is greater than the number that can be pulled into a consensus round, transactions with the highest fee are prioritized. 

Transactions are selected to be included in blocks based on their chain validity. Only transactions forming a proper chain with the last accepted transaction for an address are included. Transactions that are not selected at this point remain in the transaction pool to be processed in a future round. For example, a transaction may have an ordinal value that is ahead of the last accepted transaction by more than 1 and be put back into the transaction pool until transactions with lower ordinals for that address are processed. 

## Currency L1 Block Validation

Once blocks are formed they undergo additional validation on the block as a whole. This validation step validates for the following:
- The parents of a block have been accepted by the L1 consensus process
- The parents of a block have been accepted by the Currency L0 for block creation
- All balance changes contained in the block are valid

If a block fails this validation step, the block and all transactions within it are discarded and dropped from the network. There is no automatic retry process for transactions that are dropped at this step - they must be manually sent again to the network. 

If block validation succeeds, the block is sent to the Currency L0 for inclusion in a Currency Snapshot. 

## Currency L0 Block Validation

The same validations from the previous step are run against blocks submitted to the Currency L0 for inclusion in a snapshot. 

## Currency L0 Snapshot Consensus

Validated blocks are included in Currency Snapshots which undergo their own consensus process on the Currency L0 network. See [Snapshot Lifecycle](/metagraphs/concepts/snapshot-lifecycle) for additional information on that process. 

## Global L0 Validation

Currency snapshots are sent to the Global L0 to undergo Global L0 validation and be included in Global Snapshots. See [Snapshot Lifecycle](/metagraphs/concepts/snapshot-lifecycle) for additional detail on that process. 

## Finality

Once the transaction has been included in a Currency Snapshot and the snapshot has been included in the Global Snapshot, it has reached finality and is permanently added to the ledger. At this stage, DAG and L0 token transactions can be queried on the Block Explorer API or other transaction indexing tools.
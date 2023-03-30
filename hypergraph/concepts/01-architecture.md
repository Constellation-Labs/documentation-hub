---
title: Architecture
slug: /architecture
sidebar_label: Architecture
hide_table_of_contents: false
---
<intro-end />

:::info Transaction Lifecyle
Interested in more in-depth information about the currency transaction lifecycle and data flow within the Hypergraph? See [Transaction Lifecycle](/metagraphs/metagraph-tokens/transaction-lifecycle/overview) for more info.
:::

![Constellation Network architecture overview](/img/hypergraph/api-architecture.png)

In order to make the most of Constellation Network APIs, a brief understanding of the architecture of the network is useful. The Hypergraph consists of multiple layers of networks of individual responsibility through which transactions flow. Each of the major network layers has REST API endpoints available with distinct functionality. Transactions are sent to the outermost layer, labeled as L1 networks in the graphic, before being processed into a state snapshot in an L0 layer. 

DAG transactions are sent to the DAG L1 network which bundles the transactions into blocks and sends them to the Global L0 for inclusion into global snapshots. Snapshots are then indexed by the Block Explorer via a snapshot streaming service that processes them. 

Metagraph token transactions flow in a similar way from the metagraph currency L1 where they're received, bundled into blocks, and then passed to the currency L0 layer to be included in metagraph snapshots. The metagraph snapshots are then submitted to the Global L0 to be included in global snapshots and eventually indexed into the Block Explorer via the snapshot streaming service. 

The APIs for each of the L1 and L0 layers is nearly identical with a few minor differences, namely endpoint naming of `/dag` for DAG endpoints and `/currency` for currency endpoints. You can explore the API specs for each in the [Network APIs](/hypergraph/global-apis) sections below. 

In summary, the functionalities of the different APIs for DAG and metagraph tokens are as follows:

## DAG
### DAG L1
- DAG transactions are sent to this API via the `/transactions` POST endpoint. 
- Pending transactions can be queried through this API via the `/transactions/:hash` endpoint.
- The address `lastRef` for an address can be queried here as well. 

### Global L0
- Query global snaphots
- Query DAG supply and address balances
- Submit metagraph (state channel) snapshots

## Metagraph Tokens
### Metagraph L1
- DAG transactions are sent to this API via the `/transactions` POST endpoint. 
- Pending transactions can be queried through this API via the `/transactions/:hash` endpoint.
- The address `lastRef` for an address can be queried here as well. 

### Metagraph L0
- Query metagraph snapshots
- Query metagraph token supply and address balances
  
### Global L0
- Submit metagraph (state channel) snapshots

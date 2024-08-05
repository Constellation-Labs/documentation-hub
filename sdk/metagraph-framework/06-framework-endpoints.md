---
title: Framework Endpoints
sidebar_label: Framework Endpoints
hide_table_of_contents: false
---

<intro-end />

A metagraph functions similarly to a traditional back-end server, interacting with the external world through HTTP endpoints with specific read (GET) and write (POST) functionalities. While a metagraph is decentralized by default and backed by an on-chain data store, it operates much like any other web server. This section outlines the default endpoints available to developers to interact with their metagraph. 

See also [Custom Queries](./custom-endpoints) for information on how to create your own metagraph endpoints.

## Framework Endpoints
Below is a list of available endpoints made available by default through the Metagraph Framework. Each endpoint is hosted by a node running either the Metagraph L0, Currency L1, or Data L1. 

This is not an exhaustive list of available endpoints, please see [Metagraph APIs](/hypergraph/currency-apis) for more information and links to the OpenAPI specifications of each API. 

### Universally Available Endpoints
These endpoints are available on all (mL0, cL1, and dL1) APIs and are useful for debugging and monitoring purposes. 

| Method | Endpoint      | Description                                                                                                                                                                                                        |
| ------ | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| GET    | /node/info    | Returns info about the health and connectivity state of a particular node. This is useful for understanding if a node is connected to its layer of the network and its ready state.                                |
| GET    | /cluster/info | Returns info about the cluster of nodes connected to the node's layer of the network. This is useful for understanding how many nodes are connected at each layer and diagnosing issues related to cluster health. |


### Metagraph L0
Endpoints available on metagraph L0 nodes. 

| Method | Endpoint          | Description                                                                                                                                                                                                                                                 |
| ------ | ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| GET    | /snapshots/latest | Returns the latest incremental snapshot created by the metagraph. Incremental snapshots contain only changes since the previous snapshot. This endpoint also supports returning snapshots at specific ordinals with the format \`GET /snapshots/:ordinal\`. |
| GET    | /snapshots/latest/combined | Returns the latest full snapshot of the metagraph which includes some calculated values. This shows the complete state of the metagraph at that moment in time. |
| GET    | /currency/:address/balance | Returns the balance of a particular address on the metagraph at the current snapshot. |
| GET    | /currency/total-supply | Returns the total number of tokens in circulation at the current snapshot. Note that "total supply" in this case is total supply created currently. It doesn't represent max supply of the token. |

### Currency L1
Endpoints available on currency L1 nodes. 

| Method | Endpoint          | Description                                                                                                                                                                                                                                                 |
| ------ | ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| POST    | /transactions | Accepts signed L0 token transactions. |
| GET    | /transactions/:hash | Returns a single transaction by hash if the transaction is in the node's mempool waiting to be processed. Does not have access to non-pending transactions. |
| GET    | /transactions/last-reference/:address | Returns the lastRef value for the provided address. LastRef is necessary for constructing a new transaction. |
| POST    | /estimate-fee | Returns the minimum fee required give the (unsigned) currency transaction. |

### Data L1 
| Method | Endpoint          | Description                                                                                                                                                                                                                                                 |
| ------ | ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| POST    | /data | Accepts custom-defined data updates. |
| GET    | /data | Returns all data updates in mempool waiting to be processed. |
| POST    | /data/estimate-fee | (v2.9.0+) Returns the minimum fee and destination address to process the given (unsigned) custom data update.  |

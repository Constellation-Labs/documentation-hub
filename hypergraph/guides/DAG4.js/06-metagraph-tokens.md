---
title: Metagraph Tokens
sidebar_label: Metagraph Tokens
slug: /metagraph-tokens
hide_table_of_contents: false
---

<intro-end />

Metagraph tokens work in much the same way as DAG. They share a common transaction format and API interface. Both DAG and metagraph tokens use DAG addresses for their balance maps so a single public/private keypair can control DAG and metagraph token accounts. 



:::info Minimum Version
You will need version 2.1.1 or higher in order to interact with metagraph token networks. 
:::

## Connecting to a metagraph

In order to interact with a metagraph token you will need to first need to create a connection to the Hypergraph, then create a metagraph client instance to connect to the metagraph and send transactions. 

The example below connects to **IntegrationNet**. Fill in `:metagraph-l0-endpoint`, `:metagraph-currency-l1-endpoint`, and `:metagraph-id` in the code below with the correct details for the metagraph you are connecting to. 

```js
const { dag4 } = require('@stardust-collective/dag4');

// Connect to Hypergraph on IntegrationNet or MainNet
dag4.account.connect({
  networkVersion: '2.0',
  beUrl: "https://be-integrationnet.constellationnetwork.io",
  l0Url: "https://l0-lb-integrationnet.constellationnetwork.io",
  l1Url: "https://l1-lb-integrationnet.constellationnetwork.io",
});

dag4.account.loginPrivateKey('MY-PRIVATE-KEY');

// Create a metagraphClient instance to connect to a specific metagraph
const metagraphClient = dag4.account.createMetagraphTokenClient({
  beUrl: "https://be-integrationnet.constellationnetwork.io",
  l0Url: ':metagraph-l0-endpoint',
  l1Url: ':metagraph-currency-l1-endpoint',
  metagraphId: ':metagraph-id'
});

// Make calls directly to the metagraph (check balance, send transactions, etc.)
await metagraphClient.getBalance();
// 100000
```
### Metagraph connection details

A list of existing metagraphs can be found on the [DAG Explorer](https://mainnet.dagexplorer.io/metagraphs). On each metagraph's page you'll find the Metagraph ID, as well as L0 and currency L1 endpoints, which are necessary for configuring your metagraph client to connect to a specific metagraph network.


### Send a single transaction
The metagraph client has all the same methods as `dag4.account` except `transferDag` becomes `transfer` and `transferDagBatch` becomes `transferBatch`.  
```js
// connect as shown above
const toAddress = 'DAGabc123...';
const amount = 25.551;
const fee = 0;

await metagraphClient.transfer(toAddress, amount, fee);
```

### Generate bulk transactions offline and send
```js
// Get last ref online, or else fetch from an offline data store
let lastRef = await metagraphClient.getAddressLastAcceptedTransactionRef('DAGWalletSendingAddress');

// Generate txns offline
const txn_data = [
  {to: 'DAGabc123...', amount: 10, fee: 0},
  {to: 'DAGxyz987...', amount: 25.01, fee: 0},
  {to: 'DAGzzz555...', amount: 1.01, fee: 0},
  {to: 'DAGwww988...', amount: 0.00000001, fee: 0},
];

const hashes = await metagraphClient.transferBatch(txn_data, lastRef);

// console.log(hashes)
```

:::info Transaction Fees
Note that transaction fees on metagraph networks are paid in the network's metagraph token, not in DAG. 
:::


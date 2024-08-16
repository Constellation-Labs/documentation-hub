---
title: Metagraph Tokens
sidebar_label: Metagraph Tokens
slug: /metagraph-tokens
hide_table_of_contents: false
---

Metagraph tokens work in much the same way as DAG. In order to interact with a metagraph token you will need to first create a metagraph client. 

:::info Minimum Version
You will need version 2.1.1 or higher in order to interact with metagraph token networks. 
:::

```js
const { dag4 } = require('@stardust-collective/dag4');

dag4.account.connect({
  networkVersion: '2.0',
  testnet: true
});

dag4.account.loginPrivateKey('MY-PRIVATE-KEY');

const metagraphClient = dag4.account.createMetagraphTokenClient({
  l0Url: 'http://metagraph-l0.example.com',
  l1Url: 'http://metagraph-l1.example.com'
});


await metagraphClient.getBalance();
// 100000
```
### Finding existing metagraphs

A list of existing metagraphs can be found on the [DAG Explorer](https://mainnet.dagexplorer.io/metagraphs). On each metagraph's page, the L0 and currency L1 endpoints are available, which are necessary for configuring your metagraph client to interact with specific metagraph token networks.


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


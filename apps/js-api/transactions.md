---
title: Dag4.js Transactions
sidebar_label: Sending Transactions
slug: /dag4-transactions
hide_table_of_contents: false
---

### Send a single transaction (online)
```js
const toAddress = 'DAGabc123...';
const amount = 25.551;
const fee = 0;

dag4.account.transferDag(toAddress, amount, fee);
```

### Send a transaction (offline signed)
```js
// Get last ref (online)
const lastRef = await dag4.network.getAddressLastAcceptedTransactionRef('DAGWalletSendingAddress');

// Get signed transaction (offline)
const txn = await dag4.account.generateSignedTransaction('DAGabc123...', 25.551, 0, lastRef);

// Send transaction (online)
await dag4.network.postTransaction(txn);
```

### Generate bulk transactions offline and send
```js
// Get last ref (online)
let lastRef = await dag4.network.getAddressLastAcceptedTransactionRef('DAGWalletSendingAddress');

// Generate txns offline
const txn_data = [
  {to: 'DAGabc123...', amount: 10},
  {to: 'DAGxyz987...', amount: 25.01},
  {to: 'DAGzzz555...', amount: 1.01},
  {to: 'DAGwww988...', amount: 0.00000001},
];

let _ordinal = lastRef.ordinal,
  _hash = lastRef.hash,
  transactions = [];
for (const item of txn_data) {
  const { transaction, hash } = dag4.account.generateSignedTransactionWithHash(item.to, item.amount, 0.00000001, {ordinal: _ordinal, hash: _hash});

  transactions.push(transaction);

  // Increment the ordinal and use the returned hash for the next iteration of the loop
  _hash = hash;
  _ordinal++;
}

// Send txns (online)
for (const txn of transactions) {
  await dag4.network.postTransaction(txn);
}
```

### Check the status of a transaction
When a transaction is sent to the network and is accepted, the response will return a hash that can be used to monitor the status of the transaction. 

The transaction will initially be in a "waiting" state before it's included in a block and sent to a snapshot. While in this state you can check its status with the L1 API. Once processed by the network, the transaction will no longer be found via the L1 API and will be found in the block explorer API. At this point the transaction is considered final. 

The following process can be used to confirm a transaction has been processed and reached a successful final state. 
```js
// Send transaction
const hash = await dag4.network.postTransaction(txn);

// Keep checking the transaction status until this returns null
const pendingTx = await dag4.network.getPendingTransaction(txHash);

// Check the block explore API
if (pendingTx === null) {
  const confirmedTx = await dag4.network.getTransaction(txHash);

  if (confirmedTx) {
    // Txn is confirmed - from this point the state cannot be changed
    console.log('Transaction confirmed');
  } else {
    // The txn cannot be found on block explorer. It's a good idea to wait several seconds and try again to confirm the txn has actually been dropped
    console.log('Transaction dropped - not confirmed');
  }
}
```
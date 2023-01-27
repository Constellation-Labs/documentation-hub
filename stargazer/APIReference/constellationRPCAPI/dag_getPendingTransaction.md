---
hide_table_of_contents: true
---

<head>
  <meta
    name="description"
    content="Returns information about a pending transaction by hash."
  />
</head>

<intro-end />

Returns information about a pending transaction by hash.

##### Parameters

|       Name      |         Type          |           Description             |
| --------------- | --------------------- | --------------------------------- |
| TransactionHash |     `String<Hash>`    | Hash of the selected transaction. |


##### Return Type

`PendingTransaction` | `null` - PendingTransaction object or null if not found.

```typescript title="PendingTransaction"
type PendingTransaction = {
  transaction: {
    source: Address // Address of the sender
    destination: Address // Address of the receiver
    amount: Number // Amount sent in DATUM
    fee: Number // Fee sent in DATUM
    parent: {
      hash: String<Hash> // Hash of the parent transaction
      ordinal: Number // Ordinal of the parent transaction
    }
    salt: BigNumber | String // Salt
  }
  hash: String<Hash> // Hash of the transaction
  status: String // Status of the transaction. Currently there is only one status: "Waiting"
}
```

##### Example

```typescript title="TypeScript"
await provider.request({
  method: "dag_getPendingTransaction",
  params: [
    "3826c2848a477ff40e3ae27d5b9f99bd2d4a30cd2702873a740dc7c77792310a"
  ],
});

// {
//   "transaction": {
//       "source": "DAG77zerQ2BUVhtVgkmseihkEfLXieBBm57vqA4J",
//       "destination": "DAG2fMnbEmsWhgYGhvdREVELyESKUqGNTEWf4B61",
//       "amount": 100000000,
//       "fee": 0,
//       "parent": {
//           "ordinal": 31,
//           "hash": "8d521fa8590151bebb5bf47b5436a93c054486955390d84cf6844cdea275426a"
//       },
//       "salt": 8837683016871549
//   },
//   "hash": "3826c2848a477ff40e3ae27d5b9f99bd2d4a30cd2702873a740dc7c77792310a",
//   "status": "Waiting"
// }
```

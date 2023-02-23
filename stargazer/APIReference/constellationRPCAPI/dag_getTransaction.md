---
hide_table_of_contents: true
---

<head>
  <meta
    name="description"
    content="Returns information about a transaction by hash.  If the transaction object is returned, the transaction was included in a block and lives in the network."
  />
</head>

<intro-end />

Returns information about a transaction by hash. If the transaction object is returned, the transaction was included in a block and lives in the network.

##### Parameters

|       Name      |         Type          |           Description             |
| --------------- | --------------------- | --------------------------------- |
| TransactionHash |     `String<Hash>`    | Hash of the selected transaction. |


##### Return Type

`Transaction` | `null` - Transaction object or null if not found.

```typescript title="Transaction"
type Transaction = {
  hash: String<Hash> // Hash of the transaction
  amount: Number // Amount sent in DATUM
  source: Address // Address of the sender
  destination: Address // Address of the receiver
  fee: Number // Fee sent in DATUM
  parent: {
    hash: String<Hash> // Hash of the parent transaction
    ordinal: Number // Ordinal of the parent transaction
  } 
  blockHash: String<Hash> // Hash of the block
  snapshotHash: String<Hash> // Hash of the snapshot
  snapshotOrdinal: Number // Ordinal of the snapshot
  transactionOriginal: {
    value: {
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
    proofs: Proof[] // Proofs
  }
  timestamp: String // Timestamp
}
```
```typescript title="Proof"
type Proof = {
  id: String // Id of the signature
  signature: String // Signature
}
```

##### Example

```typescript title="TypeScript"
await provider.request({
  method: "dag_getTransaction",
  params: [
    "5659d17c234d57c57a7335792889fe50cf66ec3d717b5d28d9bfa943e4275d27"
  ],
});

// {
//   "hash": "5659d17c234d57c57a7335792889fe50cf66ec3d717b5d28d9bfa943e4275d27",
//   "amount": 100000000,
//   "source": "DAG77zerQ2BUVhtVgkmseihkEfLXieBBm57vqA4J",
//   "destination": "DAG2fMnbEmsWhgYGhvdREVELyESKUqGNTEWf4B61",
//   "fee": 0,
//   "parent": {
//       "hash": "3826c2848a477ff40e3ae27d5b9f99bd2d4a30cd2702873a740dc7c77792310a",
//       "ordinal": 32
//   },
//   "blockHash": "f2df30d776dbf05240b14654d2e156099b25ff6e45084eac9ab89c37689a2007",
//   "snapshotHash": "f41437fc5fc01483069e8d11ff3597f4c2715f44a859432d3f0041838ff270d2",
//   "snapshotOrdinal": 509453,
//   "transactionOriginal": {
//       "value": {
//           "source": "DAG77zerQ2BUVhtVgkmseihkEfLXieBBm57vqA4J",
//           "destination": "DAG2fMnbEmsWhgYGhvdREVELyESKUqGNTEWf4B61",
//           "amount": 100000000,
//           "fee": 0,
//           "parent": {
//               "ordinal": 32,
//               "hash": "3826c2848a477ff40e3ae27d5b9f99bd2d4a30cd2702873a740dc7c77792310a"
//           },
//           "salt": 8888012531929986
//       },
//       "proofs": [
//           {
//               "id": "b85cbc0d210bfb98de58b9b1c6d195f6ee09e254e489f284756e3ebae82054823b04e64bcc62bb6b20ee8016b819419389037d8d09e278e47fe79645cfd8b166",
//               "signature": "3045022100e597cb6ac5e05e00c03998c11ed4ee0c3d8e42aedd37c19f4968ad494d5357e202205f754fe64410e2d8770b3976eb458c4bd3b22aa8f48609c2577dab88e23ef3fd"
//           }
//       ]
//   },
//   "timestamp": "2023-01-26T15:42:21.970Z"
// }
```

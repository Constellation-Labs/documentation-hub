---
hide_table_of_contents: true
---

<head>
  <meta
    name="description"
    content="Returns information about a transaction by hash and metagraph address.  If the transaction object is returned, the transaction was included in a block and lives in the metagraph."
  />
</head>

<intro-end />

Returns information about a transaction by hash and metagraph address. If the transaction object is returned, the transaction was included in a block and lives in the metagraph.

##### Parameters

| Name | Type                        | Description             |
| ---- | --------------------------- | ----------------------- |
| Data | `Object<TransactionParams>` | Transaction info object |

```typescript title="TransactionParams"
type TransactionParams = {
  metagraphAddress: String; // Metagraph address
  hash: String; // Hash of the transaction
};
```

##### Return Type

`Transaction` | `null` - Transaction object or null if not found.

```typescript title="Transaction"
type Transaction = {
  hash: String<Hash>; // Hash of the transaction
  amount: Number; // Amount sent
  source: Address; // Address of the sender
  destination: Address; // Address of the receiver
  fee: Number; // Fee sent
  parent: {
    hash: String<Hash>; // Hash of the parent transaction
    ordinal: Number; // Ordinal of the parent transaction
  };
  blockHash: String<Hash>; // Hash of the block
  snapshotHash: String<Hash>; // Hash of the snapshot
  snapshotOrdinal: Number; // Ordinal of the snapshot
  transactionOriginal: {
    value: {
      source: Address; // Address of the sender
      destination: Address; // Address of the receiver
      amount: Number; // Amount sent
      fee: Number; // Fee sent
      parent: {
        hash: String<Hash>; // Hash of the parent transaction
        ordinal: Number; // Ordinal of the parent transaction
      };
      salt: BigNumber | String; // Salt
    };
    proofs: Proof[]; // Proofs
  };
  timestamp: String; // Timestamp
};
```

```typescript title="Proof"
type Proof = {
  id: String; // Id of the signature
  signature: String; // Signature
};
```

##### Example

```typescript title="TypeScript"
await provider.request({
  method: "dag_getMetagraphTransaction",
  params: [
    {
      metagraphAddress: "DAG0KheCYqEmFoQEWdFwrZGaXabJsWJyUvjpsLjE",
      hash: "233af0219d6a956aae0839c18ce95470dc2ac0645aa3135a22be608c06e7713e",
    },
  ],
});

// {
//     "hash": "233af0219d6a956aae0839c18ce95470dc2ac0645aa3135a22be608c06e7713e",
//     "amount": 300000000,
//     "source": "DAG77zerQ2BUVhtVgkmseihkEfLXieBBm57vqA4J",
//     "destination": "DAG2fMnbEmsWhgYGhvdREVELyESKUqGNTEWf4B61",
//     "fee": 0,
//     "parent": {
//         "hash": "9ef0cd77c91abe5dac643f0ada9e51af20a30c38b2b2cf7b8793a5955d5c9485",
//         "ordinal": 4
//     },
//     "blockHash": "dad7482866af8d9f44c2b309d263add3b4c2c8e6063a36910783a42fe2bd5509",
//     "snapshotHash": "d22a21946e0b257a489212b30a593274798892be2ef6a02b8d8218abc8a5f0ae",
//     "snapshotOrdinal": 34233,
//     "transactionOriginal": {
//         "value": {
//             "source": "DAG77zerQ2BUVhtVgkmseihkEfLXieBBm57vqA4J",
//             "destination": "DAG2fMnbEmsWhgYGhvdREVELyESKUqGNTEWf4B61",
//             "amount": 300000000,
//             "fee": 0,
//             "parent": {
//                 "ordinal": 4,
//                 "hash": "9ef0cd77c91abe5dac643f0ada9e51af20a30c38b2b2cf7b8793a5955d5c9485"
//             },
//             "salt": 8792229999094409
//         },
//         "proofs": [
//             {
//                 "id": "b85cbc0d210bfb98de58b9b1c6d195f6ee09e254e489f284756e3ebae82054823b04e64bcc62bb6b20ee8016b819419389037d8d09e278e47fe79645cfd8b166",
//                 "signature": "30450221009a66b5a64998df405c40e5eb6b4ad42e3e4f7b31d70071e866c045ef58dc1f9b022048a66d373e241bc10f917f11832eccf6244b255c68c11c6ee1e7f442068ae613"
//             }
//         ]
//     },
//     "timestamp": "2023-06-29T18:38:00.412Z"
// }
```

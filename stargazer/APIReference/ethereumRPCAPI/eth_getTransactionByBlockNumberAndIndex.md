---
hide_table_of_contents: true
---

<head>
  <meta
    name="description"
    content="Returns information about a transaction by block number and transaction index position."
  />
</head>

<intro-end />

Returns information about a transaction by block number and transaction index position.

##### Parameters

| Name        | Type                                                            | Description                                                                |
| ----------- | --------------------------------------------------------------- | -------------------------------------------------------------------------- |
| BlockNumber | `HexString<Number>`\| `"latest"` \| `"earliest"` \| `"pending"` | Hexadecimal block number, or the string "latest", "earliest" or "pending". |
| Index       | `HexString<Number>`                                             | Transaction index.                                                         |

##### Return Type

`Transaction` | `null` - Transaction object or null if not found.

```typescript title="Transaction"
type Transaction = {
  hash: HexString<Hash>; // Hash of the transaction.
  from: Address; // Address of the sender.
  to: Address | null; // Address of the receiver or null for contract creations.
  value: HexString<Number>; // Value sent in WEI.

  blockHash: HexString<Hash> | null; // Block hash of transaction or null if transaction is pending.
  blockNumber: HexString<Number> | null; // Block number of transaction or null if transaction is pending.
  nonce: HexString<Number>; // Number of transactions made by the sender before.

  gas: HexString<Number>; // Gas units provider by the sender.
  gasPrice: HexString<Number>; // Gas price provider by the sender in WEI.
  maxFeePerGas?: HexString<Number>; // Maximum fee in WEI per gas unit. EIP-1559.
  maxPriorityFeePerGas?: HexString<Number>; // Maximum fee in WEI per gas unit above the base fee. EIP-1559.

  input: HexString; // Data sent with the transaction.

  r: HexString; // ECDSA signature r.
  s: HexString; // ECDSA signature s.
  v: HexString; // ECDSA recovery ID.

  transactionIndex: HexString<Number> | null; // Transaction index in block or null if transaction is pending.
  type: HexString<Number>; // Transaction type
};
```

##### Example

```typescript title="TypeScript"
await provider.request({
  method: "eth_getTransactionByBlockHashAndIndex",
  params: [
    "0x5bad55",
    "0x0",
  ],
});

/* {
  blockHash:
    "0xb3b20624f8f0f86eb50dd04688409e5cea4bd02d700bf6e79e9384d47d6a5a35",
  blockNumber: "0x5bad55",
  from: "0xfbb1b73c4f0bda4f67dca266ce6ef42f520fbb98",
  gas: "0x249f0",
  gasPrice: "0x174876e800",
  hash: "0x8784d99762bccd03b2086eabccee0d77f14d05463281e121a62abfebcf0d2d5f",
  input:
    "0x6ea056a900000000000...",
  nonce: "0x5e4724",
  r: "0xd1556332df97e3bd911068651cfad6f975a30381f4ff3a55df7ab3512c78b9ec",
  s: "0x66b51cbb10cd1b2a09aaff137d9f6d4255bf73cb7702b666ebd5af502ffa4410",
  to: "0x4b9c25ca0224aef6a7522cabdbc3b2e125b7ca50",
  transactionIndex: "0x0",
  type: "0x0",
  v: "0x25",
  value: "0x0",
} */
```

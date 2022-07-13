---
hide_table_of_contents: true
---

<head>
  <meta
    name="description"
    content="Returns the receipt for a transaction by hash. The transaction receipt is only available for mined transactions."
  />
</head>

<intro-end />

Returns the receipt for a transaction by hash.

:::info Important
The transaction receipt is only available for mined transactions.
:::

##### Parameters

| Name            | Type              | Description                       |
| --------------- | ----------------- | --------------------------------- |
| TransactionHash | `HexString<Hash>` | Hash of the selected transaction. |

##### Return Type

`TransactionReceipt` | `null` - Transaction receipt object or null if not found.

```typescript title="TransactionReceipt"
type TransactionReceipt = {
  status: HexString<Number>; // 1 Success or 0 Failure
  from: Address; // Address of the sender.
  to: Address | null; // Address of the receiver or null for contract creations.

  blockHash: HexString<Hash> | null; // Block hash of transaction or null if transaction is pending.
  blockNumber: HexString<Number> | null; // Block number of transaction or null if transaction is pending.

  contractAddress: Address | null; // Contract address created or null if no contract was created.

  gasUsed: HexString<Number>; // Amount of gas units used by this transaction alone.
  cumulativeGasUsed: HexString<Number>; // Amount of gas units used by this transaction in the block.
  effectiveGasPrice: HexString<Number>; // Actual value per gas unit deducted from the sender's account.

  transactionHash: HexString<Hash>; // Hash of the transaction.
  transactionIndex: HexString<Number> | null; // Transaction index in block or null if transaction is pending.
  type: HexString<Number>; // Transaction type

  logs: Log[]; // Array of log objects generated from this transaction.
  logsBloom: HexString<FilterBloom> | null; // Bloom filter of the logs generated from this transaction.
};
```

```typescript title="Log"
type Log = {
  address: Address; // Address from which this log was generated.

  blockHash: HexString<Hash> | null; // Block hash from which this log was generated or null if transaction is pending.
  blockNumber: HexString<Number> | null; // Block number from which this log was generated or null if transaction is pending.

  transactionHash: HexString<Hash>; // Transaction hash from which this log was generated.
  transactionIndex: HexString<Number> | null; // Transaction index from which this log was generated or null if transaction is pending.

  data: HexString; // Data of non-indexed arguments for the log.
  logIndex: HexString<Number> | null; // Log index in the block or null if transaction is pending.
  removed: boolean; // True if the log was removed, due to a chain reorganization. False if it's a valid log.
  topics: HexString<Topic>[]; // Array of 0 - 4 topics.
};
```

##### Example

```typescript title="TypeScript"
await provider.request({
  method: "eth_getTransactionReceipt",
  params: [
    "0xbb3a336e3f823ec18197f1e13ee875700f08f03e2cab75f0d0b118dabb44cba0",
  ],
});
/* {
  blockHash:
    "0xb3b20624f8f0f86eb50dd04688409e5cea4bd02d700bf6e79e9384d47d6a5a35",
  blockNumber: "0x5bad55",
  contractAddress: null,
  cumulativeGasUsed: "0xb90b0",
  effectiveGasPrice: "0x746a528800",
  from: "0x398137383b3d25c92898c656696e41950e47316b",
  gasUsed: "0x1383f",
  logs: [
    {
      address: "0x06012c8cf97bead5deae237070f9587f8e7a266d",
      blockHash:
        "0xb3b20624f8f0f86eb50dd04688409e5cea4bd02d700bf6e79e9384d47d6a5a35",
      blockNumber: "0x5bad55",
      data: "0x000000000000000000000000...",
      logIndex: "0x6",
      removed: false,
      topics: [
        "0x241ea03ca20251805084d27d4440371c34a0b85ff108f6bb5611248f73818b80",
      ],
      transactionHash:
        "0xbb3a336e3f823ec18197f1e13ee875700f08f03e2cab75f0d0b118dabb44cba0",
      transactionIndex: "0x11",
    },
  ],
  logsBloom: "0x000000000000000000000000000000...",
  status: "0x1",
  to: "0x06012c8cf97bead5deae237070f9587f8e7a266d",
  transactionHash:
    "0xbb3a336e3f823ec18197f1e13ee875700f08f03e2cab75f0d0b118dabb44cba0",
  transactionIndex: "0x11",
  type: "0x0",
} */
```

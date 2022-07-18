---
hide_table_of_contents: true
---

<head>
  <meta
    name="description"
    content="Returns associated logs or block hashes for the given filter id since the last poll."
  />
</head>

<intro-end />

Returns associated logs or block hashes for the given filter id since the last poll. Filter ids must be created using [`eth_newFilter`](./eth_newFilter.md) or [`eth_newBlockFilter`](./eth_newBlockFilter.md).

##### Parameters

| Name     | Type                  | Description                                                                                                       |
| -------- | --------------------- | ----------------------------------------------------------------------------------------------------------------- |
| FilterId | `HexString<FilterId>` | Filter id created using [`eth_newFilter`](./eth_newFilter.md) or [`eth_newBlockFilter`](./eth_newBlockFilter.md). |

##### Return Type

`Log[]` | `HexString<Hash>[]` - Array of log objects found or for filters created using [`eth_newBlockFilter`](./eth_newBlockFilter.md) an array of hashes.

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
  method: "eth_getFilterChanges",
  params: ["0x10ff0bfbedb01f0dbd4106d14eb719ec38b6eb5b821c"],
});
/* [
  {
    address: "0x1a94fce7ef36bc90959e206ba569a12afbc91ca1",
    blockHash:
      "0x7c5a35e9cb3e8ae0e221ab470abae9d446c3a5626ce6689fc777dcffcab52c70",
    blockNumber: "0x5c29fb",
    data: "0x0000000000000000000000003e...",
    logIndex: "0x1d",
    removed: false,
    topics: [
      "0x241ea03ca20251805084d27d4440371c34a0b85ff108f6bb5611248f73818b80",
    ],
    transactionHash:
      "0x3dc91b98249fa9f2c5c37486a2427a3a7825be240c1c84961dfb3063d9c04d50",
    transactionIndex: "0x1d",
  },
  {
    address: "0x06012c8cf97bead5deae237070f9587f8e7a266d",
    blockHash:
      "0x7c5a35e9cb3e8ae0e221ab470abae9d446c3a5626ce6689fc777dcffcab52c70",
    blockNumber: "0x5c29fb",
    data: "0x0000000000000000000000007...",
    logIndex: "0x57",
    removed: false,
    topics: [
      "0x241ea03ca20251805084d27d4440371c34a0b85ff108f6bb5611248f73818b80",
    ],
    transactionHash:
      "0x788b1442414cb9c9a36dba2abe250763161a6f6395788a2e808f1b34e92beec1",
    transactionIndex: "0x54",
  },
] */
```

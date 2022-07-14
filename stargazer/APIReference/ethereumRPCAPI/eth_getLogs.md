---
hide_table_of_contents: true
---

<head>
  <meta
    name="description"
    content="Returns all logs matching a given filter object."
  />
</head>

<intro-end />

Returns all logs matching a given filter object.

##### Parameters

| Name   | Type     | Description                       |
| ------ | -------- | --------------------------------- |
| Filter | `Filter` | Filter logs based on this filter. |

```typescript title="Filter"
type Filter = {
  address?: Address; // Address from which logs generated.
  fromBlock?: HexString<Number> | "latest" | "earliest" | "pending"; // Block number or string the string "latest", "earliest" or "pending" to search from.
  toBlock?: HexString<Number> | "latest" | "earliest" | "pending"; // Block number or string the string "latest", "earliest" or "pending" to search to.
  topics?: HexString<Topic>[]; // Array of 0 - 4 topics.
  blockHash?: HexString<Hash>; // Block from which logs generated.
};
```

##### Return Type

`Log[]` - Array of log objects found.

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
  method: "eth_getLogs",
  params: [
    {
      blockHash:
        "0x7c5a35e9cb3e8ae0e221ab470abae9d446c3a5626ce6689fc777dcffcab52c70",
      topics: [
        "0x241ea03ca20251805084d27d4440371c34a0b85ff108f6bb5611248f73818b80",
      ],
    },
  ],
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

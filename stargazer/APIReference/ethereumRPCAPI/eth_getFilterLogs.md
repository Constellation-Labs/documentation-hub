---
hide_table_of_contents: true
---

<head>
  <meta
    name="description"
    content="Returns associated logs of the given filter id. Node filters are created using eth_newFilter."
  />
</head>

<intro-end />

Returns associated logs of the given filter id. Node filters are created using [`eth_newFilter`](./eth_newFilter.md).

##### Parameters

| Name     | Type                  | Description                                                    |
| -------- | --------------------- | -------------------------------------------------------------- |
| FilterId | `HexString<FilterId>` | Filter id created using [`eth_newFilter`](./eth_newFilter.md). |

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
  method: "eth_getFilterLogs",
  params: ["0x10ff0bfbedb01f0dbd4106d14eb719ec38b6eb5b821c"],
});
/* [
  {
    address: "0xb5a5f22694352c15b00323844ad545abb2b11028",
    blockHash:
      "0x99e8663c7b6d8bba3c7627a17d774238eae3e793dee30008debb2699666657de",
    blockNumber: "0x5d12ab",
    data: "0x0000000000000000000000000000000000000000000000a247d7a2955b61d000",
    logIndex: "0x0",
    removed: false,
    topics: [
      "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
      "0x000000000000000000000000bdc0afe57b8e9468aa95396da2ab2063e595f37e",
      "0x0000000000000000000000007503e090dc2b64a88f034fb45e247cbd82b8741e",
    ],
    transactionHash:
      "0xa74c2432c9cf7dbb875a385a2411fd8f13ca9ec12216864b1a1ead3c99de99cd",
    transactionIndex: "0x3",
  },
  {
    address: "0xe38165c9f6deb144afc9c32c206b024817e1496d",
    blockHash:
      "0x99e8663c7b6d8bba3c7627a17d774238eae3e793dee30008debb2699666657de",
    blockNumber: "0x5d12ab",
    data: "0x0000000000000000000000000000000000000000000000000000000025c6b720",
    logIndex: "0x3",
    removed: false,
    topics: [
      "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
      "0x00000000000000000000000080e73e47173b2d00b531bf83bc39e710157125c3",
      "0x0000000000000000000000008f6cc93795969e5bbbf07c66dfee7d41ad24f1ef",
    ],
    transactionHash:
      "0x9e8f1cb1facb9a11a1cf947634053a0b2d557399f926b12127aa10497a2f0153",
    transactionIndex: "0x5",
  },
] */
```

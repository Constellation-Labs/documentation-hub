---
hide_table_of_contents: true
---

<head>
  <meta
    name="description"
    content="Creates a new filter in the node, based on filter options. Used to notify state changes (logs). To check for state changes call eth_getFilterChanges."
  />
</head>

<intro-end />

Creates a new filter in the node, based on filter options. Used to notify state changes (logs). To check for state changes call [`eth_getFilterChanges`](./eth_getFilterChanges.md).

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

`HexString<FilterId>` - The new associated filter id.

##### Example

```typescript title="TypeScript"
await provider.request({
  method: "eth_newFilter",
  params: [
    {
      topics: [
        "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
      ],
    },
  ],
});
// "0x10ff0bfba9472c87932c56632eef8f5cc70910e8e71d"
```

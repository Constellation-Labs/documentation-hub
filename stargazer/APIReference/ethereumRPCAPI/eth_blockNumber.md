---
hide_table_of_contents: true
---

<head>
  <meta
    name="description"
    content="Returns the number of the latest block mined."
  />
</head>

<intro-end />

Returns the number of the latest block mined.

##### Parameters

None

##### Return Type

`HexString<Integer>` - Number of the latest block.

##### Example

```typescript title="TypeScript"
await provider.request({ method: "eth_blockNumber", params: [] });
// "0xe659e6"
```

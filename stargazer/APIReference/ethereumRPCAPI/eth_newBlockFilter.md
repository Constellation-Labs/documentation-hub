---
hide_table_of_contents: true
---

<head>
  <meta
    name="description"
    content="Creates a new filter in the node. Used to notify when a new block arrived. To check for state changes call eth_getFilterChanges."
  />
</head>

<intro-end />

Creates a new filter in the node. Used to notify when a new block arrived. To check for state changes call [`eth_getFilterChanges`](./eth_getFilterChanges.md).

##### Parameters

None

##### Return Type

`HexString<FilterId>` - The new associated filter id.

##### Example

```typescript title="TypeScript"
await provider.request({
  method: "eth_newBlockFilter",
  params: [],
});
// "0x81440bfbd6138ec9fe6d6ec4398b0b4879fb182f3cd8"
```

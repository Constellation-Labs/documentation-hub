---
hide_table_of_contents: true
---

<head>
  <meta
    name="description"
    content="Returns the number of transactions included in a block by hash."
  />
</head>

<intro-end />

Returns the number of transactions included in a block by hash.

##### Parameters

| Name      | Type              | Description                 |
| --------- | ----------------- | --------------------------- |
| BlockHash | `HexString<Hash>` | Hash of the selected block. |

##### Return Type

`HexString<Number>` | `null` - Number of transactions included in the block or null if not found.

##### Example

```typescript title="TypeScript"
await provider.request({
  method: "eth_getBlockTransactionCountByHash",
  params: [
    "0xb3b20624f8f0f86eb50dd04688409e5cea4bd02d700bf6e79e9384d47d6a5a35",
  ],
});
// "0x50"
```

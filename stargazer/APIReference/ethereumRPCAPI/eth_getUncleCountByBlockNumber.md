---
hide_table_of_contents: true
---

<head>
  <meta
    name="description"
    content="Returns the number of uncles in a block by number."
  />
</head>

<intro-end />

Returns the number of uncles in a block by number.

##### Parameters

| Name        | Type                                                            | Description                                                                |
| ----------- | --------------------------------------------------------------- | -------------------------------------------------------------------------- |
| BlockNumber | `HexString<Number>`\| `"latest"` \| `"earliest"` \| `"pending"` | Hexadecimal block number, or the string "latest", "earliest" or "pending". |

##### Return Type

`HexString<Number>` | `null` - Number of uncles in the block or null if not found.

##### Example

```typescript title="TypeScript"
await provider.request({
  method: "eth_getUncleCountByBlockNumber",
  params: ["0x5bad55"],
});
// "0x1"
```

---
hide_table_of_contents: true
---

<head>
  <meta
    name="description"
    content="Returns the number of transactions sent from address."
  />
</head>

<intro-end />

Returns the number of transactions sent from address.

##### Parameters

| Name        | Type                                                            | Description                                                                |
| ----------- | --------------------------------------------------------------- | -------------------------------------------------------------------------- |
| Address     | `Address`                                                       | Address to fetch count for.                                                |
| BlockNumber | `HexString<Number>`\| `"latest"` \| `"earliest"` \| `"pending"` | Hexadecimal block number, or the string "latest", "earliest" or "pending". |

##### Return Type

`HexString<Number>` - Number of transactions sent from address.

##### Example

```typescript title="TypeScript"
await provider.request({
  method: "eth_getTransactionCount",
  params: ["0xc94770007dda54cF92009BFF0dE90c06F603a09f", "0x5bad55"],
});
// "0x1a"
```

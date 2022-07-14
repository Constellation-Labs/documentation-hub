---
hide_table_of_contents: true
---

<head>
  <meta
    name="description"
    content="Returns the value from a storage slot position at a given address."
  />
</head>

<intro-end />

Returns the value from a storage slot position at a given address.

##### Parameters

| Name        | Type                                                            | Description                                                                |
| ----------- | --------------------------------------------------------------- | -------------------------------------------------------------------------- |
| Address     | `Address`                                                       | Address to retrieve data from.                                             |
| Position    | `HexString`                                                     | Hex code of the position in storage.                                       |
| BlockNumber | `HexString<Number>`\| `"latest"` \| `"earliest"` \| `"pending"` | Hexadecimal block number, or the string "latest", "earliest" or "pending". |

##### Return Type

`HexString` - Hex code of the integer indicating the value of the storage position at the provided address.

##### Example

```typescript title="TypeScript"
await provider.request({
  method: "eth_getStorageAt",
  params: [
    "0x295a70b2de5e3953354a6a8344e616ed314d7251",
    "0x6661e9d6d8b923d5bbaab1b96e1dd51ff6ea2a93520fdc9eb75d059238b8c5e9",
    "0x65a8db",
  ],
});
// "0x0000000000000000000000000000000000000000000000000000000000000000"
```

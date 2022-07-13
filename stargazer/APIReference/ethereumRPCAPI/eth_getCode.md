---
hide_table_of_contents: true
---

<head>
  <meta
    name="description"
    content="Returns the keccak-256 _(not the standarized sha3-256)_ of the given data."
  />
</head>

<intro-end />

Returns the keccak-256 _(not the standarized sha3-256)_ of the given data.

##### Parameters

| Name | Type        | Description                      |
| ---- | ----------- | -------------------------------- |
| Data | `HexString` | Data to calculate the hash from. |

##### Return Type

`HexString` - The keccak-256 digest of the given data.

##### Example

```typescript title="TypeScript"
await provider.request({
  method: "web3_sha3",
  params: ["0x68656c6c6f20776f726c64"],
});
// "0x47173285a8d7341e5e972fc677286384f802f8ef42a5ec5f03bbfa254cb01fad"
```

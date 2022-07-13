---
hide_table_of_contents: true
---

<head>
  <meta
    name="description"
    content="Returns the current ethereum protocol version."
  />
</head>

<intro-end />

Returns the current ethereum protocol version.

##### Parameters

None

##### Return Type

`HexString` - The current ethereum protocol version.

##### Example

```typescript title="TypeScript"
await provider.request({
  method: "eth_protocolVersion",
  params: [],
});
// "0x3f"
```

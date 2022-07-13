---
hide_table_of_contents: true
---

<head>
  <meta
    name="description"
    content="Returns the current gas price in wei."
  />
</head>

<intro-end />

Returns the current gas price in wei.

##### Parameters

None

##### Return Type

`HexString<Integer>` - Current gas price in wei.

##### Example

```typescript title="TypeScript"
await provider.request({
  method: "eth_gasPrice",
  params: [],
});
// "0x12a05f200"
```

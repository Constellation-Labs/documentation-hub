---
hide_table_of_contents: true
---

<head>
  <meta
    name="description"
    content="Returns the compiled smart contract code, if any, at a given address."
  />
</head>

<intro-end />

Returns the compiled smart contract code, if any, at a given address.

##### Parameters

| Name    | Type      | Description              |
| ------- | --------- | ------------------------ |
| Address | `Address` | Address of the contract. |

##### Return Type

`HexString` - The compiled smart contract code, if any.

##### Example

```typescript title="TypeScript"
await provider.request({
  method: "eth_getCode",
  params: ["0x06012c8cf97bead5deae237070f9587f8e7a266d"],
});
// "0x60606040..."
```

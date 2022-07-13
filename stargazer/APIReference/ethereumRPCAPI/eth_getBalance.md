---
hide_table_of_contents: true
---

<head>
  <meta
    name="description"
    content="Returns the balance of the account of given address."
  />
</head>

<intro-end />

Returns the balance of the account of given address.

##### Parameters

| Name    | Type                                                  | Description                           |
| ------- | ----------------------------------------------------- | ------------------------------------- |
| Account | `Address`                                             | Account to check for balance.         |
| Block   | `Number` \| `"latest"` \| `"earliest"` \| `"pending"` | Block number to execute this call in. |

##### Return Type

`HexString<Integer>` - The current balance of the selected block in wei.

##### Example

```typescript title="TypeScript"
await provider.request({
  method: "eth_getBalance",
  params: ["0xc94770007dda54cF92009BFF0dE90c06F603a09f", "latest"],
});
// "0x2fe84e3113d7b"
```

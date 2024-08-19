---
hide_table_of_contents: true
---

<head>
  <meta
    name="description"
    content="Retrieves the active account in the wallet for Ethereum's provider."
  />
</head>

<intro-end />

Retrieves the active account in the wallet for Ethereum's provider.

##### Parameters

None

##### Return Type

`Address[]` - User's active account.

:::info Important
The account returned will always be the active account in Stargazer. The response will have at most one address.
:::

##### Example

```typescript title="TypeScript"
await provider.request({ method: "eth_accounts", params: [] });
// ["0x407d73d8a49eeb85d32cf465507dd71d507100c1"]
```

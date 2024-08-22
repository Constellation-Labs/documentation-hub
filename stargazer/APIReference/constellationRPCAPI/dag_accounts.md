---
hide_table_of_contents: true
---

<head>
  <meta
    name="description"
    content="Retrieves the active account in the wallet for Constellation's provider."
  />
</head>

<intro-end />

Retrieves the active account in the wallet for Constellation's provider.

##### Parameters

None

##### Return Type

`DAGAddress[]` - User's active account.

:::info Important
The account returned will always be the active account in Stargazer. The response will have at most one address.
:::

##### Example

```typescript title="TypeScript"
await provider.request({ method: "dag_accounts", params: [] });
// ["DAG88C9WDSKH451sisyEP3hAkgCKn5DN72fuwjfX"]
```

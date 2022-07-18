---
hide_table_of_contents: true
---

<head>
  <meta
    name="description"
    content="Retrieve available accounts granted by the user."
  />
</head>

<intro-end />

Retrieve available accounts granted by the user.

##### Parameters

None

##### Return Type

`DAGAddress[]` - User accounts available.

:::info Important
The account at index 0 will always be the active account in Stargazer.
:::

##### Example

```typescript title="TypeScript"
await provider.request({ method: "dag_accounts", params: [] });
// ["DAG88C9WDSKH451sisyEP3hAkgCKn5DN72fuwjfX"]
```

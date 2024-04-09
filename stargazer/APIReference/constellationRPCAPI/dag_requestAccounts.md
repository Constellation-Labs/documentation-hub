---
hide_table_of_contents: true
---

<head>
  <meta
    name="description"
    content="Request the user to grant access to their Constellation accounts."
  />
</head>

<intro-end />

:::info Important
This method will send a wallet activation request if the user hasn't activated their wallet in your dapp, you can read more about the Stargazer wallet activation process [here](../../Guide/providerActivation.md#activate-your-provider).
:::

Request the user to grant access to their Constellation accounts. This method follows the [EIP-1102](https://eips.ethereum.org/EIPS/eip-1102) specification.

##### Parameters

None

##### Return Type

`DAGAddress[]` - User accounts available.

:::info Important
The account at index 0 will always be the active account in Stargazer.
:::

##### Example

```typescript title="TypeScript"
await provider.request({ method: "dag_requestAccounts", params: [] });
// ["DAG88C9WDSKH451sisyEP3hAkgCKn5DN72fuwjfX"]
```

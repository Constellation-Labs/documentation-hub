---
hide_table_of_contents: true
---

<head>
  <meta
    name="description"
    content="Sends a new transaction to the network."
  />
</head>

<intro-end />

Sends a new transaction to the network

:::caution Warning
This method requires explicit user authorization.
:::

##### Parameters

| Name | Type                         | Description             |
| ---- | ---------------------------- | ----------------------- |
| Data | `Object<TransactionRequest>` | The transaction object. |

##### Return Type

`HexString<Hash>` - The sent transaction hash.

```typescript title="TransactionRequest"
type TransactionRequest = {
  from: string;
  to: string;
  amount: string | number; // In DATUM, 1 DATUM = 0.00000001 DAG
  fee?: string | number; // In DATUM, 100000000 DATUM = 1 DAG
};
```

##### Example

```typescript title="TypeScript"
// Build the transaction request
const transactionRequest: TransactionRequest = {
  from: "DAG88C9WDSKH451sisyEP3hAkgCKn5DN72fuwjfX",
  to: "DAG5pvyL8wQVEACYjEph9jouKQeH4J71Dn5HS25w",
  amount: 10 * 1e8, // 10 DAG
};

await provider.request({
  method: "dag_signMessage",
  params: [transactionRequest],
});
// "49fa33900fcb5423241f814ec33f587fa39a2c2702686995b389cba399163eb4"
```

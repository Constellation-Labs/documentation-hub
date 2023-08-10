---
hide_table_of_contents: true
---

<head>
  <meta
    name="description"
    content="Sends a new transaction to the selected metagraph."
  />
</head>

<intro-end />

Sends a new transaction to the selected metagraph.

##### Parameters

| Name | Type                  | Description             |
| ---- | --------------------- | ----------------------- |
| Data | `Object<Transaction>` | The transaction object. |

```typescript title="Transaction"
type Transaction = {
  metagraphAddress: Address; // Address of the metagraph
  source: Address; // Address of the sender.
  destination: Address; // Address of the receiver.
  amount: Number; // Amount sent with this transaction to the receiver. (8 decimals)
  fee?: Number; // Fee used for the transaction. (8 decimals)
};
```

##### Return Type

`String<Hash>` - The hash of the sent transaction.

##### Example

```typescript title="TypeScript"
await provider.request({
  method: "dag_sendMetagraphTransaction",
  params: [
    {
      metagraphAddress: "DAG0KheCYqEmFoQEWdFwrZGaXabJsWJyUvjpsLjE",
      source: "DAG77zerQ2BUVhtVgkmseihkEfLXieBBm57vqA4J",
      destination: "DAG2fMnbEmsWhgYGhvdREVELyESKUqGNTEWf4B61",
      amount: 100000000,
      fee: 0,
    },
  ],
});
// "2d9fe9bad17debed7c903f22b74aac8af270daea7995dd099a58d6b201547169"
```

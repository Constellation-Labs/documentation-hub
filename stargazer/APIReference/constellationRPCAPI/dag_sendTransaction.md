---
hide_table_of_contents: true
---

<head>
  <meta
    name="description"
    content="Sends a new transaction to the Constellation network."
  />
</head>

<intro-end />

Sends a new transaction to the Constellation network.

##### Parameters

| Name | Type                  | Description             |
| ---- | --------------------- | ----------------------- |
| Data | `Object<Transaction>` | The transaction object. |

```typescript title="Transaction"
type Transaction = {
  source: Address // Address of the sender.
  destination: Address // Address of the receiver.
  amount: Number // DATUM sent with this transaction to the receiver.
  fee?: Number // DATUM fee used for the transaction.
}
```

##### Return Type

`String<Hash>` - The hash of the sent transaction.

##### Example

```typescript title="TypeScript"
await provider.request({
  method: "dag_sendTransaction",
  params: [
    {
      source: "DAG77zerQ2BUVhtVgkmseihkEfLXieBBm57vqA4J",
      destination: "DAG2fMnbEmsWhgYGhvdREVELyESKUqGNTEWf4B61",
      amount: 100000000, // 100000000 DATUM = 1 DAG
      fee: 0,
    },
  ],
});
// "2d9fe9bad17debed7c903f22b74aac8af270daea7995dd099a58d6b201547169"
```

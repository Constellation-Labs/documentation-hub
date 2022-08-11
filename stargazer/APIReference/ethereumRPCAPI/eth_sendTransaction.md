---
hide_table_of_contents: true
---

<head>
  <meta
    name="description"
    content="Sends a new transaction to the network. If the transaction has no recipient and contains data, it creates a new contract. If the transaction has a recipient and data it executes a write contract call."
  />
</head>

<intro-end />

Sends a new transaction to the network. If the transaction has no recipient and contains data, it creates a new contract. If the transaction has a recipient and data it executes a write contract call.

:::caution Warning
This method requires explicit user authorization.
:::

##### Parameters

| Name | Type                  | Description             |
| ---- | --------------------- | ----------------------- |
| Data | `Object<Transaction>` | The transaction object. |

```typescript title="Transaction"
type Transaction = {
  from: Address // The account the transaction is sent from.
  to?: Address // The transaction recipient.
  gas?: Number ?? 90000 // Gas units provided for transaction executon. It will return unused gas.
  gasPrice?: Number ?? currentGasPrice() // WEI paid for each gas unit used.
  value?: Number // WEI sent with this transaction to the recipient.
  data?: HexData // Encoded contract code or encoded contract call data.
}
```

##### Return Type

`HexString<Hash>` - The keccak-256 digest of the sent transaction.

##### Example

```typescript title="TypeScript"
await provider.request({
  method: "eth_sendTransaction",
  params: [
    {
      from: "0xb60e8dd61c5d32be8058bb8eb970870f07233155",
      to: "0xd46e8dd67c5d32be8058bb8eb970870f07244567",
      gas: "0x76c0", // 30400
      gasPrice: "0x9184e72a000", // 10000000000000
      value: "0x9184e72a", // 2441406250
      data: "0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675",
    },
  ],
});
// "0xe670ec64341771606e55d6b4ca35a1a6b75ee3d5145a99d05921026d1527331"
```

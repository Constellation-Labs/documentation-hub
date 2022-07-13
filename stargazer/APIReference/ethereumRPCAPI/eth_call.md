---
hide_table_of_contents: true
---

<head>
  <meta
    name="description"
    content="Executes a new message call immediately without creating a transaction on the blockchain."
  />
</head>

<intro-end />

Executes a new message call immediately without creating a transaction on the blockchain.

##### Parameters

| Name  | Type                                                  | Description                           |
| ----- | ----------------------------------------------------- | ------------------------------------- |
| Data  | `Object<Transaction>`                                 | The transaction object.               |
| Block | `Number` \| `"latest"` \| `"earliest"` \| `"pending"` | Block number to execute this call in. |

```typescript title="Transaction"
type Transaction = {
  from: Address // The account the transaction is sent from.
  to?: Address // The transaction recipient.
  gas?: Number ?? 90000 // Gas units provided for transaction executon. It will return unused gas.
  gasPrice?: Number ?? currentGasPrice() // WEI paid for each gas unit used.
  value?: Number // WEI sent with this transaction to the recipient.
  data?: HexData // Encoded contract call data.
}
```

##### Return Type

`HexString<Any>` - The returned data of the contract execution.

##### Example

```typescript title="TypeScript"
await provider.request({
  method: "eth_call",
  params: [
    {
      from: "0xb60e8dd61c5d32be8058bb8eb970870f07233155",
      to: "0xd46e8dd67c5d32be8058bb8eb970870f07244567",
      gas: "0x76c0", // 30400
      gasPrice: "0x9184e72a000", // 10000000000000
      value: "0x9184e72a", // 2441406250
      data: "0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675",
    },
    "latest",
  ],
});
// "0x9184e8f"
```

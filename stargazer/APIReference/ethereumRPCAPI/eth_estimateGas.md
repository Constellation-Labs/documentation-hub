---
hide_table_of_contents: true
---

<head>
  <meta
    name="description"
    content="Generates an estimate of how much gas will be necessary to process a transaction on the blockchain. Generally the estimate is significantly greater than the actual gas used. The transaction will not be added to the blockchain."
  />
</head>

<intro-end />

Generates an estimate of how much gas will be necessary to process a transaction on the blockchain. Generally the estimate is significantly greater than the actual gas used. The transaction will not be added to the blockchain.

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
  data?: HexData // Encoded contract call data.
}
```

##### Return Type

`HexString<Integer>` - Estimate in gas units.

##### Example

```typescript title="TypeScript"
await provider.request({
  method: "eth_estimateGas",
  params: [
    {
      from: "0xb60e8dd61c5d32be8058bb8eb970870f07233155",
      to: "0xd46e8dd67c5d32be8058bb8eb970870f07244567",
      gas: "0x76c0",
      gasPrice: "0x9184e72a000",
      value: "0x9184e72a",
      data: "0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675",
    },
  ],
});
// "0x5cec"
```

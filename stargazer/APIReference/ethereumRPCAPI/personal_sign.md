---
hide_table_of_contents: true
---

<head>
  <meta
    name="description"
    content="Calculates an ethereum signature of the given data from the selected account."
  />
</head>

<intro-end />

Calculates an ethereum signature of the given data from the selected account.

:::caution Warning
This method adds the standard `"\x19Ethereum Signed Message:\n" + len(message)` prefix when calculating the signature hash.

`ecdsa(keccak256("\x19Ethereum Signed Message:\n" + len(message) + message))`
:::

##### Parameters

| Name    | Type                    | Description           |
| ------- | ----------------------- | --------------------- |
| Data    | `HexString` \| `String` | Data to sign.         |
| Account | `Address`               | Account to sign from. |

##### Return Type

`HexString<Signature>` - The ethereum ecdsa signature.

##### Example

```typescript title="TypeScript"
await provider.request({
  method: "personal_sign",
  params: ["0xdeadbeaf", "0x9b2055d370f73ec7d8a03e965129118dc8f5bf83"],
});
// "0xa3f20717a250c2b0b729b7e5becbff67fdaef7e0699da4de7ca5895b02a170a12d887fd3b17bfdce3481f10bea41f45ba9f709d39ce8325427b57afcfc994cee1b"
```

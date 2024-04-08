---
hide_table_of_contents: true
---

<head>
  <meta
    name="description"
    content="Request the user to grant access to their Ethereum (EVM) accounts."
  />
</head>

<intro-end />

:::info Important
This method will send a wallet activation request if the user hasn't activated their wallet in your dapp, you can read more about the Stargazer wallet activation process [here](../../Guide/providerActivation.md#activate-your-provider).
:::

Request the user to grant access to their Ethereum (EVM) accounts. This method follows the [EIP-1102](https://eips.ethereum.org/EIPS/eip-1102) specification.


##### Parameters

None

##### Return Type

`Address[]` - User accounts available.

:::info Important
The account at index 0 will always be the active account in Stargazer.
:::

##### Example

```typescript title="TypeScript"
await provider.request({ method: "eth_requestAccounts", params: [] });
// ["0x407d73d8a49eeb85d32cf465507dd71d507100c1"]
```

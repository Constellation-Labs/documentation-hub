---
hide_table_of_contents: true
---

<head>
  <meta
    name="description"
    content="Returns the current network id."
  />
</head>

<intro-end />

Returns the current network id.

##### Parameters

None

##### Return Type

`ChainId` - The current network id. The full list of chain IDs is available at [chainlist.org](https://chainlist.org/). Some of the common ones are noted bellow.

```typescript title="ChainId"
type ChainId =
  | "1" // Ethereum Mainnet
  | "2" // Morden TestNet (deprecated)
  | "3" // Ropsten TestNet
  | "4" // Rinkeby TestNet
  | "5" // Goerli TestNet
  | "11155111"; // Sepolia TestNet
```

##### Example

```typescript title="TypeScript"
await provider.request({ method: "net_version", params: [] });
// "3"
```

---
hide_table_of_contents: true
---

<head>
  <meta
    name="description"
    content="Adds an L0 token to the Stargazer wallet."
  />
</head>

<intro-end />

Adds an L0 token to the Stargazer wallet.

##### Parameters

| Name | Type                           | Description               |
| ---- | ------------------------------ | ------------------------- |
| Data | `Object<WatchAssetParameters>` | The L0 token info object. |

```typescript title="WatchAssetParameters"
type WatchAssetParameters = {
  type: String; // The token's interface. "L0" is the only supported type.
  options: WatchAssetOptions;
};
```

```typescript title="WatchAssetOptions"
type WatchAssetOptions = {
  chainId: Number; // The chain ID. 1 (mainnet), 3 (testnet), 4 (integrationnet)
  address: Address; // Metagraph address
  l0: String; // L0 endpoint
  l1: String; // L1 endpoint
  name: String; // Name of the token
  symbol: String; // Symbol of the token
  logo: String; // Logo of the token
};
```

##### Return Type

`String<Boolean>` - True if the token was added successfully.

##### Example

```typescript title="TypeScript"
await provider.request({
  method: "wallet_watchAsset",
  params: [
    {
      type: "L0",
      options: {
        chainId: 4, // IntegrationNet
        address: "DAG5kfY9GoHF1CYaY8tuRJxmB3JSzAEARJEAkA2C", // DOR Metagraph address
        l0: "http://54.218.46.24:7000",
        l1: "http://54.218.46.24:8000",
        name: "IntegrationNet DOR",
        symbol: "iDOR",
        logo: "https://.../logo.png",
      },
    },
  ],
});
// true
```

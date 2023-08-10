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

`ChainId` - The current network id.

```typescript title="ChainId"
type ChainId =
  | "1" // Constellation MainNet
  | "3"; // Ceres Testnet (fka. Exchanges Network)
```

##### Example

```typescript title="TypeScript"
await provider.request({ method: "dag_chainId", params: [] });
// "3"
```

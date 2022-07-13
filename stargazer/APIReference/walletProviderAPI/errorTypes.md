---
hide_table_of_contents: true
sidebar_position: 2
---

<head>
  <meta
    name="description"
    content="Contains an object with different error classes commonly thrown."
  />
</head>

<intro-end />

Contains an object with different error classes commonly thrown.

##### Type

`Object<ErrorTypes>` - Object with error classes.

```typescript title="ErrorTypes"
type ErrorTypes = {
  // Base Stargazer Error.
  StargazerError;

  // Errors thrown by the injected WalletProvider.
  StargazerWalletProviderError;

  // General errors thrown by a chain provider.
  StargazerChainProviderError;

  // RPC related requests errors thrown by a chain provider. Complies with EIP-1193.
  StargazerChainProviderRpcError;
};
```

##### Example

```typescript title="TypeScript"
window.stargazer.errorTypes;
/* {
  StargazerError: ƒ,
  StargazerWalletProviderError: ƒ, 
  StargazerChainProviderError: ƒ, 
  StargazerChainProviderRpcError: ƒ
} */
```

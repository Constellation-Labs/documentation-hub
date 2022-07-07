---
title: Wallet Provider API
sidebar_label: Wallet Provider API
sidebar_position: 1
hide_table_of_contents: true
---

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';
import TOCInline from '@theme/TOCInline';

<head>
  <meta
    name="description"
    content="The WalletProvider provides access to different chain providers. Each provider instance is created once per network, thus 2 chain providers from the same network share the same underlying reference."
  />
  <style>{`
    :root {
      --doc-item-container-width: 60rem;
    }
  `}</style>
</head>

<intro-end />

The `WalletProvider` permits access to different chain providers. Each provider instance is created once per network, thus 2 chain providers from the same network share the same underlying reference.

The `WalletProvider` is injected on page load under `window.stargazer`.

## Properties

<TOCInline toc={toc} minHeadingLevel={3} maxHeadingLevel={3} />

## Detailed Documentation

### `version`

Contains the current wallet version.

##### Type

`String` - Version string.

##### Example

```typescript title="TypeScript"
window.stargazer.version;
// "3.5.2"
```

### `errorTypes`

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

### `getProvider(chain): ChainProvider`

Returns a chain provider for the selected chain.

:::info Info
Each provider instance is created once per network, thus 2 chain providers from the same network share the same underlying reference.
:::

##### Parameters

| Name  | Type                              | Description |
| ----- | --------------------------------- | ----------- |
| chain | `"constellation"` \| `"ethereum"` | Chain name. |

##### Return Type

`ChainProvider` - The selected chain provider. An error is thrown if `chain` is invalid.

##### Example

```typescript title="TypeScript"
window.stargazer.getProvider("constellation");
// ChainProvider
```

---
title: Provider Activation
sidebar_label: Provider Activation
hide_table_of_contents: false
---

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

<head>
  <meta
    name="description"
    content="Interaction with any of the networks is available using a chain provider, this guide will show you how to get one and an overview of the activation process."
  />
  <style>{`
    :root {
      --doc-item-container-width: 60rem;
    }
  `}</style>
</head>

Interaction with any of the networks is available using a chain provider, this guide will show you how to get one and an overview of the activation process.

<intro-end />

## Detect Stargazer `WalletProvider`

The stargazer browser extension injects a [`WalletProvider`](../APIReference//walletProviderAPI.md) instance under `window.stargazer` each time a page loads. You can check the existence of this property using the following snippet.

```typescript title="TypeScript"
if (window.stargazer) {
  console.log("Stargazer version " + window.stargazer.version + " detected");
} else {
  console.log("Stargazer not detected");
}
```

## Obtain a `ChainProvider`

Once you verified your app has access to a [`WalletProvider`](../APIReference//walletProviderAPI.md) instance you can obtain a [`ChainProvider`](../APIReference/chainProviderAPI.md) to interact with a network of your choice (constellation or ethereum).

```typescript title="TypeScript"
const provider = window.stargazer.getProvider("constellation");
```

_Read more about the [WalletProvider API](../APIReference//walletProviderAPI.md) and the [ChainProvider API](../APIReference/chainProviderAPI.md)._

## Activate your provider

For the provider to work you have to activate it via one of the following methods.

### Using the `provider.activate()` method

You can send an activation request to the user using the provider's [`activate()`](../APIReference/chainProviderAPI.md#async-activatetitle-boolean) method. Once the user accepts the request you'll be able to use the provider's RPC interface and methods for the selected chain.

```typescript title="TypeScript"
const activated = await provider.activate("A Cool App Name");
```

_Read more about the different RPC methods available both for [Constellation](../APIReference//constellationRPCAPI.md) and [Ethereum](../APIReference/ethereumRPCAPI.md)._

### Calling other RPC methods

You can as well call any RPC related method like [`request()`](../APIReference/chainProviderAPI.md#async-requestrequest-any) or [`on()`](../APIReference/chainProviderAPI.md#oneventname-listener-void) to activate the provider. It will internally send an activation request to the user to accept. If the user accepts the request the RPC related method is executed, if not it will throw an error.

:::caution Warning
If the user denies the provider activation, next calls to any RPC related method will immediately throw an error. No activation request will be sent.
:::

```typescript title="TypeScript"
await provider.request({ method: "dag_accounts", params: [] });
// ["DAG88C9WDSKH451sisyEP3hAkgCKn5DN72fuwjfX"] provider was activated
```

## Scope of the activation

Activations are issued for the page's [origin](https://datatracker.ietf.org/doc/html/rfc6454), they cover all chains available (constellation and ethereum) on all providers given. If you have been granted activation in the past, the user will not be asked to grant it again, unless the user is logged out in which case the user will be requested to log in.

## `ChainProvider` identity

All chain providers are instantiated once per page per chain. This means that with the following setup.

```typescript title="TypeScript"
const constellationProviderA = window.stargazer.getProvider("constellation");
const constellationProviderA = window.stargazer.getProvider("constellation");

const ethereumProviderA = window.stargazer.getProvider("ethereum");
const ethereumProviderB = window.stargazer.getProvider("ethereum");
```

Two chain providers from the same network in the same page share the same underlying reference

- `Object.is(constellationProviderA, constellationProviderA)` will be true.

- `Object.is(ethereumProviderA, ethereumProviderB)` will be true.

- `Object.is(constellationProviderA, ethereumProviderB)` will be false.

- `Object.is(constellationProviderB, ethereumProviderA)` will be false.

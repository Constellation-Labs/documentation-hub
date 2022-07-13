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
    content="A chain provider allows you to interact with any available network. In this guide, you will learn how to obtain a chain provider and activate it."
  />
</head>

<intro-end />

A chain provider allows you to interact with any available network. In this guide, you will learn how to obtain a chain provider and activate it.

## Detect Stargazer

The stargazer browser extension injects a [`WalletProvider`](../APIReference/walletProviderAPI/) instance under `window.stargazer` each time a page loads. You can check the existence of this property using the following snippet.

```typescript title="TypeScript"
if (window.stargazer) {
  console.log("Stargazer version " + window.stargazer.version + " detected");
} else {
  console.log("Stargazer not detected");
}
```

## Obtain a ChainProvider

Once you verified your app has access to a [`WalletProvider`](../APIReference/walletProviderAPI/) instance you can obtain a [`ChainProvider`](../APIReference/chainProviderAPI/) to interact with a network of your choice (constellation or ethereum).

```typescript title="TypeScript"
const provider = window.stargazer.getProvider("constellation");
```

_Read more about the [WalletProvider API](../APIReference/walletProviderAPI/) and the [ChainProvider API](../APIReference/chainProviderAPI/)._

## Activate your provider

For the provider to work you have to activate it via one of the following methods.

### Activate method

You can send an activation request to the user using the provider's [`activate()`](../APIReference/chainProviderAPI/activate.md) method. Once the user accepts the request you'll be able to use the provider's RPC interface and methods for the selected chain.

```typescript title="TypeScript"
const activated = await provider.activate("A Cool App Name");
```

_Read more about the different RPC methods available both for [Constellation](../APIReference/constellationRPCAPI/) and [Ethereum](../APIReference/ethereumRPCAPI/)._

### Other RPC methods

You can as well call any RPC related method such as [`request()`](../APIReference/chainProviderAPI/request.md) or [`on()`](../APIReference/chainProviderAPI/on.md) to activate the provider. It will send an internal activation request for the user to accept. If the user accepts the request, the RPC-related method is executed; if not, it will throw an error.

:::caution Warning
If the user denies the provider activation, next calls to any RPC related method will immediately throw an error. No activation request will be sent.
:::

```typescript title="TypeScript"
await provider.request({ method: "dag_accounts", params: [] });
// ["DAG88C9WDSKH451sisyEP3hAkgCKn5DN72fuwjfX"] provider was activated
```

## Scope of the activation

Activations are issued for the page [origin](https://datatracker.ietf.org/doc/html/rfc6454) and cover all chains available (within Constellation and Ethereum), and on all providers given. If you have been granted activation in the past, the user will not be asked to grant it again. If the user is logged out, they will be prompted to log in again.

## ChainProvider identity

All chain providers are instantiated once per page, and per chain with the following setup:

```typescript title="TypeScript"
const constellationProviderA = window.stargazer.getProvider("constellation");
const constellationProviderA = window.stargazer.getProvider("constellation");

const ethereumProviderA = window.stargazer.getProvider("ethereum");
const ethereumProviderB = window.stargazer.getProvider("ethereum");
```

Two chain providers from the same network and page will share the same underlying reference:

- `Object.is(constellationProviderA, constellationProviderA)` will be true.

- `Object.is(ethereumProviderA, ethereumProviderB)` will be true.

- `Object.is(constellationProviderA, ethereumProviderB)` will be false.

- `Object.is(constellationProviderB, ethereumProviderA)` will be false.

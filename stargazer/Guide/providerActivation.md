---
title: Provider Activation
sidebar_label: Provider Activation
hide_table_of_contents: false
---

<head>
  <meta
    name="description"
    content="A chain provider allows you to interact with any available network. In this guide, you will learn how to obtain a chain provider and activate it."
  />
</head>

<intro-end />

A chain provider allows you to interact with any available network. In this guide, you will learn how to obtain a chain provider and activate it.

:::info Tip
With the Stargazer Extension installed you can test the following examples in the browser console ([devtools](https://developer.chrome.com/docs/devtools/console/)).
:::

## Detect Stargazer

The Stargazer browser extension injects a [`WalletProvider`](../APIReference/walletProviderAPI/) instance under `window.stargazer` each time a page loads. You can check the existence of this property using the following snippet.

```typescript title="TypeScript"
if (window.stargazer) {
  console.log("Stargazer version " + window.stargazer.version + " detected");
} else {
  console.log("Stargazer not detected");
}
```

## Obtain a ChainProvider

Once you've verified your app has access to a [`WalletProvider`](../APIReference/walletProviderAPI/) instance you can obtain a [`ChainProvider`](../APIReference/chainProviderAPI/) to interact with a network of your choice (Constellation or Ethereum).

```typescript title="TypeScript"
const provider = window.stargazer.getProvider("constellation");
```

_Read more about the [WalletProvider API](../APIReference/walletProviderAPI/) and the [ChainProvider API](../APIReference/chainProviderAPI/)._

## Activate your provider

Activating the provider is required before it can be used to interact with the user's wallet. When activation is triggered, a popup is triggered for the user to allow your site access to their wallet. The user may choose a subset of their wallets to share if they have multiple. Activation can be achieved with one of the following methods. 

### Using `dag_requestAccounts` or `eth_requestAccounts` RPC methods


Calling `dag_requestAccounts` or `eth_requestAccounts` RPC methods, depending on the provider being used, will send an activation request for the user to accept. If the user accepts the request, the RPC method will return available accounts for the provider; if not, it will throw an error.

```typescript title="TypeScript"
await dagProvider.request({ method: "dag_requestAccounts", params: [] });
// ["DAG88C9WDSKH451sisyEP3hAkgCKn5DN72fuwjfX"] provider was activated

await ethProvider.request({ method: "eth_requestAccounts", params: [] });
// ["0xAab2C30c02016585EB36b7a0d5608Db787c1e44E"] provider was activated
```

_Read more about the different RPC methods available both for [Constellation](../APIReference/constellationRPCAPI/) and [Ethereum](../APIReference/ethereumRPCAPI/)._

### Activate method (deprecated)

:::caution Warning
This method of activation has been deprecated in favor of the [EIP-1102](https://eips.ethereum.org/EIPS/eip-1102) specification, in both Constellation and Ethereum providers.
:::

You can send an activation request to the user using the provider's [`activate()`](../APIReference/chainProviderAPI/activate.md) method. Once the user accepts the request you'll be able to use the provider's RPC interface and methods for the selected chain.

```typescript title="TypeScript"
const activated = await provider.activate("A Cool App Name");
```

_Read more about the different RPC methods available both for [Constellation](../APIReference/constellationRPCAPI/) and [Ethereum](../APIReference/ethereumRPCAPI/)._

## Scope of the activation

Activations are issued for the page [origin](https://datatracker.ietf.org/doc/html/rfc6454) and cover all chains available (currently Constellation and Ethereum) and on all providers given. If you have been granted activation in the past the user will not be asked to grant it again. If the user is logged out, they will be prompted to log in again.

## ChainProvider identity

All chain providers are instantiated once per page, and per chain with the following setup:

```typescript title="TypeScript"
const constellationProviderA = window.stargazer.getProvider("constellation");
const constellationProviderB = window.stargazer.getProvider("constellation");

const ethereumProviderA = window.stargazer.getProvider("ethereum");
const ethereumProviderB = window.stargazer.getProvider("ethereum");
```

Two chain providers from the same network and page will share the same underlying reference:

- `Object.is(constellationProviderA, constellationProviderB)` will be true.

- `Object.is(ethereumProviderA, ethereumProviderB)` will be true.

- `Object.is(constellationProviderA, ethereumProviderB)` will be false.

- `Object.is(constellationProviderB, ethereumProviderA)` will be false.

---
title: Sending RPC Requests
sidebar_label: Sending RPC Requests
hide_table_of_contents: false
---

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

<head>
  <meta
    name="description"
    content="Communication with the network is done via RPC requests, this guide will show you how to send a RPC request and how to interpret responses."
  />
  <style>{`
    :root {
      --doc-item-container-width: 60rem;
    }
  `}</style>
</head>

<intro-end />

Communication with the network is done via RPC requests, this guide will show you how to send a RPC request and how to interpret responses.

:::info Obtain a chain provider

With the steps mentioned in _[Provider Activation](./providerActivation.md#obtain-a-chainprovider)_ get a chain provider for the networks you want to interact with. In the following examples we will use both ethereum and constellation providers.

```typescript title="TypeScript"
const dagProvider = window.stargazer.getProvider("constellation");
const ethProvider = window.stargazer.getProvider("ethereum");
```
:::

## List available accounts

For listing available accounts in the wallet (and in some cases activating the providers) you can send the following calls to [`dag_accounts`](../APIReference/constellationRPCAPI.md#dagaccounts) RPC method and [`eth_accounts`](../APIReference/ethereumRPCAPI.md#ethaccounts) RPC method.

```typescript title="TypeScript"
const dagAccounts = await dagProvider.request({ method: "dag_accounts" });
console.log(dagAccounts);
// ["DAG88C9WDSKH451sisyEP3hAkgCKn5DN72fuwjfX", "DAG5pvyL8wQVEACYjEph9jouKQeH4J71Dn5HS25w"]

const ethAccounts = await ethProvider.request({ method: "eth_accounts" });
console.log(eth_accounts);
// ["0x567d0382442c5178105fC03bd52b8Db6Afb4fE40", "0xAab2C30c02016585EB36b7a0d5608Db787c1e44E"]
```

_Read more about `dag_accounts` RPC method and `eth_accounts` RPC method, [here](../APIReference//constellationRPCAPI.md#dagaccounts) and [here](../APIReference/ethereumRPCAPI.md#ethaccounts)._

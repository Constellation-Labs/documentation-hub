---
title: Using External Libraries
sidebar_label: Using External Libraries
hide_table_of_contents: false
---

<head>
  <meta
    name="description"
    content="Sending raw RPC requests can be error-prone and sometimes overwhelming. This guide will list some common external libraries for the Ethereum ecosystem that are compatible with the Stargazer ChainProvider."
  />
</head>

<intro-end />

Sending raw RPC requests can be error-prone and sometimes overwhelming. This guide will list some common external libraries for the Ethereum ecosystem that are compatible with the Stargazer ChainProvider.

### Ethers.js

The [ethers.js](https://docs.ethers.io/v5/) package is a general purpose library for interacting with the ethereum ecosystem. It offers different features from contract interaction to [EIP-712](https://eips.ethereum.org/EIPS/eip-712) message signing for wallets.

In [ethers.js](https://docs.ethers.io/v5/) there are different types of providers, the Stargazer [`ChainProvider`](../APIReference/chainProviderAPI/) is compatible with [ethers.js](https://docs.ethers.io/v5/) [`Web3Provider`](https://docs.ethers.io/v5/api/providers/other/#Web3Provider).

```typescript title="Typescript"
import * as ethers from "ethers";

const ethProvider = window.stargazer.getProvider("ethereum");

const ethersProvider = new ethers.providers.Web3Provider(ethProvider);
```

Once the [ethers.js](https://docs.ethers.io/v5/) [`Web3Provider`](https://docs.ethers.io/v5/api/providers/other/#Web3Provider) is created you can start interacting with the network using this library.

```typescript title="Typescript"
// get balance from address
await ethersProvider.getBalance("0xEb14c9bb6C2DEc2eCb9B278C9fa1EC763B04d545");
// { BigNumber: "36428926959297445147" }
```

```typescript title="Typescript"
// get current block number
await ethersProvider.getBlockNumber();
// 14983198
```

```typescript title="Typescript"
// get current gas price
await ethersProvider.getGasPrice();
// { BigNumber: "23610503242" }
```

### Web3.js

The [web3.js](https://web3js.readthedocs.io/en/v1.7.4/index.html) library offers a simple but powerful API to interact with the ethereum ecosystem using [EIP-1193](https://eips.ethereum.org/EIPS/eip-1193), HTTP, IPC or WebSocket providers.

The [web3.js](https://web3js.readthedocs.io/en/v1.7.4/index.html) library reveals the [`Web3`](https://web3js.readthedocs.io/en/v1.7.4/web3.html) class which is compatible with the Stargazer [`ChainProvider`](../APIReference/chainProviderAPI/).

```typescript title="Typescript"
import Web3 from "web3";

const ethProvider = window.stargazer.getProvider("ethereum");

const web3Provider = new Web3(ethProvider);
```

Once the [web3.js](https://web3js.readthedocs.io/en/v1.7.4/index.html) [`Web3`](https://web3js.readthedocs.io/en/v1.7.4/web3.html) object is created you can start interacting with the network using this library.

```typescript title="Typescript"
// get balance from address
await web3Provider.eth.getBalance("0xEb14c9bb6C2DEc2eCb9B278C9fa1EC763B04d545");
// "36428926959297445147"
```

```typescript title="Typescript"
// get current block number
await web3Provider.eth.getBlockNumber();
// 14983198
```

```typescript title="Typescript"
// get current gas price
await web3Provider.eth.getGasPrice();
// "23610503242"
```

---
title: Supported Connectors
sidebar_label: Supported Connectors
hide_table_of_contents: false
---

<head>
  <meta
    name="description"
    content="This section provides guidance on integrating different library connectors to facilitate wallet connectivity in your application. We support connectors for `web3react`, `wagmi`, and `react hooks`. Each connector has its own set of configurations/features and is designed to simplify the process of connecting to the Stargazer Wallet."
  />
</head>

<intro-end />

This section provides guidance on integrating different library connectors to facilitate wallet connectivity in your application. We support connectors for [`web3react/v6`](https://github.com/Uniswap/web3-react/tree/v6), [`wagmi`](https://wagmi.sh/), and [`react hooks`](https://react.dev/reference/react/hooks). Each connector has its own set of configurations/features and is designed to simplify the process of connecting to the Stargazer Wallet.

### Web3React

[`web3react/v6`](https://github.com/Uniswap/web3-react/tree/v6) is a framework that allows you to interact with Ethereum blockchain and smart contracts. It provides a simple and flexible way to connect to different wallets.

#### Installation

To install the [`web3react/v6`](https://github.com/Uniswap/web3-react/tree/v6) connector, run the following command:

If you're using NPM

```bash
npm install @stardust-collective/web3-react-stargazer-connector
```

If you're using NPM

```bash
yarn add @stardust-collective/web3-react-stargazer-connector
```

#### Example Usage

```typescript
import { StargazerWeb3ReactConnector } from "@stardust-collective/web3-react-stargazer-connector";
import { useWeb3React } from "@web3-react/core";

const stargazerConnector = new StargazerWeb3ReactConnector({
  supportedChainIds: [1, 3],
});

function App() {
  const { activate, active } = useWeb3React();

  const connect = async () => {
    try {
      await activate(stargazerConnector);
    } catch (ex) {
      console.error(ex);
    }
  };

  return (
    <div>
      <button onClick={connect}>{active ? "Connected" : "Connect"}</button>
    </div>
  );
}

export default App;
```

### Wagmi

[`wagmi`](https://wagmi.sh/) is a set of React Hooks for Ethereum, which simplifies the process of connecting to Ethereum networks and smart contracts.

#### Installation

To install the [`wagmi`](https://wagmi.sh/) connector, run the following command:

If you're using NPM

```bash
npm install @stardust-collective/web3-react-stargazer-connector
```

If you're using NPM

```bash
yarn add @stardust-collective/web3-react-stargazer-connector
```

#### Example Usage

```typescript
import {stargazerWalletWagmiConnector} from '@stardust-collective/web3-react-stargazer-connector';
import { mainnet, polygon } from 'wagmi/chains'
import { createConfig, http, useConnect } from 'wagmi'

const stargazerConnector = stargazerWalletWagmiConnector();

declare module 'wagmi' {
  interface Register {
    config: typeof config
  }
}

const config = createConfig({
  chains: [mainnet, polygon],
  transports: {
    [mainnet.id]: http('[your rpc endpoint url]'),
    [polygon.id]: http('[your rpc endpoint url]'),
  },
  connectors: [
    stargazerWalletWagmiConnector({}),
    ...other wallet connectors
  ],
})

function App() {
  const { connectors, connect } = useConnect()
  const { address } = useAccount();

  const doConnect = () => {
    for(const connector of connectors){
      if(connector.type === stargazerWalletWagmiConnector.type){
        connect(connector);
      }
    }
  }

  return (
    <div>
      <button onClick={doConnect}>Connect Wallet</button>
      {address && <p>Connected as {address}</p>}
    </div>
  );
}

export default App;
```

### React Hooks

The [`react hooks`](https://react.dev/reference/react/hooks) connector is a generic react hook that will enable your app to connect to the stargazer wallet on the constellation network, it will return a EIP-1193 compatible provider (among other properties), that will **only** connect to the constellation network (DAG) via RPC requests, the constellation RPC API reference can be found [here](../APIReference/constellationRPCAPI/index.md).

#### Installation

To install the [`react hooks`](https://react.dev/reference/react/hooks) connector, run the following command:

If you're using NPM

```bash
npm install @stardust-collective/web3-react-stargazer-connector
```

If you're using NPM

```bash
yarn add @stardust-collective/web3-react-stargazer-connector
```

#### Example Usage
```typescript
import {useStargazerWallet} from '@stardust-collective/web3-react-stargazer-connector';

function App() {
  const {activate, deactivate, ...state } = useStargazerWallet();

  const doConnect = async () => {
    await activate();
  };

  const doSignMessage = async () => {
    if(!state.active){
      return;
    }

    const signatureRequest = {
      content: 'Sign this message to confirm your participation in this project.',
      metadata: {
        field1: 'an-useful-value',
        field2: 1,
        field3: null /* ,
        field4: {
          // Nested fields are not supported
          prop:1
        } */
      }
    };

    // Encode the signature request - Base64 < JSON < Request
    const signatureRequestEnconded = window.btoa(JSON.stringify(signatureRequest));

    await state.request({
      method: 'dag_signMessage',
      params: [state.account, signatureRequestEnconded]
    });
  }

  return (
    <div>
      <span>Connected To: {state.active && state.account}</span>
      <button onClick={doConnect}>{state.active ? "Connected" : "Connect"}</button>
      <button onClick={doSignMessage}>Sign Message</button>
    </div>
  );
}

export default App;
```

### New Connectors Support

We are committed to expanding our support for library connectors to meet the evolving needs of our users. If you require a connector that is not currently supported, or have suggestions for new connectors, we are open to exploring these possibilities and integrating them into the wallet.

#### Requesting New Connectors

To request the addition of new library connectors or suggest improvements, please reach out to us through the following channels:

- **GitHub Issues**: [StardustCollective/stargazer-wallet-connector](https://github.com/StardustCollective/stargazer-wallet-connector/issues)
- **Discord Channel**: [Constellation Discord](https://discord.gg/NKXD5ZJ5cq)

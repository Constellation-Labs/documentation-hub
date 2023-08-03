---
title: Connecting to the network
sidebar_label: Connecting to the Network
slug: /dag4-network
hide_table_of_contents: false
---

Dag4.js provides reasonable configuration values by default for accessing Constellation Network versions 1.0 and 2.0. 

### Minimal network configuration 
```js
dag4.account.connect({
  networkVersion: '2.0',
  testnet: true
});
```

### Custom network configuration
You can provide custom values for each the three network API endpoints to set up a custom connection. 
```js
dag4.account.connect({
  networkVersion: '2.0',
  beUrl: 'https://be-mainnet.constellationnetwork.io/',
  l0Url: 'http://13.52.246.74:9000',
  l1Url: 'http://13.52.246.74:9010'
});
```

### Default Endpoints
The following endpoints are used by default by Dag4. 

#### 2.0 TestNet
- Block Explorer API: https://be-testnet.constellationnetwork.io
- L0 API: https://l0-lb-testnet.constellationnetwork.io
- L1 API: https://l1-lb-testnet.constellationnetwork.io

```js
dag4.account.connect({
  networkVersion: '2.0',
  testnet: true
});
```

#### 2.0 MainNet
- Block Explorer API: https://be-mainnet.constellationnetwork.io
- L0 API: https://l0-lb-mainnet.constellationnetwork.io
- L1 API: https://l1-lb-mainnet.constellationnetwork.io

```js
dag4.account.connect({
  networkVersion: '2.0',
  testnet: false
});
```

:::caution Warning
Note: MainNet 1.0 will become obsolete as soon as MainNet 2.0 is live. The Load balancer API will no longer be available but the Block Explorer API will continue to be available to provide historical transaction records.
:::

#### 1.0 TestNet
- Block Explorer API: https://api-be.exchanges.constellationnetwork.io
- Load Balancer API: https://lb.exchanges.constellationnetwork.io:9000

```js
dag4.account.connect({
  networkVersion: '1.0',
  testnet: true
});
```

#### 1.0 MainNet
- Block Explorer API: https://block-explorer.constellationnetwork.io
- Load Balancer API: https://lb.constellationnetwork.io:9000

```js
dag4.account.connect({
  networkVersion: '1.0',
  testnet: false
});
```

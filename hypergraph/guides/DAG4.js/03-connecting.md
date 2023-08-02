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

#### 2.0 Testnet
- Block Explorer API: https://be-testnet.constellationnetwork.io
- L0 API: http://lb-testnet.constellationnetwork.io:9000
- L1 API: http://lb-testnet.constellationnetwork.io:9010

```js
dag4.account.connect({
  networkVersion: '2.0',
  testnet: true
});
```

#### 2.0 Integration net
- Block Explorer API: https://be-integrationnet.constellationnetwork.io
- L0 API: http://lb-integrationnet.constellationnetwork.io:9000
- L1 API: http://lb-integrationnet.constellationnetwork.io:9010

```js
dag4.account.connect({
  id: 'integration2',
  networkVersion: '2.0',
  beUrl: 'https://be-integrationnet.constellationnetwork.io',
  l0Url: 'https://l0-lb-integrationnet.constellationnetwork.io',
  l1Url: 'https://l1-lb-integrationnet.constellationnetwork.io'
}, false);
```

#### 2.0 Mainnet
- Block Explorer API: https://be-mainnet.constellationnetwork.io
- L0 API: http://lb-mainnet.constellationnetwork.io:9000
- L1 API: http://lb-mainnet.constellationnetwork.io:9010

```js
dag4.account.connect({
  networkVersion: '2.0',
  testnet: false
});
```

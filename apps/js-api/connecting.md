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
---
title: Testnet
slug: /testnet
sidebar_label: Testnet
hide_table_of_contents: false
---
<intro-end />

Constellation provides developers with the testnet, a  testing environment where new protocol updates are released and tested before they reach production. Unlike the more stable integration net, the testnet is a  platform for developers wanting to experiment with the latest features and validate their applications' compatibility with upcoming changes. 

## Connecting to Testnet
The following urls can used to access testnet: 
- __Block Explorer API__: https://be-testnet.constellationnetwork.io
- __Global L0 API__: https://l0-lb-testnet.constellationnetwork.io
- __DAG L1 API__: https://l1-lb-testnet.constellationnetwork.io

See [Available APIs](/hypergraph/global-apis) for detailed information on available endpoints. 

## Faucet
Constellation hosts a testnet faucet which distributes testnet DAG for testing purposes. This coin has no value and can only be used on the testnet. The faucet provides small amounts of DAG at each request with rate limiting to prevent depletion of its DAG reserves. 

The faucet can be accessed at:
```
GET https://faucet.constellationnetwork.io/testnet/faucet/<YOUR WALLET ADDRESS>
```

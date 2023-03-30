---
title: Testnet
slug: /testnet
sidebar_label: Testnet
hide_table_of_contents: false
---
<intro-end />

Constellation provides developers with a full featured testnet to test applications and metagraphs before they're ready for the production environment. 
The testnet has all of the same features as mainnet and can therefore be used to validate application integrations in a realistic way. 

:::info Developing a metagraph
Metagraph developers may use testnet as they're nearing production readiness. For initial development, developing on your own test cluster is recommended. See [Deploying to Testnet](/sdk/guides/deploy-testnet).
:::

## Connecting to Testnet
The following urls can used to access testnet: 
- __Block Explorer API__: https://be-testnet.constellationnetwork.io
- __Global L0 API__: https://l0-lb-testnet.constellationnetwork.io
- __DAG L1 API__: https://l1-lb-testnet.constellationnetwork.io

See [Available APIs](/hypergraph/global-apis) for detailed information on available endpoints. 

## Testnet Faucet
Constellation hosts a testnet faucet which distributes testnet DAG for testing purposes. This coin has no value and can only be used on the testnet. The faucet provides small amounts of DAG at each request with rate limiting to prevent depletion of its DAG reserves. 

The faucet can be accessed at:
```
GET https://faucet.constellationnetwork.io/testnet/faucet/<YOUR WALLET ADDRESS>
```

---
title: TestNet
slug: /testnet
sidebar_label: TestNet
hide_table_of_contents: false
---
<intro-end />

:::warning
TestNet is an experimental environment for testing bleeding edge protocol features. As such, instability should be expected and bugs may be present. IntegrationNet should be prefered for testing network integrations as it is significantly more stable than TestNet. 
:::

Metagraph developers can use TestNet as an experimental environment designed for testing metagraphs against the newest protocol updates before they are rolled out to IntegrationNet. Unlike the more stable IntegrationNet, the TestNet provides a platform for developers to experiment with the latest features, enabling them to validate how their metagraphs will interact with upcoming changes.


## Connecting to TestNet
The following urls can used to access TestNet: 
- __Block Explorer API__: https://be-testnet.constellationnetwork.io
- __Global L0 API__: https://l0-lb-testnet.constellationnetwork.io
- __DAG L1 API__: https://l1-lb-testnet.constellationnetwork.io

See [Available APIs](/hypergraph/global-apis) for detailed information on available endpoints. 

## Faucet
Constellation hosts a TestNet faucet which distributes testnet DAG for testing purposes. This coin has no value and can only be used on the testnet. The faucet provides small amounts of DAG at each request with rate limiting to prevent depletion of its DAG reserves. 

The faucet can be accessed at:
```
GET https://faucet.constellationnetwork.io/testnet/faucet/<YOUR WALLET ADDRESS>
```

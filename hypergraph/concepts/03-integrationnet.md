---
title: IntegrationNet
slug: /integrationnet
sidebar_label: IntegrationNet
hide_table_of_contents: false
---
<intro-end />

Constellation provides developers with a full featured IntegrationNet to test applications and metagraphs before they're ready for the production environment. 
The IntegrationNet has all of the same features as MainNet and can therefore be used to validate application integrations in a realistic way. 

:::info Developing a Metagraph
Metagraph developers may use IntegrationNet as they're nearing production readiness. See [Setup a metagraph](/sdk/guides/deploy-a-metagraph/overview).
:::

## Connecting to IntegrationNet
The following urls can used to access IntegrationNet: 
- __Block Explorer API__: https://be-integrationnet.constellationnetwork.io
- __Global L0 API__: https://l0-lb-integrationnet.constellationnetwork.io
- __DAG L1 API__: https://l1-lb-integrationnet.constellationnetwork.io

See [Available APIs](/hypergraph/global-apis) for detailed information on available endpoints. 

## Faucet
Constellation hosts a IntegrationNet faucet which distributes IntegrationNet DAG for testing purposes. This coin has no value and can only be used on the testnet. The faucet provides small amounts of DAG at each request with rate limiting to prevent depletion of its DAG reserves. 

The faucet can be accessed at:
```
GET https://faucet.constellationnetwork.io/integrationnet/faucet/<YOUR WALLET ADDRESS>
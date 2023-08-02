---
title: Integration net
slug: /integrationnet
sidebar_label: Integration net
hide_table_of_contents: false
---
<intro-end />

Constellation provides developers with a full featured integration net to test applications and metagraphs before they're ready for the production environment. 
The integration net has all of the same features as mainnet and can therefore be used to validate application integrations in a realistic way. 

:::info Developing a metagraph
Metagraph developers may use integration net as they're nearing production readiness. See [Setup a metagraph](/sdk/guides/setup-a-metagraph/overview).
:::

## Connecting to Integration net
The following urls can used to access integration net: 
- __Block Explorer API__: https://be-integrationnet.constellationnetwork.io
- __Global L0 API__: https://l0-lb-integrationnet.constellationnetwork.io
- __DAG L1 API__: https://l1-lb-integrationnet.constellationnetwork.io

See [Available APIs](/hypergraph/global-apis) for detailed information on available endpoints. 

## Faucet
Constellation hosts a faucet which distributes integration net DAG for testing purposes. This coin has no value and can only be used on the integration net. The faucet provides small amounts of DAG at each request with rate limiting to prevent depletion of its DAG reserves. 

The faucet can be accessed at:
```
GET https://faucet.constellationnetwork.io/integrationnet/faucet/<YOUR WALLET ADDRESS>
```

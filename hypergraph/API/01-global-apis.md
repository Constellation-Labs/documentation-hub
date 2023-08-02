---
title: Global APIs
slug: /global-apis
sidebar_label: Global APIs
hide_table_of_contents: false
---

<intro-end />

The global APIs consist of the Global L0 and the DAG L1 networks. 

See [Architecture](/hypergraph/architecture) for an overview of how these networks fit into the Constellation Network overall. 

## DAG L1 API
The DAG L1 API is used primarily for sending DAG transactions which are then processed through the Global L0 and are eventually visible on the Block Explorer API after reaching finality. 

You can use one of the load balancer endpoints below or connect directly to a network node by IP address and port. You can use the load balancer /cluster/info endpoint to find an active network node to connect to. Connect to the node using http and the configured port, ex: http://18.232.193.183:9010

#### API Spec

[Open API Spec](http://apidoc-dev.constellationnetwork.io.s3-website.us-west-1.amazonaws.com/node/?url=http://apidoc-dev.constellationnetwork.io.s3-website.us-west-1.amazonaws.com/node/l1-public-v2.yml)

#### Base urls​:

- TestNet: https://l1-lb-testnet.constellationnetwork.io
- IntegrationNet: https://l1-lb-integrationnet.constellationnetwork.io
- MainNet: https://l1-lb-mainnet.constellationnetwork.io

## Global L0 API
The Global L0 API can be used to fetch global snapshot information, view DAG supply and address balances, and submit metagraph (state channel) snapshots. 

You can use one of the load balancer endpoints below or connect directly to a network node by IP address and port. You can use the load balancer /cluster/info endpoint to find a network node. Connect using http and the configured port, ex: http://18.232.193.183:9000

#### API Spec

[Open API Spec](http://apidoc-dev.constellationnetwork.io.s3-website.us-west-1.amazonaws.com/node/#/)

#### Base urls​:
- TestNet: https://l0-lb-testnet.constellationnetwork.io
- IntegratioNet: https://l0-lb-integrationnet.constellationnetwork.io
- MainNet: https://l0-lb-mainnet.constellationnetwork.io
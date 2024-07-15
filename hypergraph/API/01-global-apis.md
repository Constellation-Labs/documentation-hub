---
title: Hypergraph APIs
slug: /global-apis
sidebar_label: Hypergraph APIs
hide_table_of_contents: false
---

<intro-end />

The Hypergraph APIs are the public HTTP APIs hosted on Global L0 and the DAG L1 network nodes. Below you'll find an OpenAPI spec for each of the public network environments. In general, TestNet has the bleeding edge features, IntegrationNet has stable new features, and MainNet has fully released features. 

See [Architecture](/hypergraph/architecture) for an overview of how these networks fit into the Constellation Network overall. 

## DAG L1 API
The DAG L1 API is used primarily for sending DAG transactions which are then processed through the Global L0 and are eventually visible on the Block Explorer API after reaching finality. 

You can use one of the load balancer endpoints below or connect directly to a network node by IP address and port. You can use the load balancer /cluster/info endpoint to find an active network node to connect to. Connect to the node using http and the configured port, ex: http://18.232.193.183:9010

#### API Spec

- [TestNet](http://apidoc-testnet.constellationnetwork.io.s3-website.us-west-1.amazonaws.com/dag/l1/public/)
- [IntegrationNet](http://apidoc-integrationnet.constellationnetwork.io.s3-website.us-west-1.amazonaws.com/dag/l1/public/)
- [MainNet](http://apidoc.constellationnetwork.io.s3-website.us-west-1.amazonaws.com/dag/l1/public/)

#### Base urls​:

- TestNet: https://l1-lb-testnet.constellationnetwork.io
- IntegrationNet: https://l1-lb-integrationnet.constellationnetwork.io
- MainNet: https://l1-lb-mainnet.constellationnetwork.io

## Global L0 API
The Global L0 API can be used to fetch global snapshot information, view DAG supply and address balances, and submit metagraph snapshots. 

You can use one of the load balancer endpoints below or connect directly to a network node by IP address and port. You can use the load balancer /cluster/info endpoint to find a network node. Connect using http and the configured port, ex: http://18.232.193.183:9000

#### API Spec

- [TestNet](http://apidoc-testnet.constellationnetwork.io.s3-website.us-west-1.amazonaws.com/dag/l0/public/)
- [IntegrationNet](http://apidoc-integrationnet.constellationnetwork.io.s3-website.us-west-1.amazonaws.com/dag/l0/public/)
- [MainNet](http://apidoc.constellationnetwork.io.s3-website.us-west-1.amazonaws.com/dag/l0/public/)


#### Base urls​:
- TestNet: https://l0-lb-testnet.constellationnetwork.io
- IntegratioNet: https://l0-lb-integrationnet.constellationnetwork.io
- MainNet: https://l0-lb-mainnet.constellationnetwork.io
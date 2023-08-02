---
title: Network APIs
sidebar_label: Overview
slug: /network-apis
hide_table_of_contents: false
---
<intro-end />

Interaction with Constellation Network version 2.0 is possible using three independent REST APIs which can be called for specific functionality. The three APIs together allow for complete integration with the network. 

## APIs
### Block Explorer API
[OAS3 Spec](http://apidoc-dev.constellationnetwork.io.s3-website.us-west-1.amazonaws.com/block-explorer/)

An off-network API offering indexed and searchable transactions, snapshots, and block information.

##### Base urls
- **TestNet:** https://be-testnet.constellationnetwork.io
- **IntegrationNet:** https://be-integrationnet.constellationnetwork.io
- **MainNet:** https://be-mainnet.constellationnetwork.io

### L0 API
[OAS3 Spec](http://apidoc-dev.constellationnetwork.io.s3-website.us-west-1.amazonaws.com/node/#/)

An on-node API for getting real time information on snapshots, and address balances as well as for submitting L1 snapshots. You can use one of the load balancer endpoints below or connect directly to a network node by IP address and port. You can use the load balancer `/cluster/info` endpoint to find a network node. Connect using http and the configured port, ex: http://18.232.193.183:9000

##### Base urls 
- **TestNet:** https://l0-lb-testnet.constellationnetwork.io
- **IntegrationNet:** https://l0-lb-integrationnet.constellationnetwork.io
- **MainNet:** https://l0-lb-mainnet.constellationnetwork.io

### L1 API
[OAS3 Spec](http://apidoc-dev.constellationnetwork.io.s3-website.us-west-1.amazonaws.com/node/?url=http://apidoc-dev.constellationnetwork.io.s3-website.us-west-1.amazonaws.com/node/l1-public-v2.yml)

An on-node API for posting DAG transactions and fetching information on address parent references. You can use one of the load balancer endpoints below or connect directly to a network node by IP address and port. You can use the load balancer `/cluster/info` endpoint to find an active network node to connect to. Connect to the node using http and the configured port, ex: http://18.232.193.183:9010

##### Base urls
- **TestNet:** https://l1-lb-testnet.constellationnetwork.io
- **IntegrationNet:** https://l1-lb-integrationnet.constellationnetwork.io
- **MainNet:** https://l1-lb-mainnet.constellationnetwork.io
---
title: Metagraph APIs
slug: /currency-apis
sidebar_label: Metagraph APIs
hide_table_of_contents: false
---

<intro-end />

Metagraph APIs are hosted on any metagraph that adheres to the Metagraph Token Standard or implements a custom data endpoint. The APIs described here are very similar to the [Hypergraph APIs](/hypergraph/global-apis) described in the previous section. The metagraph APIs consist of the Currency L0 API, Currency L1 API, and the Data L1 API. These APIs are hosted on individual metagraphs which may have their own rate limits or specific configurations required. 

See [Architecture](/hypergraph/architecture) for an overview of how these networks fit into the Constellation Network overall. 

## Currency L0 API
The Currency L0 API can be used to fetch metagraph snapshot chain information, view token supply and address balances, and submit metagraph snapshots. 

You can connect directly to a network node by IP address and port, or by an endpoint provided to you by the metagraph network. 

#### API Spec
- [TestNet](http://apidoc-testnet.constellationnetwork.io.s3-website.us-west-1.amazonaws.com/currency/v1/l0/public/)
- [IntegrationNet](http://apidoc-integrationnet.constellationnetwork.io.s3-website.us-west-1.amazonaws.com/currency/v1/l0/public/)
- [MainNet](http://apidoc.constellationnetwork.io.s3-website.us-west-1.amazonaws.com/currency/v1/l0/public/)


## Currency L1 API
The Currency L1 API is used primarily for sending metagraph token transactions which are then processed through the Global L0, Currency L0, and Global L0. 

You can connect directly to a network node by IP address and port, or by an endpoint provided to you by the metagraph network.

#### API Spec

- [TestNet](http://apidoc-testnet.constellationnetwork.io.s3-website.us-west-1.amazonaws.com/currency/v1/l1/public/)
- [IntegrationNet](http://apidoc-integrationnet.constellationnetwork.io.s3-website.us-west-1.amazonaws.com/currency/v1/l1/public/)
- [MainNet](http://apidoc.constellationnetwork.io.s3-website.us-west-1.amazonaws.com/currency/v1/l1/public/)

#### Base urls​

Base urls or ip addresses will be provided by the metagraph network you wish to connect to. 


## Data L1 API
The Global L0 API can be used to fetch global snapshot information, view DAG supply and address balances, and submit metagraph (state channel) snapshots. 

You can connect directly to a network node by IP address and port, or by an endpoint provided to you by the metagraph network. 

#### API Spec
- [TestNet](http://apidoc-testnet.constellationnetwork.io.s3-website.us-west-1.amazonaws.com/currency/v1/l1-data/public/)
- [IntegrationNet](http://apidoc-integrationnet.constellationnetwork.io.s3-website.us-west-1.amazonaws.com/currency/v1/l1-data/public/ )
- [MainNet](http://apidoc.constellationnetwork.io.s3-website.us-west-1.amazonaws.com/currency/v1/l1-data/public/ )

#### Base urls​

Base urls or ip addresses will be provided by the metagraph network you wish to connect to. 
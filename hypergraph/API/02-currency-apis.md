---
title: Currency API
slug: /currency-apis
sidebar_label: Currency APIs
hide_table_of_contents: false
---

<intro-end />

Currency APIs are hosted on any metagraph that adheres to the Metagraph Token Standard. The APIs described here are very similar to the [Global APIs](/hypergraph/global-apis) described in the previous section. The currency APIs consist of the Currency L0 API and Currency L1 API. These APIs are hosted on individual metagraphs which may have their own rate limits or specific configurations required. 

See [Architecture](/hypergraph/architecture) for an overview of how these networks fit into the Constellation Network overall. 

## Currency L1 API
The Currency L1 API is used primarily for sending metagraph token transactions which are then processed through the Global L0, Currency L0, and Global L0. 

You can connect directly to a network node by IP address and port, or by an endpoint provided to you by the metagraph network.

#### API Spec

[Open API Spec](http://apidoc-dev.constellationnetwork.io.s3-website.us-west-1.amazonaws.com/currency/v1/l1/public/)

#### Base urls​

Base urls or ip addresses will be provided by the metagraph network you wish to connect to. 

## Currency L0 API
The Global L0 API can be used to fetch global snapshot information, view DAG supply and address balances, and submit metagraph (state channel) snapshots. 

You can connect directly to a network node by IP address and port, or by an endpoint provided to you by the metagraph network. 

#### API Spec

[Open API Spec](http://apidoc-dev.constellationnetwork.io.s3-website.us-west-1.amazonaws.com/currency/v1/l0/public/)

#### Base urls​

Base urls or ip addresses will be provided by the metagraph network you wish to connect to. 
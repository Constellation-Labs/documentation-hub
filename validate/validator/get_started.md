---
title: Getting Started
slug: getting-started
hide_table_of_contents: false
---

## Before you begin:

:::info Are you on the seedlist?
Both MainNet 2.0 and Testnet 2.0 currently have a seedlist in place that only allows specific `NodeIds` to join the network. This provides an extra layer of security and stability as the ecosystem matures, and will eventually be phased out for anyone to join. The seedlist is currently closed although we are accepting applications from metagraph developers or integration partners that need access to develop on the network. Please fill out [this form](https://airtable.com/shroR5bXszQXdh6dn) if you fit into that category.
:::
## Plan

Decide on how you will run your validator.

- [Cloud provider](#cloud-provider)
- [Hosting provider](#hosting-provider)
- [Dedicated server](#dedicated-server)

Decide if you want to automate the creation of your Node or handle it manually.

- [nodectl](#nodectl-automation)
- [manual installation](#manual-installation)

#### Cloud Provider
Utilizing a Cloud Provider to build your Node is the most common option.  Choose a provider that meets your requirements, build a VPS instance, download nodectl or manually install dependencies, and then create your Node. 

- Begin [here](/validate/validator/providers)

#### Hosting Provider
Utilize a Hosting Provider to handle a dedicated server to run your Node.  This option will require you to do some research on our own to find a hosting provider.  There are many options to choose from.

- Begin [here](https://www.google.com/search?q=top+10+hosting+providers)

#### Dedicated Server
Run your Node on your own dedicated "bare metal" server.  This is the most advanced option and requires more knowledge of how to handle hardware, operating systems, and software.

Buying a server or purchasing the necessary hardware to run a Node is out of the scope of this documentation. 

To deploy a Node to run on the Hypergraph and also the DAG Layer1 Metagraph, you should make sure your bare metal server supports the following [specs](/validate/validator/specs).

#### nodectl Automation
Once you have established where you are going to build your Node or what hardware you are going to use.  You can decide to turn your server into a Node in minutes using Constellation Network's utility `nodectl`.

- Begin [here](/validate/automated/nodectl)

#### Manual Installation
Build your Node manually by handling all then necessary setup requirements step by step.  

Manual installation will require more time; however, will give a new Node Operator the insight into what is going on "under the hood" on a server that is running as a Constellation Network Node.  

- Begin [here](/validate/manual/manual-install-getting-started)

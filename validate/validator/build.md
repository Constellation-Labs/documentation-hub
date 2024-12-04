---
title: Build Process
slug: build
hide_table_of_contents: false
---

## Build Options

The following are several suggestions on how to begin preparing the server that will become and run your validator node.

### Cloud Provider
Utilizing a Cloud Provider to build your node is the most common option.  Choose a provider that meets your requirements, build a VPS instance, download nodectl or manually install dependencies, and then create your node. 

- Begin [here](/validate/validator/providers)

### Hosting Provider
Utilize a Hosting Provider to handle a dedicated server to run your node.  This option will require you to do some research on our own to find a hosting provider.  There are many options to choose from.

- Begin [here](https://www.google.com/search?q=top+10+hosting+providers)

### Dedicated Server
Run your node on your own dedicated "bare metal" server.  This is the most advanced option and requires more knowledge of how to handle hardware, operating systems, and software.

Buying a server or purchasing the necessary hardware to run a node is out of the scope of this documentation. 

To deploy a node to run on the Hypergraph and also the DAG Layer1 metagraph, you should make sure your bare metal server supports the following [specs](/validate/validator/specs).

#### nodectl Automation
Once you have established where you are going to build your node or what hardware you are going to use.  You can decide to turn your server into a node in minutes using Constellation Network's utility `nodectl`.

- Begin [here](/validate/automated/getting-started/nodectl-getting-started)

#### Quick Start Guides
Build your MainNet, IntegrationNet, TestNet or **metagraph** node Quickly with sensible defaults.

- Begin [here](/validate/quick-start/index)


#### Manual Installation
Build your node manually by handling all then necessary setup requirements step by step.  

Manual installation will require more time; however, will give a new Node Operator the insight into what is going on "under the hood" on a server that is running as a Constellation Network node.  

- Begin [here](/validate/manual/manual-install-getting-started)

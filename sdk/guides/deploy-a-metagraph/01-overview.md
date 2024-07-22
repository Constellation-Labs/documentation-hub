---
id: overview
title: Overview
---
import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

<intro-end />

This tutorial will guide you through the process of deploying your Euclid metagraph project to a cloud provider and connecting to IntegrationNet or MainNet. We focus on AWS specifically but the basic principles would apply to any cloud provider. 

:::note Deploying a Metagraph with Euclid
Utilize Euclid for deploying metagraphs efficiently. Initiate deployment to your remote hosts, including all necessary files and dependencies, with the following command:
```bash
./scripts/hydra remote-deploy
```
To start your nodes, execute:
```bash
./scripts/hydra remote-start
```
For comprehensive guidance on utilizing these commands, consult the README file in the [Euclid repository](https://github.com/Constellation-Labs/euclid-development-environment/blob/main/README.md).

Additionally, we offer a demonstration video showcasing this functionality, available [here](https://twitter.com/codebrandes/status/1765904204600938505).
:::

## Architecture
There are many kinds of potential deployment architectures possible for production deployments depending on project scaling needs. Here, we will focus on a deployment strategy that uses a minimal set of infrastructure components to simplify deployment and reduce cloud costs. For most projects, this offers a good starting point that can be expanded on later to meet specific project needs. 

We will be deploying a [Metagraph Framework](/sdk/frameworks/currency/overview) metagraph using a [Data Application](/sdk/metagraph-framework/data/overview). This type of metagraph consists of 4 layers in total: 
- **Global L0:** Hypergraph node on IntegrationNet or MainNet
- **Metagraph L0:** Metagraph consensus layer 
- **Currency L1:** Metagraph layer for accepting and validating token transactions
- **Data L1:** Metagraph layer for accepting and validating data updates

In this guide, we will deploy all 4 layers to each of 3 EC2 instances. In other words, we will only use 3 servers but each server will act as a node on each of the 4 layers. This allows all layers to have the minimum cluster size to reach consensus (3), while also being conscious of infrastructure costs by combining each layer onto the same EC2 instances. Each layer will communicate over custom ports which we will configure as part of this process. 

**Deployed Architecture:**

![Metagraph Architecture](/img/sdk/metagraph-deployment-architecture.png)

## Requirements
- AWS Account
- A metagraph project built and tested locally in Euclid
- At least 3 **`p12`** files. Refer to [this guide](/sdk/guides/working-with-p12-files) on how to generate p12 files.
- Ensure that the ID of all your **`p12`** files is on the appropriate network seedlist (IntegrationNet or MainNet) otherwise, you won't be able to connect to the network. Check the [seedlist](https://constellationlabs-dag.s3.us-west-1.amazonaws.com/integrationnet-seedlist) to verify your IDs are included.

## Guide
This guide will walk you through a series of steps to manually configure your nodes via the AWS console. We will configure AWS, build all code on a base instance that we will then convert to an AWS AMI to be used as a template for creating the rest of the nodes. This allows us to build once, and then duplicate it to all of the EC2 instances. Then we will configure each of the nodes with their own P12 file and other details specific to each node. 

**We will walk through the following steps:**
- [Configure security groups](/sdk/guides/deploy-a-metagraph/security-groups): Create a security group for the nodes and open the proper network ports for communication. 
- [Setup SSH keys](/sdk/guides/deploy-a-metagraph/key-pairs): Create SSH keys to securely connect to the nodes. 
- [Create a base instance](/sdk/guides/deploy-a-metagraph/base-instance/generating-base-instance): Build a server image as an AWS AMI to be reused for each of the nodes. 
- [Configure the base instance](/sdk/guides/deploy-a-metagraph/base-instance/configuring-base-instance): Add all dependencies and upload metagraph project files to the base instance.
- [Generate AMI](/sdk/guides/deploy-a-metagraph/base-instance/generating-AMI-from-instance): Convert the base instance into a reusable AMI. 
- [Generate EC2 Instances from AMI](/sdk/guides/deploy-a-metagraph/base-instance/launching-instances-from-ami): Using the AMI created in previous steps as a template, generate all 3 EC2 instances. 
- [Configure Layers and Join](/sdk/guides/deploy-a-metagraph/building-metagraph-instances/configuring-p12-files): Configure each of the 4 layers and join to the network.

---
id: overview
title: Overview
---
import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

<intro-end />

This tutorial will guide you through the process of setting up a Metagraph on Amazon's EC2 platform.

:::caution
Please note that all steps in this tutorial are performed on the EC2 page within the AWS console. Be sure to follow the steps in the exact order they are presented.
:::

### Requirements
- AWS Account
- 3 EC2 Instances
- You will need at least 3 **`p12`** files. Refer to [this guide](/sdk/guides/working-with-p12-files) on how to generate p12 files.
- For the tests, ensure that the ID of all your **`p12`** files is on the IntegrationNet seedlist; otherwise, your setup won't work. Check the seedlist [here](https://constellationlabs-dag.s3.us-west-1.amazonaws.com/integrationnet-seedlist) or apply for an IntegrationNet spot.

## Guide
- To deploy your Metagraph on our networks, you should have one cloud provider and some virtual machines. In this case, we're using AWS with EC2 instances.

- To run an EC2 instance, we first need to set up some security configurations.

- The first configuration is to create a new security group. This security group will allow or deny access to some ports of your instances.
  -  [Creating security groups](/sdk/guides/setup-a-metagraph/security-groups).

- Aiming to access your instances, we're choosing SSH. However, to `ssh` into your instances, we need a key pair
  -  [Generating key pair](/sdk/guides/setup-a-metagraph/key-pairs).

- To avoid repeating the configuration every time on each instance, we will configure an instance called `base-instance`. This one will be responsible for containing all the basic files/configurations to run all 4 layers: `global-l0`, `metagraph-l0`, `currency-l1`, and `data-l1`.
  -  [Creating base-instance](/sdk/guides/setup-a-metagraph/base-instance/generating-base-instance).

- After creating the `base-instance`, we need to configure this instance to contain all information/files required to run a Metagraph. 
  -  [Configuring base-instance](/sdk/guides/setup-a-metagraph/base-instance/configuring-base-instance).

- With our `base-instance` created and configured, we can generate one AMI (Amazon Machine Image). This AMI will be the base image used to create each one of our 3 required instances.
  -  [Generating AMI](/sdk/guides/setup-a-metagraph/base-instance/generating-AMI-from-instance).

- Finally, we need to configure each layer to run the Metagraph. The links below instruct how you can do this:
  - [Building Global L0](/sdk/guides/setup-a-metagraph/building-metagraph-instances/building-global-L0-instances).
   
  - [Building Metagraph L0](/sdk/guides/setup-a-metagraph/building-metagraph-instances/building-metagraph-L0-instances).

  - [Building Currency L1](/sdk/guides/setup-a-metagraph/building-metagraph-instances/building-currency-L1-instances).
  
  - [Building Data L1](/sdk/guides/setup-a-metagraph/building-metagraph-instances/building-data-L1-instances).

:::note
- As mentioned earlier, we will require 3 EC2 instances, each responsible for running four layers: `global-l0`, `metagraph-l0`, `currency-l1`, and `data-l1`.
- You can learn how to run instances from AMI **[here](/sdk/guides/setup-a-metagraph/base-instance/launching-instances-from-ami)**
:::


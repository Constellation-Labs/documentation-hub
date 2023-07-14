---
id: overview
title: Overview
---
import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

<intro-end />

This tutorial will guide you through the process of setting up a Metagraph on Amazon's EC2 platform.

:::important
Please note that all steps in this tutorial are performed on the EC2 page within the AWS console. Be sure to follow the steps in the exact order they are presented.
:::

- You will need at least 3 **`p12`** files. You can check  [here](/sdk/guides/working-with-p12-files) **how to generate p12 files**
- For the tests, ensure that the ID of all your **`p12`** files is on the Integration net seedlist otherwise your setup won't work. You can check the seedlist [here](https://constellationlabs-dag.s3.us-west-1.amazonaws.com/testnet-seedlist) or you can apply for a Integration net spot.

<DocsCards>
  <DocsCard header="Apply for Testnet Access" href="https://hgtp.typeform.com/to/SLneo4EE" icon="/icons/icon-placeholder.png">
    <p>Want to be one of the first metagraph projects on testnet? Applications are now being accepted.</p>
  </DocsCard>
</DocsCards>

## Guide
##

**1. [Creating security groups](/sdk/guides/setup-a-metagraph/security-groups)** 

**2. [Creating key pairs](/sdk/guides/setup-a-metagraph/key-pairs)**

**3. [Generating base instance](/sdk/guides/setup-a-metagraph/generating-base-instance)**

**4. [Configuring base image](/sdk/guides/setup-a-metagraph/configuring-base-instance)**

**5. [Generating AMI (Image) from instance](/sdk/guides/setup-a-metagraph/generating-AMI-from-instance)**

**6. [Building metagraph L0 instances](/sdk/guides/setup-a-metagraph/building-metagraph-intances/building-metagraph-L0-instances)**

**7. [Building metagraph L1 instances](/sdk/guides/setup-a-metagraph/building-metagraph-intances/building-metagraph-L1-instances)**

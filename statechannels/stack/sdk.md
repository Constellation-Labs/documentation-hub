---
title: SDK
slug: sdk
hide_table_of_contents: false
---

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

## SDK on Github

:::caution ⚠️ Not a stable release
The state channel SDK is not yet a stable release; please keep this in mind if you intend on building with it. Updates coming soon.
:::

<DocsCards>
  <DocsCard header="State Channel SDK" href="https://chrome.google.com/webstore/detail/stargazer-wallet/pgiaagfkgcbnmiiolekcfmljdagdhlcm?hl=en-US" icon="/icons/icon-placeholder.png">
    <p>State Channel SDK</p>
  </DocsCard>
</DocsCards>

## Overview

Constellation Network provides a state channel template in the form of an [SDK](https://github.com/Constellation-Labs/tessellation/tree/696177b7a3770ed305ec2504ac02dbd187033aa9/modules/sdk/src/main/scala/org/tessellation/sdk), and includes the following resources:

- **Consensus Logic:** Handles Proposals, Voting, and Validation
- **Health Check Logic:** Ensures nodes are operating as expected
- **Communication protocol:** P2P connection handling and Gossiping
- **Security Provider:** Digital Signature System using SHA512/ECDSA
- **Logging Configurator:** A generic façade for integrating logging frameworks
- **Serialization Framework:** Orchestrates binary serialization to create streams

The SDK abstracts away the complexity of having to understand the underlying system components and server configurations, allowing developers to focus on defining the data type schemas and validations steps that they want implemented into their state channel. 

## Project Dependencies

Project dependencies are typically contained within a build file, which combines all libraries, frameworks, and code that your application depends on. The [Tessellation Code Repository](https://github.com/Constellation-Labs/tessellation/) includes an SBT or Scala Build Tool file which is a build system that is common in the JVM ecosystem. 

For SBT users, HGTP is added by downloading the dependency jar to your development environment (computer/server). When HGTP has been added to your build file, the next step is to compile and make sure there are no conflicts. This will provide pre-packaged interfaces which can be repurposed to design a custom state channel by simply adopting the existing consensus logic defined for Constellation Network's native DAG L_1 state channel. Developers can make the necessary modifications in order to create a completely new state channel that fulfills their technical requirements while being entirely compatible with every other state channel connected into the HGTP.

<DocsCards>
  <DocsCard header="Scala Build Tool (SBT)" href="https://github.com/Constellation-Labs/tessellation/blob/ff1ef41b727730df5cb2f59edef1c017168e046d/build.sbt" icon="/icons/icon-placeholder.png">
    <p>Scala Build Tool (SBT)</p>
  </DocsCard>
  <DocsCard header="List of Dependencies" href="https://github.com/Constellation-Labs/tessellation/blob/ff1ef41b727730df5cb2f59edef1c017168e046d/build.sbt" icon="/icons/icon-placeholder.png">
    <p>List of Dependencies</p>
  </DocsCard>
</DocsCards>
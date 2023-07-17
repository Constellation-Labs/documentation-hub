---
title: Deploy to Testnet
sidebar_label: Deploy 
slug: /guides/deploy-testnet
hide_table_of_contents: false
---

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

<intro-end />

In the future, this guide will provide detailed information about how to prepare a metagraph project for production, how to deploy to Testnet, and migrate to mainnet. Testnet access is currently in closed beta, with a public beta opening soon. 

See the [Roadmap](/sdk/roadmap) for more detail.

<DocsCards>
  <DocsCard header="Apply for Testnet Access" href="https://hgtp.typeform.com/to/SLneo4EE" icon="/icons/icon-placeholder.png">
    <p>Want to be one of the first metagraph projects on testnet? Applications are now being accepted.</p>
  </DocsCard>
</DocsCards>

## Gather Info

When applying for testnet access, you will need to provide the following details: 
- Project Name
- Project Description
- Token Symbol (proposed)
- L0 Peer IDs (up to 3)

#### Finding Peer IDs
Your peer ID is the public key of your wallet which will be stored as a p12 file. If using a Euclid Development Environment project, you must update you configuration to use your own custom p12 files. Projects submitted with the default p12 files that come with the project will be rejected. 

Download the `cl-wallet.jar` executable. This is distributed as an asset with each [release of Tessellation](https://github.com/Constellation-Labs/tessellation/releases). `cl-wallet.jar` can also be found in a Euclid Development Environment project under `infra/docker/shared/jars/cl-wallet.jar`. 

Editing the details of the following variables and export to your environment. 
```bash
export CL_KEYSTORE="key-0.p12"
export CL_KEYALIAS="alias"
export CL_PASSWORD="password"
```

Then you can run the following to get your peer ID:
```
java -jar cl-wallet.jar show-id
```
---
title: API Reference - Overview
sidebar_label: Overview
sidebar_position: 0
slug: ./
hide_table_of_contents: true
---

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

<head>
  <meta
    name="description"
    content="Lorem ipsum"
  />
  <style>{`
    :root {
      --doc-item-container-width: 60rem;
    }
  `}</style>
</head>

<intro-end />

Next pages will describe the different classes and interfaces found while using the Stargazer Wallet API in the browser.

<DocsCards>
  <DocsCard header="Wallet Provider API" href="walletProviderAPI" img="/icons/img02.png">
    <p>This object will be the starting point for any dapp that wants to interact with the stargazer wallet. It will provide access to different chain providers.</p>
  </DocsCard>

  <DocsCard header="Chain Provider API" href="chainProviderAPI" img="/icons/img03.png">
    <p>This object represents a connection to a specific chain (constellation | ethereum), you can then interact with the chain using different methods.</p>
  </DocsCard>

  <DocsCard header="Constellation RPC API" href="constellationRPCAPI" img="/icons/img04.png">
    <p>This is the interface used to interact with different aspects of the constellation chain, lists the available methods you can request.</p>
  </DocsCard>

  <DocsCard header="Ethereum RPC API" href="ethereumRPCAPI" img="/icons/img04.png">
    <p>This is the interface used to interact with different aspects of the ethereum chain, lists the available methods you can request.</p>
  </DocsCard>

</DocsCards>

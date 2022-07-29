---
title: Constellation Docs
sidebar_label: Overview
slug: /
image: /img/meta/open-graph.png
hide_table_of_contents: true
---

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

<head>
  <title>Welcome to Constellation</title>
  <meta
    name="description"
    content="Lorem ipsum"
  />
  <style>{`
    :root {
      --doc-item-container-width: 60rem;
    }
    h1 { display:none; }
  `}
  </style>
</head>

![Constellation Docs](/logos/header.png)

<DocsCards>
  <DocsCard header="Core Concepts" href="/core-concepts" img="/icons/img02.png">
    <p>Learn how the HyperGraph functions and gain understanding of the fundamental building blocks of the network.</p>
  </DocsCard>

  <DocsCard header="Build a State Channel" href="/statechannels" img="/icons/img03.png">
    <p>Leverage the power of the HyperGraph to build custom applications with your business logic.</p>
  </DocsCard>

<DocsCard header="Run a Validator Node" href="/nodes" img="/icons/img04.png">
  <p>Build, Configure, and Deploy a Validator Node on the HyperGraph.</p>
</DocsCard>

<DocsCard header="Integrate Stargazer Wallet" href="/stargazer" img="/icons/img02.png">
  <p>Connect Stargazer Wallet to your Web3 app to access Constellation and Ethereum chains.</p>
</DocsCard>

<DocsCard header="Apps and Integrations" href="/apps" img="/icons/img02.png">
  <p>Integrate your app, wallet, or exchange with the HyperGraph.</p>
</DocsCard>

</DocsCards>

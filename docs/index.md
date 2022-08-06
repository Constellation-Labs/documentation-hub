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
    h1 { display: none; }
    p img { margin: 50px auto 50px auto; }
    .theme-edit-this-page { display: none; }
  `}
  </style>
</head>

![Constellation Docs](/logos/header.svg)

<DocsCards>
  <DocsCard header="Core Concepts" href="/core-concepts" img="/img/home/core-concepts.png">
    <p>Learn how the HyperGraph functions and gain understanding of the fundamental building blocks of the network.</p>
  </DocsCard>

  <DocsCard header="Build a State Channel" href="/statechannels" img="/img/home/state-channel.png">
    <p>Leverage the power of the HyperGraph to build custom applications with your business logic.</p>
  </DocsCard>

<DocsCard header="Run a Validator Node" href="/nodes" img="/img/home/nodes.png">
  <p>Build, Configure, and Deploy a Validator Node on the HyperGraph.</p>
</DocsCard>

<DocsCard header="Integrate Stargazer Wallet" href="/stargazer" img="/img/home/stargazer.png">
  <p>Connect Stargazer Wallet to your Web3 app to access Constellation and Ethereum chains.</p>
</DocsCard>

<DocsCard header="Apps and Integrations" href="/apps" img="/img/home/apps.png">
  <p>Integrate your app, wallet, or exchange with the HyperGraph.</p>
</DocsCard>

<DocsCard header="Community" href="/community" img="/img/home/community.png">
  <p>Join the best community in crypto across the globe and connect with fellow Web3 devs.</p>
</DocsCard>

</DocsCards>

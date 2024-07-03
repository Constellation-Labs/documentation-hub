---
title: Constellation Docs
sidebar_label: Overview
slug: /
image: /img/meta/open-graph.png
hide_table_of_contents: true
---

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';
import useBaseUrl from '@docusaurus/useBaseUrl';
import ThemedImage from '@theme/ThemedImage';

<head>
  <title>Constellation Docs</title>
  <style>{`
    :root {
      --doc-item-container-width: 60rem;
    }
    h1 { display: none; }
    .docsHeader { text-align: center; }
    .docsHeader img { margin: 26px 0 36px 0; }
    .theme-edit-this-page { display: none; }
  `}
  </style>
</head>

<div class="docsHeader">
  <ThemedImage
    alt="Constellation Docs"
    sources={{
      light: useBaseUrl('/logos/header.svg'),
      dark: useBaseUrl('/logos/header-dark.svg'),
    }}
  />
</div>

## Core Concepts
<DocsCards>
  <DocsCard header="Constellation Primer" href="/learn" img="/img/home/core-concepts.jpg">
    <p>Your Constellation crib sheet for high-level understanding of the Hypergraph network and its core components.</p>
  </DocsCard>
  <DocsCard header="Why Constellation?" href="/learn/basic-concepts/why-constellation" img="/img/home/community.jpg">
    <p>Learn about the benefits of building on Constellation Network.</p>
  </DocsCard>
  <DocsCard header="Explore Our Ecosystem" href="/learn/tools-resources/constellation-ecosystem" img="/img/home/community.jpg">
    <p>Discover products and services in Constellation's growing ecosystem.</p>
  </DocsCard>
</DocsCards>

## Developer Guides
<DocsCards>
  <DocsCard header="Metagraphs" href="/metagraphs" img="/img/home/state-channel.jpg">
    <p>Learn about the core principles of metagraphs and their role within the Hypergraph network.</p>
  </DocsCard>
  <DocsCard header="Euclid SDK" href="/sdk" img="/img/home/community.jpg">
    <p>Build with Euclid, a powerful toolkit for metagraph development.</p>
  </DocsCard>
  <DocsCard header="Network APIs" href="/hypergraph/architecture" img="/img/home/state-channel.jpg">
    <p>Integrate your app or exchange with the Hypergraph Network.</p>
  </DocsCard>
</DocsCards>

## Developer Tools
<DocsCards>
  <DocsCard header="Integrate Stargazer Wallet" href="/stargazer" img="/img/home/stargazer.jpg">
    <p>Connect Stargazer Wallet to your Web3 app to access Constellation and Ethereum chains.</p>
  </DocsCard>
  <DocsCard header="Run a Validator Node" href="/validate" img="/img/home/community.jpg">
    <p>Build, configure, and deploy a validator node on the Hypergraph.</p>
  </DocsCard>
</DocsCards>
---
title: Developer Docs
slug: /build
hide_table_of_contents: true
---

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

<head>
  <style>{`
    :root {
      --doc-item-container-width: 60rem;
    }
    .theme-edit-this-page { display: none; }
  `}</style>
</head>

<intro-end />

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
  <DocsCard header="Integrate Stargazer Wallet" href="/stargazer" img="/img/home/stargazer.jpg">
    <p>Connect Stargazer Wallet to your Web3 app to access Constellation and Ethereum chains.</p>
  </DocsCard>
  <DocsCard header="Run a Validator Node" href="/validate" img="/img/home/community.jpg">
    <p>Build, configure, and deploy a validator node on the hypergraph.</p>
  </DocsCard>
</DocsCards>


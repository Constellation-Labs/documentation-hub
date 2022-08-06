---
title: Developer Docs
hide_table_of_contents: true
---

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

<head>
  <title>Developer Docs</title>
  <meta
    name="description"
    content="Lorem ipsum"
  />
  <style>{`
    :root {
      --doc-item-container-width: 60rem;
    }
    .theme-edit-this-page { display: none; }
  `}</style>
</head>

<intro-end />

<DocsCards>
  <DocsCard header="Build a State Channel" href="/statechannels" img="/img/home/state-channel.png">
    <p>Leverage the power of the HyperGraph to build custom applications with your business logic.</p>
  </DocsCard>

  <DocsCard header="Apps and Integrations" href="/apps" img="/img/home/apps.png">
    <p>Integrate your app, wallet, or exchange with the HyperGraph.</p>
  </DocsCard>

  <DocsCard header="Integrate Stargazer Wallet" href="/stargazer" img="/img/home/stargazer.png">
    <p>Connect Stargazer Wallet to your Web3 app to access Constellation and Ethereum chains.</p>
  </DocsCard>
</DocsCards>

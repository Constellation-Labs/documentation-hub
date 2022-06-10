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
  `}</style>
</head>

<intro-end />

<DocsCards>
  <DocsCard header="Build a State Channel" href="/statechannels" img="/icons/img03.png">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
  </DocsCard>

  <DocsCard header="Build a Dapp" href="/dapp" img="/icons/img03.png">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
  </DocsCard>

  <DocsCard header="Integrate Stargazer Wallet" href="/stargazer" img="/icons/img03.png">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
  </DocsCard>
</DocsCards>

---
title: Dag4.js Example Apps
sidebar_label: Example Apps
slug: /dag4-examples
hide_table_of_contents: false
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
   .Card-image-wrap img {
      max-height: 100%;
      width: auto;    
    }
    .Card-with-image:first-child .Card-image-wrap { height: 223px; display: flex; justify-content: center }
  `}
  </style>
</head>

See dag4.js used in production open source codebases. 

Want to see your open source project featured here? [Submit your project for consideration](https://t.me/constellationcommunity).

<DocsCards>
  <DocsCard header="Stargazer Wallet" href="https://github.com/StardustCollective/stargazer-wallet-ext" img="/logos/stargazer-logo.png">
    <p>Stargazer Wallet is a cross-chain wallet supporting Constellation Network and Ethereum ecosystems. It is available as a Chrome extension and as a mobile app for iOS and Android.</p>
  </DocsCard>
  <DocsCard header="Telegram Tip Bot" href="https://github.com/StardustCollective/telegram-bot-tipjar" img="/icons/img02.png">
    <p>The Telegram Tip Bot is a small cloud application integrated with Telegram that allows users to send DAG to each other with TG commands. Because transactions on the Hypergraph are free, all tip transactions are able to be processed on-chain.</p>
  </DocsCard>
</DocsCards>
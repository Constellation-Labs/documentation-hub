---
title: Introduction to Stargazer Wallet
sidebar_label: Introduction
slug: /
hide_table_of_contents: false
---

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

<head>
  <meta
    name="description"
    content="Stargazer is a non-custodial multichain wallet with support for Constellation and Ethereum networks. The following documentation will guide you through integrating Stargazer Wallet into a Web3 site or app."
  />
</head>

<intro-end />

Stargazer is a non-custodial multichain wallet with support for Constellation and Ethereum networks. The following documentation will guide you through integrating Stargazer Wallet into a Web3 site or app.

### Available Environments

Stargazer is currently available in the following platforms:

- [Stargazer Extension (Chrome / Brave).](https://chrome.google.com/webstore/detail/stargazer-wallet/pgiaagfkgcbnmiiolekcfmljdagdhlcm)
- [Stargazer App (iOS).](https://apps.apple.com/us/app/stargazer-wallet/id1612326452)
- [Stargazer App (Android).](https://play.google.com/store/apps/details?id=com.stargazer)

You can interact with the [Stargazer Extension](https://chrome.google.com/webstore/detail/stargazer-wallet/pgiaagfkgcbnmiiolekcfmljdagdhlcm) via [injected javascript API](./providerActivation.md#detect-stargazer). Mobile interactions are not supported at the moment.

### Quick Start Demos
A pair of interactive demo sites with implementation code are available to get started quickly with common functionality such as connecting the wallet, interacting with DAG + ETH chains, sending transactions, signing messages, and more. 

The demo sites use the two most common integration strategies for Web3 sites: Standalone or Web3 React integration.  

<DocsCards>
  <DocsCard header="Standalone" href="https://demos.stargazerwallet.io" img="/stargazer/demo-standalone.png">
    <p>Standalone integration examples using the global window.stargazer object directly.</p>
  </DocsCard>
  <DocsCard header="Web3 React" href="https://demos-react.stargazerwallet.io" img="/stargazer/demo-standalone.png">
    <p>Integration examples using Web3React and the Stargazer Wallet Connector package.</p>
  </DocsCard>
</DocsCards>
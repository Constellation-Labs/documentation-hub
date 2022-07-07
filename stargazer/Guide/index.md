---
title: Guide - Overview
sidebar_label: Overview
slug: ./
hide_table_of_contents: true
---

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

<head>
  <title>Guide - Overview</title>
  <meta
    name="description"
    content="This guide will walk you throught various features your dapp may use, will provide a general explanation, a code example, and in some cases a demo for you to test."
  />
  <style>{`
    :root {
      --doc-item-container-width: 60rem;
    }
  `}</style>
</head>

<intro-end />

This guide will walk you throught various features your dapp may use, will provide a general explanation, a code example, and in some cases a demo for you to test.

<DocsCards>
  <DocsCard header="Provider Activation" href="providerActivation" img="/icons/img02.png">
    <p>Interaction with any of the networks is available using a chain provider, this guide will show you how to get one and an overview of the activation process.</p>
  </DocsCard>

  <DocsCard header="Sending RPC Requests" href="sendingRPCRequests" img="/icons/img03.png">
    <p>Communication with the network is done via RPC requests, this guide will show you how to send a RPC request and how to interpret responses.</p>
  </DocsCard>

  <DocsCard header="Signing Data" href="signingData" img="/icons/img04.png">
    <p>Signing arbitrary data enables you to verify an user's possession of an account, this guide will walk you through the signing process and verification.</p>
  </DocsCard>

  <DocsCard header="Using External Libraries" href="usingExternalLibraries" img="/icons/img04.png">
    <p>Sending raw RPC requests can be error-prone and sometimes overwhelming, this guide will list some common external libraries for the ethereum ecosystem which are compatible with the stargazer ChainProvider.</p>
  </DocsCard>
</DocsCards>

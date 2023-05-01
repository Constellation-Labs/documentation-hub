---
title: Getting Started
hide_table_of_contents: true
---

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

<head>
  <title>Constellation nodectl utility</title>
  <meta
    name="description"
    content="Constellation nodectl utility"
  />
  <style>{`
    :root {
      --doc-item-container-width: 60rem;
    }
  `}
  </style>
</head>

## What is nodectl

**nodectl** pronouced node "c" "t" "l", node-kuttle, or node control.

The purpose of this utility is to **make things easier** on you.  

It obviates all of the technical aspects of running a Validator Node, so that anyone can do it!  It comes packed with features designed to navigate the complexities of Constellation Network's validation Node on the **Hypergraph** and/or **Metagraphs**. 

The succeeding documentation will describe the features behind **nodectl** and help to provide an easy to use guide for a utility that was designed with ease in mind.

### Installing nodectl

<DocsCards>
  <DocsCard header="New Node" href="/metagraphs" img="/img/home/state-channel.jpg">
    <p>Install brand new Node.</p>
  </DocsCard>

  <DocsCard header="Migrate Node" href="/sdk" img="/img/home/community.jpg">
    <p>Migrate existing Node to new container, instance, or hardware.</p>
  </DocsCard>
</DocsCards>

### Brand New Node

This is when you are created a **new** Node from scratch that will include a new Node wallet (p12 file).

### Rebuild/Migrate Node

This is when you are replacing an existing Node by transferring it to a new container, VPS or hardware.  The existing Node is in production; however, you would like to use the ephemeral nature of Constellation's Validator Node to start fresh on a new build of its underlining Linux distribution.  This will require transferring your Node's wallet (p12 file) from the existing (old) Node to your new Node.
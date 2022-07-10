---
title: Providers
hide_table_of_contents: false
---

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

<head>
  <title>Providers</title>
  <meta
    name="description"
    content="Lorem ipsum"
  />
  <style>{`
    :root {
      --doc-item-container-width: 60rem;
    }
  `}
  </style>
</head>

In order to run our Constellation Node, we will need to find a location for our node to live and work. The three most common ways to accomplish this are through a cloud provider, a hosting provider, or utilizing Bare Metal.

<DocsCards>
  <DocsCard header="Cloud Provider" href="/" icon="/icons/icon-placeholder.png" hoverIcon="/icons/icon-placeholder.png">
    <p>Run on a virtual machine in the cloud called an instance.</p>
  </DocsCard>

  <DocsCard header="Hosting Provider" href="/" icon="/icons/icon-placeholder.png" hoverIcon="/icons/icon-placeholder.png">
    <p>Rent or lease a server in a Colo (co-location) on dedicated hardware.</p>
  </DocsCard>

  <DocsCard header="Bare Metal" href="/" icon="/icons/icon-placeholder.png" hoverIcon="/icons/icon-placeholder.png">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.</p>
  </DocsCard>
</DocsCards>

## Cloud Providers

The next steps of these tutorials concentrate on Cloud Providers only. You can skip to the Constellation TestNet configuration section if you are advanced and already have an instance in place. Configuring your Node is completely independent of where it lives (cloud, hosted, or bare metal).

## Digital Ocean

Creating your account on Digital Ocean is a simple process similar to all other SaaS model services. At the current time, we will leave this process up to you.
In order to run our Constellation Node, you will need to make your first financial and sweat-equity investments.

### Create SSH Keys

We need a way to access our Node. Popular opinion strongly suggests it is a bad idea to use the password authentication method. So, we will setup access via an SSH Key.

:::caution
It is highly recommended that you do not use existing SSH keys that you may have already created for other servers you may administer.
:::

The SSH keys should be unique keys for this future Node and this Node alone. Also, when you are setting up your passphrase, you should use a complex passphrase.

You are dealing with cryptocurrency. This puts the onerous of security on you. It is a good idea to protect your investment(s).

If you are a visual learner, you can watch the YouTube series. You may also follow step by step instructions using the tutorial below for Apple/Linux or Windows. It is highly recommended to watch the entire series0.

<iframe width="100%" height="380" src="https://www.youtube.com/embed/LMxmJ7h0RQw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
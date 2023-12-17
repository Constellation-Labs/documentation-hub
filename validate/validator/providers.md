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
    content="Introduction to the various possible cloud providers"
  />
</head>

### Introduction 

In order to run a Constellation Network validator node, you'll need to find a suitable place for it to live and work. The three most common ways to accomplish this are through a cloud provider, hosting provider, or dedicated bare metal server.

## Virtual vs Dedicated

A VPS (Virtual Private Server) is software that runs a virtualized server located on a physical machine and shares resources (tenancies) with other instances, making it a more economical choice when starting out. 

A collection of these VPS instances make up what is referred to as the "cloud." 

A dedicated bare metal server, on the other hand, is an physical computer that is used by only one consumer or tenant.  Cloud providers also offer more robust services such as dedicated servers.

## Cloud Providers {#cloud-providers}

Our setup guides will walk you through deploying a VPS through the three most common cloud providers below.

<DocsCards>
  <DocsCard header="Amazon Web Services" href="/validate/setup-guides/aws/account" icon="/icons/icon_aws.png">
    <p>Set up your EC2 VPS on AWS.</p>
  </DocsCard>

  <DocsCard header="Digital Ocean" href="/validate/setup-guides/do/account" icon="/icons/icon_digitalocean.png">
    <p>Set up your VPS droplet on Digital Ocean.</p>
  </DocsCard>

  <DocsCard header="Google Cloud Platform" href="/validate/setup-guides/gcp/account" icon="/icons/icon-placeholder.png">
    <p>Set up your VPS on GCP.</p>
  </DocsCard>
</DocsCards>

## Hosting Providers {#hosting-providers}
A hosting provider is similar to a cloud provider because they are both web-based services, however, a cloud provider offers you more control over building, deploying and self-managing your node instance, while a hosting provider offers limited space and power.

Conversely, a hosting provider can offer you a full dedicated physical machine to administer.

Hosting providers generally offer more simple methodologies to running e-commerce or other types of web sites.  They most probably will not support running a Validator Node outside of providing a dedicated physical machine for you to manage remotely.

## Bare Metal {#bare-metal}
A bare metal server is a physical computer designed to run dedicated services by a single tenant. You can run this dedicated server in its own data center, colocation center, an office, or even out of your own home. Because you have full control over everything from hardware to software, this option should be reserved for advanced operators requiring even more customization and resources.
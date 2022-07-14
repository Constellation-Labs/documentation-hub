---
title: Providers
hide_table_of_contents: false
---

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

<head>
  <title>Cloud Providers</title>
  <meta
    name="description"
    content="Introduction to the various possible cloud providers"
  />
  <style>{`
    :root {
      --doc-item-container-width: 60rem;
    }
  `}
  </style>
</head>

In order to run our **Constellation Validator Node**, we will need to find a location for our Node to live and work. The three most common ways to accomplish this are through a cloud provider, a hosting provider, or utilizing Bare Metal.

<DocsCards>
  <DocsCard header="Cloud Provider" href="#cloud_providers" icon="/icons/icon-placeholder.png" hoverIcon="/icons/icon-placeholder.png">
    <p>Run on a virtual machine in the cloud called an instance.</p>
  </DocsCard>

  <DocsCard header="Hosting Provider" href="#hosting-providers" icon="/icons/icon-placeholder.png" hoverIcon="/icons/icon-placeholder.png">
    <p>Rent or lease a server in a Colo (co-location) on dedicated hardware.</p>
  </DocsCard>

  <DocsCard header="Bare Metal" href="#bare-metal" icon="/icons/icon-placeholder.png" hoverIcon="/icons/icon-placeholder.png">
    <p>Build and maintain your own hardware on-premise of your specific location or remotely at a service provider or other.</p>
  </DocsCard>
</DocsCards>

## Cloud Providers {#cloud-providers}

Constellation Network's documentation will concentrate on the erecting a virtual private server `VPS` (to turn into a Node) through various Cloud Providers.  

:::note

Due to the highly competitive Cloud Service Provider marketplace, we will concentrate on only a few Cloud Service Providers in our documentation.

:::

Cloud Providers mentioned in the documentation:
  - Amazon Web Services
  - Digital Ocean
  - Google Cloud Platform

:::info

You are **not** obligated in any way to use the providers mentioned.  You can pick any methodology to build your future Node and utilize any of the cloud providers above to translate to your provider of choice.

:::

### List of Providers 
There are many others *besides* what is listed below

- Amazon Web Service (AWS)
- Digital Ocean
- Google Cloud Platform
- Vultr
- Linode
- IBM Cloud Services
- Adobe Creative Cloud
- Kamatera
- VMware
- Rackspace
- Red Hat
- Salesforce
- Oracle Cloud
- SAP
- Verizon Cloud
- Navisite
- Dropbox

## Hosting Providers {#hosting-providers}
A hosting provider is similar to the cloud provider because they are both Internet based services; however, with a cloud provider you will be given access to build and deploy a server to handle on your own.  With a hosting provider, they offer more services such as maintaining, patching, updating, etc. your instance in the cloud.

## Bare Metal {#bare-metal}
In this situation, you are intending on building your Node on a physical dedicated system.  This can either be done through a Cloud Provider, Hosting Provider, out of your Office, or out of your home.  You are in full control of everything from the metal case, to the hardware pieces, to the operating system.  **Bare Metal** should be reserved for serious heavy highly technical operations that need such resources, fully in their control.
---
title: VPS Setup - Getting Started
sidebar_label: Getting Started
sidebar_position: 1
hide_table_of_contents: False
slug: ./
---

<head>
  <meta
    name="description"
    content="The ChainProvider handles access to the chain RPC methods and underlying events. It complies with the EIP-1193 standard. Besides methods from the standard it adds a couple of utility methods related to provider activation."
  />
</head>

<intro-end />

## Getting Started

In the world of `decentralization` and `edge computing`, it’s important to understand that building a server to run your node involves significant decision-making.

You may run a Constellation Node on different mediums. 

Some examples include:
- VPS
  - From which provider?
- Bare Metal System
  - From what data center or office?
  - From our home?

## Basics 

### VPS

Virtual Private Servers (VPS) are instances in provided by a Cloud provider.  The Cloud provider takes care of all the "hard" work of maintaining, housing, securing, and offering many other services.  This allows you to simply request a server for use and remotely access this server.  The VPS will eventually become your Node. 

The advantage of a Cloud provider's VPS is that you do not have to worry about all the requirements of a [bare metal](#bare-metal) server.

### Bare Metal

A bare metal system is a physical server located at a site where you have direct access. With a bare metal system, you are responsible for maintaining the following:

- Power
- Backups
- Internet Connection
- Software
  - installation
  - updates
  - patches
- Hardware
  - upgrades
  - maintenance
- External networking
  - port forwarding
  - firewalls

:::success :computer: 
Utilizing a bare metal system requires additional soft skills and comes with extra responsibilities. However, depending on your needs, this setup can truly place you in the realm of decentralization and edge computing.
:::

For bare metal setups, we leave the configuration up to you; however, your system must meet at least the basic [specifications](/validate/validator/specs).

## Picking a Provider

In most use cases, purchasing a VPS from a cloud provider is the quickest, simplest, and most efficient method to build your node.

If you plan to use a [VPS](#vps), please choose a provider of your choice. If your provider is listed in this Setup Guide section, you can click on it and begin the VPS building process.

### Provider Guides 
- [AWS](/validate/setup-guides/aws/account) (Amazon Web Services)
- [DO](/validate/setup-guides/do/account) (Digital Ocean)
<!-- - [GCP](/validate/setup-guides/gcp/account) (Google Cloud Platform) -->
- Hetzner`*`

:::note Other Cloud Services
There are **many** other cloud provider services available; however, we will limit our setup guides to just three.

\* *Hetzner users can follow the DigitalOcean setup guide, as these two services are very similar.*
:::

### Provider Evolution

<p style={{fontWeight:500, fontSize:'1em'}}>We request your patience and understanding if the graphics in our guides do not align with any updated elements of the respective provider’s console(s). This is a common occurrence as these platforms evolve. However, the basic concepts should remain unchanged.</p> 
<p style={{fontWeight:500, fontSize:'1em'}}>Alternatively, you may use the provider specific official guides from their corresponding official documentation.</p>
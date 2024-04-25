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

It is important to understand that in the world of `Decentralization` and `Edge Computing`, the process of building a Server to run your Node on comes with a lot of decision making.

Do we want to run our Constellation Node on a:
- VPS
  - Which provider?
- Bare Metal System
  - From Office Data Center?
  - From our Home?

## Getting Started

If you are planning to use a [VPS](#vps) please pick a provider of choice.  If that provider is found under the **VPS Setup Guides** section (where you are now) you can click on the drop down for your provider and begin the VPS building process. 

There are **many** cloud providers out there from Amazon's AWS to Google's GCP (Google Cloud Provider).

As these providers enhance their user experience, the GUI (Graphical User Interface) consoles and dashboards may change.  Therefore, in this setup guide we:
   - Limit the setup guides to three providers
      - AWS (Amazon Web Services)
      - DO (Digital Ocean)
      - GCP (Google Cloud Platform)
   - Request you patience and understanding if the graphics in our guides do not sync up with any updated elements of the respective provider's console(s).  This is a common occurrence, as they are matured by there providers.  *The basic concepts should not change.*

For [bare metal](#bare-metal), we leave this setup up to you.  

## Basics 

### VPS

Virtual Private Servers (VPS) are instances in the Cloud that allow you remotely access your Node.  The advantage of a Cloud provider's VPS is that you do not have to worry about all the requirements of a [bare metal](#bare-metal) server.

### Bare Metal

A bare metal system is physical server at a location to which you have direct access to.  The bare metal system comes with responsibility of maintaining.
- Power
- Backups
- Internet Connection
- Hardware
  - upgrades
  - maintenance
- External networking
  - port forwarding
  - firewalls

Utilizing a bare metal system comes with extra responsibilities; however, depending on your needs, this setup can truly put you in the realm of decentralization and edge computing.
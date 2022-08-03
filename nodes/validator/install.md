---
title: Installation Introduction
hide_table_of_contents: false
---

<head>
  <title>Installation Overview</title>
  <meta
    name="description"
    content="Brief intro into the documentation process for Validator Nodes"
  />
</head>

Through step-by-step written documentation from this guide's instructions, instructional videos for those that are more visual learners, to guidance through our Discord channel, we attempt to cover all the bases.

## Before you begin

:::note Seed List
  **IMPORTANT**
  Before you begin building your **VPS** to house your **Node**, you need to inquire with the State Channel Administrators
  whether or not they have a **`seed list`** in place.
:::

A `seed list` is an access-list that will only allow specific `NodeId`s to join their particular State Channel.  

The `Node ID` is derived from the `p12` private key file that is used to authenticate against the State Channel.  It is accessed
at `least` twice during the start up your initialization with a State Channel.  
  <ul>
  <li>During the Tessellation process start up (unlock the p12 file)</li>
  <li>During the Join procedure call via the API</li>
  </ul>

During the process start-up, if a `seed list` is in place, you will fail the authentication process.

:::danger MAINNET and TESTNET
MainNet 2.0 and TestNet 2.0 both currently have a `seed list` in place.
:::

## Steps in the Process
:::tip Initialization
  - Decide on how you will run your Validator Node
    - Service Provider
    - Bare Metal
    - Hosted
:::

:::tip Setup
  - Setup your server
  - Turn your server into a Node
:::

:::tip Your Node
  - Configure your Node
    - Setup Services
    - Setup Configuration
    - Define Security
    - Join TestNet 2.0
    - Join MainNet 2.0
    - Join a State Channel
:::
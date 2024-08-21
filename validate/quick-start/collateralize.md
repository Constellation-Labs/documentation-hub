---
title: Collateralize Quick Start
hide_table_of_contents: false
---

# First Time Connection Quick Start Guide

This guide is specifically for connecting a Validator Node to the network for the first time.

## Check List

- Built our Node via one of the quick start guides or step by step guides. ✅
  - [Quick Start Guides](/validate/quick-start/index).
  - [Step by Step Guides](/validate/automated/install/nodectlInstallTypes).
- Have your Node accessible via [remote SSH](/validate/validator/ssh-keys).
- Submitted your Node's **nodeid** (public key) to Constellation Network and confirmed it was placed on the authentication seed list. ✅
- If your Hypergraph or metagraph requires collateral, your Node's wallet is properly collateralized. ✅
- Your firewall ports are properly opened. ✅
  - Open inbound TCP ports: 9000, 9001, 9010, 9011, and your ssh port (normally 22).
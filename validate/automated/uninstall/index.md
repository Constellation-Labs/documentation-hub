---
title: New Install - Uninstall
hide_table_of_contents: false
---
<intro-end />

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';
import MacWindow from '@site/src/components/global/MacWindow';

<head>
  <title>Constellation Network Automation with nodectl</title>
  <meta
    name="description"
    content="nodectl uninstall a nodectl installation"
  />
</head>

## Introduction

This guide will help you through the process of uninstalling your Constellation Network node completely by removing all data associated with running a Constellation Network node.

## Simplest Method

If you are running on a cloud provider, simply destroying the VPS running the Constellation Network node will suffice to remove all traces of data and eliminate the need to perform an uninstall. 

## Alternatively

If we have a bare metal server that may be performing other tasks, etc. You can attempt to perform an uninstall of our node.  

An Uninstall will not remove the dependencies that were installed during the initial installation.  This is done to avoid breaking other programs or processes not associated with a Constellation Network node, that may be using those dependencies.

Exclusions:
- Java Installation
- Haveged Installation
- External Utility Installs
- Secure Shell Keys
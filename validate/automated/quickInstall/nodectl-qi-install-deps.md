---
title: Quick Install - Dependencies 
sidebar_label: New Quick Install - Dependencies
hide_table_of_contents: False
---
<intro-end />

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';
import MacWindow from '@site/src/components/global/MacWindow';
import Collapsible from '@components/global/Collapsible/Collapsible.jsx';

<head>
  <title>Constellation Network Automation with nodectl</title>
  <meta
    name="description"
    content="nodectl new quick installation"
  />
</head>

We will reach the point in the installation where nodectl is ready to download the dependency packages needed to run our Node's Tessellation protocol; as well as, other utilities that may or may not already exist on your system.

nodectl will do this for us automatically, so no action is required.

<MacWindow>
nodectl installing [ mainnet ]<br />
Dependencies can take a few minutes.<br />                 
Installing dependency [haveged] ............... complete<br />
openjdk-11-jdk may take a few minutes to install<br /> 
Installing dependency [openjdk-11-jdk] ........ complete<br />
Installing dependency [vim] ................... complete <br /> 
Installing dependency [curl] .................. complete<br />
Installing dependency [wget] .................. complete<br />
Installing dependency [tree] .................. installing ..<br /> 
</MacWindow>

### Description Chart

Description of the files being downloaded here.  

*ref: [google](https://www.google.com)*

| Dependency Name | Description |
| :---------------: | :--------- |
| haveged | Utility that generates an unpredictable stream of random numbers harvested from the indirect effects of hardware events on hidden processor state (caches, branch predictors, memory translation tables, etc) using the HAVEGE (HArdware Volatile Entropy Gathering and Expansion) algorithm. |
| openjdk-11-jdk | Java 11 default development kit |
| vim | Command line interface text editor for Unix (Linux). |
| curl | "Client url": A command line tool that enables data exchange between a device and a server through a terminal. |
| wget | "World Wide Web Get": An open-source utility that allows you to retrieve content from web servers via HTTP, HTTPS, and FTP protocols. . |
| tree | The tree command in Linux is used to display the directory structure in a tree-like format. |

Next nodectl will install the `Tessellation` binary packages.
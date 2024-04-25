---
title: Quick Install - Preparation
sidebar_label: New Quick Install - Preparation 
hide_table_of_contents: False
---
<intro-end />

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';
import MacWindow from '@site/src/components/global/MacWindow';

<head>
  <title>MainNet 2.0 Automation with nodectl</title>
  <meta
    name="description"
    content="nodectl new quick installation"
  />
</head>

## Preparation Assumptions

Before we continue with the quick install, we should have:
- Our [VPS Setup](/validate/setup-guides/). 
- Logged into your Node as your default user (varies dependent on cloud provider)
  - [Access via Mac](/validate/resources/accessMac)
  - [Access via Windows](/validate/resources/accessWin) 
- Have and tested `sudo` access.
  - Test `sudo` access by issuing a simple command with `sudo`:

  ```
  sudo ls
  ```
  *This is a simple request for a directory listing as the super user.*

## For use with this install guide

Please be aware that the following items are fictitious and are only used as an example and should not be considered real values, during our walk through.

Throughout this guide, please be aware of these fictitious values:
- Our default login user is called: `Ubuntu`
- Our external IP address will be a fictitious `113.113.113.113`. 
- Our nodeid equal to all `1`s.
- Our nodectl version will be `v2.13.0`
- Our Tessellation version will be `v2.2.3`
- Our Environment is `mainnet`

:::danger BE AWARE
As Constellation Network's protocol and/or nodectl improves, the versions presented in the documentation may become out dated.  

The documentation will be updated as any CLI-GUI elements or results from those inputs change, otherwise the versions may not match your Node's presentation or outputs.

*In some cases, the versions and environment may coincide with real values; however, this may be different for your current upgrade depending on multiple factors.*
::: 
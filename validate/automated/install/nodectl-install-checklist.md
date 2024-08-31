---
title: New Install - Connection Check List
hide_table_of_contents: false
---
<intro-end />

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';
import MacWindow from '@site/src/components/global/MacWindow';

<head>
  <title>Constellation Network automation with nodectl</title>
  <meta
    name="description"
    content="nodectl installation of new Node"
  />
</head>

## Check List
 - Have the external facing [IP address](#ip-address) of your VPS handy
 - Have your [SSH key](#ssh-keys) passphrase handy
 - Remember the architecture you chose to build your VPS on top of:
   - x86_64 (*most likely*)
   - arm64

### IP Address

Upon the initiation of the VPS creation (for most cloud provisioning) the VPS should have been assigned an IP address linking it to the external Internet for access. 

In a single Node setup environment, this IP address is crucial for accessing your VPS (via  the [SSH keys](#ssh-keys)) and participating on the Constellation Network metagraphs.

### SSH Keys

The [SSH keys](/validate/validator/ssh-keys) were created in previous steps of this documentation.  This key pair is used to authenticate to your VPS, by accessing the [IP address](#ip-address) in order to gain entry to the future Node.

### Arm64 Notice

:::danger Important
Until further notice, nodectl development will continue on **x86_64** Debian distributions.  This will be done until the **arm64** distributions packages managers properly hold all the necessary features required to run Constellation Network's Tessellation packages.
:::

If utilizing the **arm64** distribution is of importance to your specific needs, it can still be accomplished. 

You are free to build the packages required for Tessellation to run manually.  Please see the manual setup process to make sure these requirements are installed.  

Future updates to nodectl will return to offering the arm64 support; as soon as, the packaging issue is resolved.  
---
title: upgrading - Prepare Setup
hide_table_of_contents: false
---
<intro-end />

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';
import MacWindow from '@site/src/components/global/MacWindow';
import Collapsible from '@components/global/Collapsible/Collapsible.jsx';

<head>
  <title>MainNet 2.0 Automation with nodectl</title>
  <meta
    name="description"
    content="MainNet 2.0 Automation - Upgrade Tessellation with nodectl"
  />
</head>

## Information Gathering

### Environment Confirmation

We will see what environment is being upgraded.

<MacWindow>
  Using environment ............................. mainnet
</MacWindow>

### Backup the current configuration

A backup of our configuration will commence and output:
- Date
- Location of backup
- File name of the backup

<MacWindow>
  Backing up configuration ......................complete<br />
  Backup Date: 2024-04-15-18:53:48Z<br />
  Backup Location: /var/tessellation/backups/<br />
  Backup File Name: backup_cn-config_2024-04-15-18:53:48Z<br />
</MacWindow>

### Verify Node Upgrade

The the 👇 example, our external IP address is a fictitious `113.113.113.113` and a fictitious nodeid equal to all `1`s.

- nodectl will update verify permissions
- Obtain our external IP address that allows us access to the Internet to download upgrades.

<MacWindow>
---- * VERIFY NODE UPGRADE * -----<br />
Verify upgrade paths .......................... complete<br />
</MacWindow>

<Collapsible title="possible warning">
You may encounter a warning, if it is identified that you are using a pre-release or non-current version of nodectl.

<MacWindow>
Check permissions & versioning ................ warning<br />
This is not a current stable version of nodectl.<br />
Recommended to:<br />
&nbsp;&nbsp;&nbsp;&nbsp;- Cancel this upgrade of Tessellation.<br />
&nbsp;&nbsp;&nbsp;&nbsp;- Issue: sudo nodectl upgrade_nodectl<br />
&nbsp;&nbsp;&nbsp;&nbsp;- Restart this upgrade of Tessellation.<br />
WARNING  non-interactive mode was detected, developer mode, or extra parameters were supplied to this upgrade.<br />
It will continue at the Node Operator's own risk and decision.<br />
</MacWindow>         
As long as you are aware you are using a pre-release or known non-stable version of nodectl, you can safely continue.
</Collapsible>

### Determine p12 details

- nodectl will verify that our upgrade path is correct.
- Validate the p12 usage profiles for all profiles.
- Determine if nodectl is using global references.
- Obtain the nodeid from the p12 file.

<MacWindow>
  Verify upgrade paths .......................... complete<br /> 
  p12 validated [dag-l0] ........................ using global<br /> 
  p12 validated [dag-l1] ........................ using global<br />  
  Global p12 validated .......................... True<br /> 
  Obtaining Node ID from p12 [global] ........... 11111....11111<br />
  Node IP address ............................... 113.113.113.113<br /> 
</MacWindow>    

Next, we will handle versioning setup.
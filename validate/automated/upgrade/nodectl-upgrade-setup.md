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
  <title>Constellation Network Automation with nodectl</title>
  <meta
    name="description"
    content="Constellation Network Automation - Upgrade Tessellation with nodectl"
  />
</head>

### Fictitious Assumptions 
Please be aware that the following items are fictitious and are only used as an example and should not be considered real values.  

Throughout this guide, please be aware of these fictitious values:
- Our external IP address will be a fictitious `113.113.113.113`. 
- Our nodeid equal to all `1`s.
- Our nodectl version will be `v2.15.2`
- Our Tessellation version will be `v2.2.3`
- Our Environment is `mainnet`

:::danger BE AWARE
As Constellation Network's protocol and/or nodectl improves, the versions presented in the documentation may become out dated.  

The documentation will be updated as any CLI-GUI elements or results from those inputs change, otherwise the versions may not match your Node's presentation or outputs.

*In some cases, the versions and environment may coincide with real values; however, this may be different for your current upgrade depending on multiple factors.*
:::

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

It will start by verifying the upgrade path is valid.  If this is not valid, you will be met with a warning (*expand below for details*).

<MacWindow>
---- * VERIFY NODE UPGRADE * -----<br />
Verify upgrade paths .......................... complete<br />
</MacWindow>

<Collapsible title="possible upgrade path warning">
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
- Validate the p12 usage for all profiles.
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
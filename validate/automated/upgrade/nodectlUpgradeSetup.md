---
title: upgrading - Prepare Setup
hide_table_of_contents: false
---
<intro-end />

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';
import MacWindow from '@site/src/components/global/MacWindow';

<head>
  <title>MainNet 2.0 Automation with nodectl</title>
  <meta
    name="description"
    content="MainNet 2.0 Automation - Upgrade Tessellation with nodectl"
  />
</head>

## Information Gathering

### OS updates and identification

The the 👇 example, our external IP address is a fictitious `113.113.113.113`.

- nodectl will update verify permissions
- Obtain our external IP address that allows us access to the Internet to download upgrades.
- Perform a Debian distribution package list update.

<MacWindow>
---- * Handle OS System Upgrades * -----
<br />
Check permissions & versioning ................ complete<br />                               
Obtaining External IP ......................... 113.113.113.113<br />                          
Updating the Debian OS system ................. complete<br />                                 
</MacWindow>         

### Determine p12 details

- nodectl will verify that our upgrade path is correct.
- Validate the p12 usage profiles for all profiles.
- Determine if nodectl is using global references.
- Obtain the nodeid from the p12 file.

<MacWindow>
------- * Verify Node Upgrade * --------<br />
<br />
Verify upgrade paths .......................... complete<br />                               
p12 validated [dag-l0] ........................ using global<br />                            
p12 validated [dag-l1] ........................ using global<br />                           
Global p12 validated .......................... True<br />                                  
Obtaining Node ID from p12 [global] ........... 12345....7d23d<br />                        
<br />     
</MacWindow>

Next, we will handle versioning setup.
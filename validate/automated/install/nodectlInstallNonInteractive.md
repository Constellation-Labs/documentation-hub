---
title: New Install - Automated Installation 
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
    content="nodectl installation of new Node"
  />
</head>

nodectl will begin some automated installations of various dependency packages required to run your Node.  This is a non-interactive process, we can just watch and wait for the process steps to complete.

## System Requirements
nodectl will begin to install the necessary dependencies that will allow your future Node to run properly.  This will include several packages such as the Java development kit package.  

We can sit back and relax during these steps of the installation.  Some installations may take longer than others, so please be patient.

### Dependencies

Install the packages that allow us to use our Node (and nodectl).
- non-Constellation packages
- Constellation core protocol binaries

<MacWindow>
  ------- * Update Distribution * --------<br />
<br />
  Updating the Debian OS system ................. complete<br />             
  Removing old configuration files .............. complete<br />                  
<br />                                                                              
<br />
  ------- * SYSTEM REQUIREMENTS * --------<br />
<br />
  Installing dependency [haveged] ............... complete <br />                   
  Installing dependency [default-jdk] ........... complete<br /> 
  Installing dependency [vim] ................... complete<br />
  Installing dependency [curl] .................. complete<br />
  Installing dependency [wget] .................. complete<br />  
  Installing dependency [tree] .................. complete<br /> 
  backup files .................................. complete<br />                     
  Fetch Tessellation binary [cl-keytool.jar] .... complete<br />                     
  Fetch Tessellation binary [cl-wallet.jar] ..... complete<br />                    
  Fetch Tessellation binary [cl-node.jar] ....... complete<br />                     
  Fetch Tessellation binary [cl-dag-l1.jar] ..... complete<br />                     
  Fetching cluster seed file [mainnet->dag-l0] .. complete<br />                     
  Fetching cluster seed file [mainnet->dag-l1] .. disabled/skipped<br />             
  Installing Tessellation binaries .............. complete<br />                     
  Enabling OS swap .............................. completed<br />                    
  System Requirements ........................... complete<br /> 
  Press any key to continue<br />
</MacWindow>

The `dag-l1` or `intnet-l1` profile (*or layer1 profile name if not MainNet, IntegrationNet or TestNet*) will not require a seed list download, therefor you will see `disabled/skipped` when the file download attempt it `skipped` because it has been `disabled` in the configuration file.

Press any key to continue to the next step of the installation.

<MacWindow>
  Press any key to continue<br />
</MacWindow>

### Swap Setup

Continuing the system requirements, nodectl will create and setup your swap file.  This step sets up your Node to have an extra method to properly manage memory.  The swap will utilize disk usage when memory access is required but not available.  This is a common setup for Apple, Windows or Linux systems.

<MacWindow>
  Enabling OS swap [creating].................... running<br />
</MacWindow>

<MacWindow>
  Enabling OS swap [update fstab]................ running<br />
</MacWindow>

<MacWindow>
  Enabling OS swap [swappiness].................. complete<br />
</MacWindow>
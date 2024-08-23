---
title: New Install - Automated Installation 
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

nodectl will begin some automated installations of various dependency packages required to run your Node.  This is a non-interactive process, we can just watch and wait for the process steps to complete.

## System Requirements
nodectl will begin to install the necessary dependencies that will allow your future Node to run properly.  This will include several packages such as the Java development kit package.  

We can sit back and relax during these steps of the installation.  Some installations may take longer than others, so please be patient.

### Dependencies

Install the packages that allow us to use our Node (and nodectl).
- non-Constellation packages
- Constellation core protocol binaries

<MacWindow>
  ------- * SYSTEM REQUIREMENTS * --------<br />
<br />
  Installing dependency [haveged] ............... complete <br />
  openjdk-11-jdk may take a few minutes to install<br />                     
  Installing dependency [default-jdk] ........... complete<br /> 
  Installing dependency [vim] ................... complete<br />
  Installing dependency [curl] .................. complete<br />
  Installing dependency [wget] .................. complete<br />  
  Installing dependency [tree] .................. complete<br /> 
  backup files .................................. complete<br />  
</MacWindow>

### Binaries

We will see our binary java files necessary to run our Constellation Node download.

This will also include the seed list file(s) necessary to access the cluster.

<MacWindow>
  ------- * DOWNLOADING BINARIES * -------<br />
  Downloading version ........................... v2.3.2<br /> 
<br /> 
  Fetch [cl-keytool.jar -> global] .............. completed<br /> 
  Fetch [cl-wallet.jar -> global] ............... completed<br /> 
  Fetch [cl-node.jar -> dag-l0] ................. completed<br />
  Fetch [cl-dag-l1.jar -> dag-l1] ............... completed<br /> 
  Fetch [mainnet-seedlist -> dag-l0] ............ completed<br /> 
  Installing Tessellation binaries .............. complete<br /> 
</MacWindow>

### Handle Swap File
The swap file will be created to help with memory constraints at the OS level.

In the event your Node already has a swap file enabled/created, you may see a `already exists` status instead of a `completed` status.

<MacWindow>
  Enabling OS swap .............................. completed<br />                    
  System Requirements ........................... complete<br /> 
<br />
  Press any key to continue<br />
</MacWindow>

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

### Continue Installation

Press any key to continue to the next step of the installation.

<MacWindow>
  Press any key to continue<br />
</MacWindow>
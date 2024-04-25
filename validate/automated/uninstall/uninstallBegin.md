---
title: New Install - Uninstall Begin
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
    content="nodectl uninstall a nodectl installation"
  />
</head>

After the confirmation that we want to perform the uninstall is accepted, the uninstaller will begin.

## Begin Uninstall

It will stop updater service, remove the Node from service ( if applicable ), and disable the auto restart service.

<MacWindow>
Stopping updater service ...................... complete<br />                             
Skipping service [node_l1] status already...... ApiNotReady<br />
AutoRestart service with pid [disabled] ....... not running<br />   
</MacWindow>

### Restore the SSH configuration

Restore the SSH configuration to preNode operational state. 
<MacWindow>
Restoring ubuntu SSH access ................... auth_not_found <br />                      
Restoring root SSH access ..................... running<br />                      
Reloading [SSH] daemon......................... complete <br />                         
Restoring root SSH access ..................... complete<br />
</MacWindow>  

You may receive an `auth_not_found` error.  **You can safely ignore this error.**

<MacWindow>
The 'auth_not_found' message encountered while attempting to restore the user's SSH authorization file can be safely ignored. This message indicates that nodectl's custom backup authorization file was not located on this device.<br />
<br />
HOWEVER  It is recommended to try accessing your VPS from your local system before closing this terminal session. This step ensures that access to your VPS is not interrupted.<br />
</MacWindow>

### Logs

We will be asked if we want to retain the `nodectl.log` file.  

If we choose `y` here, the current `nodectl.log` file will be saved for review later, after `nodectl` is no longer on the server and the VPS is no longer a Constellation Node.

The nodectl logs will be copied to the `/var/tmp/` directory as `nodectl.log`.

<MacWindow>
Would you like to retain the nodectl log file? [n]: y
</MacWindow>

Details about where the log is located are displayed.

<MacWindow>
nodectl logs will be located in the here:<br />
location: /var/tmp/nodectl.log<br />
</MacWindow>

###  Data Removal

nodectl's uninstaller will remove the data related to Tessellation.

<MacWindow>
Removing Node related data .................... complete<br />
Removing Node related services ................ complete<br />
Removing Node related seed lists .............. complete<br />
Removing Node related key stores .............. complete<br />
</MacWindow>

### Node Uninstall Complete

nodectl will confirm that your uninstallation has completed.

<MacWindow>
nodectl has successfully removed the Node components from the system.<br />
<br />
Thank you for your participation with Constellation Network. We hope to see you back soon!<br />
</MacWindow>

### Remove nodectl Binary

Finally nodectl will be removed from the system by itself, and you will be dropped back at the command line prompt.

<MacWindow>
Executing final removal of the nodectl binary.<br />
Removing nodectl binary........................ complete<br />
</MacWindow>
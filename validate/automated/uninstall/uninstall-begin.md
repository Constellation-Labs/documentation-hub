---
title: New Install - Uninstall Begin
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

### Log retention

We will be asked if we want to retain the `nodectl.log` file.  

If we choose `y` here, the current `nodectl.log` file will be saved for review later, after `nodectl` is no longer on the server and the VPS is no longer a Constellation Node.

The nodectl logs will be copied to the `/var/tmp/` directory as `nodectl.log`.

<MacWindow>
Would you like to retain the nodectl log file? [n]: y
</MacWindow>

If we choose `y`, details about where the log is located are displayed.

<MacWindow>
nodectl logs will be located in the here:<br />
location: /var/tmp/nodectl.log<br />
</MacWindow>

### P12 retention

We will be asked if we want to retain our p12 keystore files.

:::danger SECURITY WARNING
Retaining your p12 files on a Node that is not actively participating as a Constellation Network Validator Node on either the Hypergraph or a metagraph, may create vulnerability to others being able to access your private keys, therefor exposing you to a wallet hack.  

If you choose to retain your p12, make sure you retrieve them and remove them from the VPS, if the VPS had no need to retain them.
:::

<MacWindow>
WARNING  Retaining the Node's p12 files can introduce<br />
security vulnerabilities because your p12 files will be remain on this VPS.<br />
Would you like to retain the node p12 files? [n]:<br />
</MacWindow>

If we choose `y`, details on the location of your p12 files will be displayed.

In the event nodectl finds multiple p12 files with the same name, they will be saved with a `.n` extension where the `n` is a number.

```
myp12name.p12
myp12name.p12.1
```

If we want to continue retaining our p12 keystore files, we can choose <kbd>y</kbd>+<kbd>Enter</kbd> here.

<MacWindow>
  WARNING  Retaining the Node's p12 files can introduce<br />
  security vulnerabilities because your p12 files will be remain on this VPS.<br />
  Would you like to retain the node p12 files? [n]: y <br />
</MacWindow>

nodectl will warn us that the p12 files will be moved to the `/var/tmp` directory on your Node.

<MacWindow>
nodectl p12s will be located here:<br />
location: /var/tmp/<br />
</MacWindow>

### Data Removal

nodectl's uninstaller will remove the data related to Tessellation.

<MacWindow>
Removing Node related data .................... complete<br />
Removing Node related services ................ complete<br />
Removing Node related seed lists .............. complete<br />
Removing Node related keystores .............. complete<br />
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
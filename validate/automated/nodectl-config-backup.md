---
title: Backup/Restore Configuration
hide_table_of_contents: false
---

import MacWindow from '@site/src/components/global/MacWindow';
import BrowserWindow from '@site/src/components/global/BrowserWindow';

<head>
  <title>Backup or Restore your P12 Key - Macintosh</title>
  <meta
    name="description"
    content="This document will help to backup or restore a p12 file private key file necessary to join the network."
  />
</head>

You may find it necessary to backup your nodectl configuration file from time to time.  

In the event that your configuration becomes corrupt, restoring from a recent backup can save time.  

## What is your configuration?

nodectl is reliant on being able to read and process a configuration file that holds persistent configuration elements that allow nodectl to properly assist in administrating your Node.

> For Example:

- Holds your p12 private keystore details that are utilized to authenticate and validate data on the Node.
- Holds the details necessary to administer the Hypergraph or metagraph cluster your Node is running on, in defined profiles.
- Holds parameters necessary to run various nodectl features.

## Backing up your configuration

Execute the `backup_config` command on your Node.

### Backup Step One

<MacWindow>
nodeadmin@Constellation-Node:~$ sudo nodectl backup_config<br />
</MacWindow>

nodectl will begin the process of finding your configuration file and creating a dated copy in the configured backup directory.

### Backup Process Results

<MacWindow>
[sudo] password for nodeadmin:<br />
Backing up configuration ...................... complete<br />
</MacWindow>

We will presented with detailed information explaining when, where, and what was backed up.

- The file was backed up on `2024-04-17`.
- The file is located in the `/var/tessellation/backups` directory on the Node.
- The name of the backup is called `backup_cn-config_2024-04-17-11:56:13Z`.
- Time Stamps are in UTC

<MacWindow>
Backup Date: 2024-04-17-11:56:13Z<br />
Backup Location: /var/tessellation/backups/<br />
Backup File Name: backup_cn-config_2024-04-17-11:56:13Z<br />
</MacWindow>

In this example the [auto_restart](../automated/nodectl-autorestart) feature was enabled:
- Since a backup request does not require the `auto_restart` feature to be disabled to complete, it was running while the backup was created.
- The pid (process id) for the `auto_restart` feature was found, so no action was needed and the `auto_restart` feature was not restarted (*it was already running*).

<MacWindow>
Node restart service does not need to be restarted because pid
[1139563] was found already.<br />
nodeadmin@Constellation-Node:~$ 
</MacWindow>

## Restoring your configuration

In the event our Node started to issue an error on startup, some unknown event took place that may have corrupted the configuration, or any other reason that may require you restore you configuration, you can use nodectl's built in restore feature.

<MacWindow>
nodeadmin@Constellation-Node:~$ sudo nodectl restore_config<br />
</MacWindow>

nodectl will access the backup directory on your Node, identify the backup files, and display a list of backup files available for restoration.

:::note Note
The only files that will be displayed are those files that are named in a particular format that nodectl can understand.  

This is the format that nodectl uses during the creation of the backups.
:::

<MacWindow>
========================================<br />
=&nbsp;&nbsp;&nbsp;CONSTELLATION NETWORK HYPERGRAPH&nbsp;&nbsp;&nbsp;=<br />
=&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;RESTORE CONFIGURATION FILE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=<br />
=&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FROM BACKUPS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=<br />
========================================<br />
Code Name: Princess Warrior<br />
<br />
WARNING<br />
Restoring the wrong configuration or a configuration from a previous version of nodectl that is not in the current upgrade path may cause nodectl to malfunction.<br />
<br />
Proceed with caution!<br />
Please choose a date time option:<br />
<br />
1) 2024-03-07 - 14:19:45 backup <br />
2) 2024-04-17 - 11:56:13 backup <br />
3) cancel operation <br />
<br />
Enter an option and hit the &lt;enter&gt; key<br />
:<br />
</MacWindow>

In our example, we will choose <kbd>2</kbd>+<kbd>enter</kbd> to restore the file from `2024-04-17` at `11:56:13` UTC time.

### Confirm

We will be presented with a confirmation before the restoration is executed.

:::danger Danger
Once the new configuration file is put in place, if there are issues with the restoration, you not be able to utilize nodectl properly.

During every restoration, another current backup is automatically created.  This may be used in the event of any unexpected issues. We can restore again to the last known good configuration.
:::

We will press <kbd>y</kbd>+<kbd>enter</kbd>
<MacWindow>
restore file:<br />
2024-04-17 - 11:56:13 backup<br />
/var/tessellation/backups/cn-config.2024-04-17-11:56:13Zbackup.yaml<br />
<br />
Are you SURE you want to restore? [n]: y<br />
</MacWindow>

### Restore

The restoration will commence, and we will be returned to the Node's prompt upon completion. 

<MacWindow>
backing up current config ..................... complete<br />
restoring config .............................. complete<br />
configuration restored!<br />
<br />
nodeadmin@Constellation-Node:$
</MacWindow>

### Alternative Restoration

If you do not have a highly customized configuration file in use on your Node, and a restoration does not restore your ability to use nodectl, you have an alternative solution to regain proper usage of nodectl.

Utilizing the `new` feature in the configurator.

You may also be able to restore a corrupted configuration through the use of overwriting your configuration with a new configuration file and then modifying your profile and global p12 credentials.

<MacWindow>
nodeadmin@Constellation-Node:~$ sudo nodectl configure -n<br />
</MacWindow>

Follow the prompts to build a new configuration using `SCENARIO 4`.

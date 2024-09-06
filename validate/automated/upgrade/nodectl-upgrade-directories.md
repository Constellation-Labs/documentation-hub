---
title: upgrading - Directories
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
    content="Constellation Network Automation - Upgrade Tessellation with nodectl"
  />
</head>

## Node directory cleanup

It important to keep our **Node** hard drive space clean of unnecessary files.

### Clean up backups

nodectl will now offer you the opportunity to clean out your backups.

#### backup cleaning caution
:::caution
You should review your backups to make sure you do **NOT** delete files you may want to retain.

Advanced users may want to transfer these files to a secondary backup directory to keep them safe.

**You should have a backup of the following files in a secure location that is not on your Node.**

- p12 file
- SSH private and public key

There should not be a backup of your p12 keystore file in the backup directory.
:::

#### new encryption feature important note
:::danger NEW TO &gt;v2.13.0
As of `v2.13.0` and later, nodectl has the ability to encrypt the p12 passphrase present in the `cn-config.yaml` configuration file that allows nodectl to operate properly.

In the event you are offered and choose to encrypt (*which is recommended*):

**Two things are advised**:
1. Do **not** remove the backups until you have confirmed that your Node is in full operating order.  When requested by the upgrade process, say <kbd>n</kbd>. This will save the current backup with the unencrypted passphrase and proper configuration necessary to run unencrypted, which will ease your ability to restore, in the unlikely event of an issue.
2. Once you have confirmed your Node is properly working, the `backup` files will still contain your passphrase in clear text.  It is advised to **delete** the backups, once proper operation of the Node is confirmed.  This can be done via the nodectl [clean files](../nodectl-commands#clean_files) command, manually, or during the next upgrade request.
:::

The answer to this question, is **up to you**, in the example we said <kbd>y</kbd>, but please read the important note 👆.

<MacWindow>
  -------- * CLEAN UP BACKUPS * ---------<br />
<br />
  remove?  /var/tessellation/backups/.bashrc_2023-0x-0x-14:42:14Z <br />
  remove?  /var/tessellation/backups/.bashrc_2023-0x-0x-12:13:15Z<br />
  remove?  /var/tessellation/backups/cn-config.2023-0x-xx-21:42:19Zbackup<br />
  disk space to be recovered: 69 KB <br />
  file count: 3<br />
  Are you sure you want to clear the selected backups? [n]: <b>y</b><br />
</MacWindow>

### Clean up uploads

Similar to the **backups** you may have some files that were created in order to upload for diagnostics, logging, accounting, etc.   We can clean up these files as well.

In the event that your Node has files located in this special directory, you will be given a list of the files that will be removed and a confirmation prompt.

In the below example, the `uploads` directory was found to be emtpy, so the step was skipped

<MacWindow>
  --------- * CLEAN UP UPLOADS * ---------<br />
<br />
  Skipping clean nothing to remove | file count:  0 files [0B]<br />
  Cleaning logs from [uploads] > 7 days ......... complete<br />
</MacWindow>

### Clean up logs

Similar to the **backups** and **uploads**, the logs directory can become large and take up a lot of space.  These log files can accumulate over time.

In the output example below, some of the log files were omitted with `[...]` representing files that were built up.  You will notice Hypergraph *`layer0`* and metagraph *`layer1`* logs being represented.

Optionally, we can choose <kbd>enter</kbd> to accept the default value or <kbd>enter</kbd>+<kbd>y</kbd>; otherwise <kbd>n</kbd>+<kbd>enter</kbd>.

<MacWindow>
  ---------- * CLEAN UP LOGS * -----------<br />
  <br />
  remove? [layer0] /var/tessellation/dag-l0/logs/archived/app.2023-11-02.0.log.gz<br />
  remove? [layer0] /var/tessellation/dag-l0/logs/archived/http.2023-11-02.0.log.gz<br />
  remove? [layer0] /var/tessellation/dag-l0/logs/archived/http.2023-11-01.5.log.gz<br />
  remove? [layer0] /var/tessellation/dag-l0/logs/archived/http.2023-11-03.2.log.gz<br />
  [...]<br />
  remove? [layer1] /var/tessellation/dag-l1/logs/archived/http.2023-11-30.2.log.gz<br /> 
  remove? [layer1] /var/tessellation/dag-l1/logs/archived/http.2023-12-02.3.log.gz<br /> 
  remove? [layer1] /var/tessellation/dag-l1/logs/archived/http.2023-12-01.1.log.gz<br /> 
  remove? [layer1] /var/tessellation/dag-l1/logs/archived/transactions.2023-12-30.0.log.gz<br /> 
  remove? [layer1] /var/tessellation/dag-l1/logs/archived/http.2023-12-01.3.log.gz<br /> 
  [...]<br /> 
  remove? [layer1] /var/tessellation/dag-l1/logs/json_logs/json.log<br /> 
  disk space to be recovered: 1 GB <br />
  file count: 65<br />
  Are you sure you want to clear the selected logs? [n]: <b>y</b><br />
</MacWindow>

nodectl is done cleaning up and will now start the package handler.
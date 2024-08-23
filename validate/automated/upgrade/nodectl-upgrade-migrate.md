---
title: upgrading - Migration
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

### Possible Migration

New versions of nodectl can offer three main purposes:
1. Bug Fixes
2. Security Fixes
3. Feature Updates

In some cases, if a new feature is offered, it may require that we update nodectl's main configuration file `cn-config.yaml`.  

This will allow nodectl to work with the new features while persisting your current configuration setup.

:::info No Migration Needed
If you receive the following message (shown in the window below 👇) you can continue reading this section of the documentation.

If you do not receive the `migration` message, you can skip this step and move to the next section [upgrading - Continue](/validate/automated/upgrade/nodectl-upgrade-start-2).
:::

### Migrate Configuration

We received the following banner, so we can continue to migrate our Node.

<MacWindow>
  ========================================<br />
  =   CONSTELLATION NETWORK HYPERGRAPH&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=<br />
  = &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;VERSION 2.0&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=<br />
  =&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CONFIGURATION MIGRATION&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=<br />
  ========================================<br />
  Code Name: Princess Warrior<br />
  <br />
  During program initialization, an outdated and/or improperly formatted configuration file
  was found on this server/Node.  <br />
  <br />
  nodectl will backup your original configuration file and attempt to migrate to the new required
  format.  
</MacWindow>

It is **very** important to migrate the configuration, otherwise you will most likely encounter a configuration error message, and nodectl will terminate.

### Start Migration

We can press <kbd>Enter</kbd> to accept the default `y`.

<MacWindow>
  Attempt update and migrate configuration file? [y]: 
</MacWindow>

### Backups

You will see the migration start with a backup of our current configuration.

<MacWindow>
Backing up cn-config yaml ..................... complete
</MacWindow>

You will get a warning message to remind you that the backup can introduce a possible vulnerability. This is because it may contain a clear text passphrase.

<MacWindow>
DANGER  The backup configuration YAML file MAY CONTAIN A P12 PASSPHRASE, FOR SECURITY PURPOSES, PLEASE REMOVE AS NECESSARY!
</MacWindow>

:::success Good Practice 
It is good practice to keep the backups when asked to clear them (say `n`), test your Node's functionality to ensure you maintain full access to your Node's features, and then remove.

Later in the upgrade process, after the migrator is completed, you will receive another warning from the upgrader asking you if you want to remove your backups.  

It is important to remember, if you choose `yes` you will lose the ability to recover the configuration.

We will be reminded again in this documentation, so we do not have to worry about it at this point in the upgrade process.
:::

<MacWindow>
CAUTION  After the migration is complete, the upgrader will continue and will prompt you to remove the contents of the backup directory where the original configuration YAML file has been backed up within.<br />
<br />
If you choose to empty the contents of this directory, you will remove the backup configuration YAML file file.
</MacWindow>

You will see information the backup that was created.

:::note
nodectl will backup the configuration multiple times depending on which modules are activated during the upgrade.
:::

<MacWindow>
backup filename: backup_cn-config_2024-XX-XX-XX:XX:XXZ<br />
backup location: /var/tessellation/backups<br />
</MacWindow>

### Migration Complete

The migrator will show a successful completion.

<MacWindow>
Creating configuration file ................... complete<br />
<br />
cn-config.yaml upgraded<br />
MIGRATION COMPLETED SUCCESSFULLY!!
</MacWindow>

You will be offered the opportunity to review the configuration file changes. 

This is an optional step to help you get acquainted with the values in the configuration file, however it is not necessary.  Although we will choose `n` here, you may choose `y` and page through the configuration using the <kbd>Enter</kbd> to progress or the <kbd>q</kbd>+<kbd>Enter</kbd> to quit the process at any time and return to the next steps.

We will say press <kbd>Enter</kbd> to accept the `n` default answer.

<MacWindow>
Ready to continue with upgrade<br />
<br />
Would you like to review your new configuration? [n]:<br />
</MacWindow>

nodectl will continue to the actual upgrade process.
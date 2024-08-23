---
title: p12 migration - Upload P12
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
    content="nodectl installation of new Node"
  />
</head>

### Upload existing p12

In order to properly migrate our existing **p12** private key file to our new Node, we will need to upload the **p12** file manually.

By default, when we log into a new instance in the cloud, we will be using the default user account that was created by your provider.  (Exception: If you built your server yourself via a bare metal installation.)

We will upload our preexisting **p12** private key file, to the "root" of this default user's home directory. Do not confuse this with the root user.  The "root" of a user's account within most Linux distributions is their `/home` directory.

By simply logging into your default user's account, you will be directed automatically to the root of that user's account.  nodectl will be able to find your **p12** file if you place it in this location.  

Alternatively, if this is a VPS that has already been prepared, nodectl is smart enough to do a search throughout the `/home` directory file system in attempt to find the `p12` that has been uploaded.

:::danger IMPORTANT
#### You will be saving your p12 file to the root of your home directory for your default user.  

The restore instructions will ask you to place the p12 in a location that may not exist, you need to substitute this for the default location.  

This means that in the instructions proceeding, you will not need to change directories to any specific location, only to upload to the default location, the directory you find your sftp connection (explained in the documentation) accessing first.
:::

The links below 👇 will point directly to the portion of the documentation showing you specifically how to "restore" your p12.  In this case, we are uploading our p12 to a new system in order to "restore" our original p12 to proper use.

  - [Restore a p12 file on Mac](/validate/resources/p12-backup-mac#restoring-your-p12)
  - [Restore a p12 file on Windows](/validate/resources/p12-backup-win#restoring-your-p12)
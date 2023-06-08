---
title: New Node Installation with p12 migration
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

## Introduction

The document will act as [but not necessarily] an appendix to the [Installation documentation](./nodectlInstall.md).  

It is designed to assist a Node Operator that will be doing a brand new installation; however, allow the migration of an existing private key file [**`p12 file`**], at the same time. 

It will be up to the Node Operator to properly navigate back and forth between the two documents.  Rather than upkeep two similar documents which can produce unintended conflicts.

## How to use this document

It is recommended to go through the installation steps below one by one.  

Once you reach the end of the **section** on the **installation** documentation, you will notice a *blue box* that will offer you the ability to navigate to the exact location you need to return to.  Alternatively, you can press the <kbd>&larr;</kbd> button to return to this document.

:::note 
You can read ahead in this document to see where changes are required
:::

## Pre-install Steps
### Requirements
[Requirements](./nodectlInstall.md#requirements)

### Download Binary
[Download nodectl](./nodectlInstall.md#download-nodectl)

### Upload existing p12

In order to properly migrate our existing **p12** private key file to our new Node, we will need to upload the **p12** file manually.

By default, when we log into a new instance in the cloud, we will be using the default user account that was created by your provider.  (Exception: If you built your server yourself via a bare metal installation.)

We will upload our **p12** private key file, to the "root" of this default user's home directory. Once again, by simply logging into your default user's account, you will be directed automatically to the root of that user's account.  nodectl will be able to find your **p12** file if you place it in this location.

:::info
You may want to read the entire document; however, this tutorial will direct you to the `restore` portion of the document.
:::

Follow the instructions to restore your p12 file:
  - [Restore a p12 file on Mac](../resources/p12backup-mac.md#restore-p12-file)
  - [Restore a p12 file on Windows](../resources/p12backup-win.md#restoring-your-p12)

---

## Install Steps
### Start Installation

Follow all steps provided by [Node Install](./nodectlInstall.md#install-nodectl) until your reach the request to migrate your [**p12 private key**] file.  

Throughout the **installation** documentation there will be *blue info boxes* that you can use to return to this document.

When you return from the main **installation** we can continue with **migration specific** instructions.

[Node Install](./nodectlInstall.md#install-nodectl)

### Import p12 file

We are ready to import our **existing p12** file to our new Node.

We can choose **`y`** here.

<MacWindow>
  Node environment set .......................... mainnet<br />
  Check permissions & versioning ................ complete<br />    
  Obtaining External IP ......................... 111.111.111.111<br />
  Are you migrating over an existing p12 private key? [n]: <b>y</b><br /> 
</MacWindow>

nodectl will warn you that we need to upload your existing **p12** file; however, we should have already done this via the [Upload existing p12](#upload-existing-p12) section of this documentation.

If you have **NOT** completed [Upload existing p12](#upload-existing-p12), you can:
  1. Enter `y` here (*see below*) to exit the installation.
  2. Follow the necessary [instructions](#upload-existing-p12) to upload your p12.
  3. Repeat the steps until you return to this point of the document.

If you already have your **p12 private key file** uploaded, you should choose `n` ( or just accept `n` by hitting the <kbd>enter</kbd> ) to continue.

<MacWindow>
  BEFORE WE BEGIN <br />
<br />
  If this Node will be using an existing p12 private
  key, the installation should be exited and the existing p12 private key
  uploaded to a known secure local directory on this server. Alternatively, you can simply pause
  here and upload the p12 private key file, and then continue.<br />
<br />
  Please see the Constellation Doc Hub Validator section for instructions on how to do this.<br />
<br />
  Later in the installation, the Node Operator will be given the opportunity to migrate over the
  existing p12 private key. At the necessary time, a request for the p12 name
  and directory location will be given. Once nodectl understands where
  the p12 file is located and necessary credentials, it will then be migrated by the installation to the proper location.<br />
<br />
  Exit now to upload existing p12? [n]: <b>n</b><br />
<br />
</MacWindow>

You can now return to the **[nodectl installation](./nodectlInstall.md#system-requirements)** and follow the instructions until you reach the next *blue box* to return here.

### Choose P12 file

We should now reach the point in the **installation** where nodectl needs to know:
1. Which p12 file (if multiple) that we want to import
3. Where the p12 file is located.

:::note Side Note
During the installation we will only handle our **global p12 file**.  The global p12 file is nodectl specific terminology.

The installation will import your selected p12 and use it for **all** profiles (Hypergraph and Metagraphs) associated with your Node.  In our case, the **Constellation Network Global Layer0 Hypergraph** and the **Constellation Network Layer1 Metagraph**.

After installation is complete you can update the nodectl **configuration** to use dedicated p12 files for each profile associated with your Node.

See the [configuration document](./nodectlConfig.md) **or** the [Command Reference](nodectlCommands.md), for more details
```
sudo nodectl configure
```
:::

nodectl will offer us a menu of options for any **p12** files that it finds on your system.  In this example we can pretend we uploaded **mynode.p12** to our `ubuntu` users's account using the [upload steps](#upload-existing-p12).

We can choose `1` ( do **not** hit <kbd>enter</kbd> )

If you do **not** see your p12 file, this means either you placed it in a location that nodectl is not looking within, or you did not properly upload your p12 file.  If the former, you can hit `2` and then enter in the fully qualified location of your p12 file.

<MacWindow>
  nodectl has detected an existing p12 migration to this new Node has been requested; and now
  needs to find and migrate this private key file. Please select an option.<br />
<br />
  1) /home/ubuntu/nodeadmin-node.p12<br />
  2) input manual entry<br />
<br />
  KEY PRESS an option<br />
</MacWindow>

You can now return to the **[nodectl installation](./nodectlInstall.md#passphrase-entry)** and follow the instructions until you reach the end.

---
This concludes the specifics of p12 migration (and this document).


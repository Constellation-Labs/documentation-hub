---
title: p12 migrate v1 to v2
hide_table_of_contents: false
---

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';
import MacWindow from '@site/src/components/global/MacWindow';

<head>
  <title>p12 migrate v1 to v2</title>
  <meta
    name="description"
    content="how to migrate a p12 file in v1 format to v2"
    title="p12 migrate v1 to v2"
  />
  <style>{`
    :root {
      --doc-item-container-width: 60rem;
    }
  `}
  </style>
</head>

## Introduction

Over the last year, **Constellation Network** has invoked a new **p12** file standard for accessing the **Constellation Network Hypergraph and Metagraphs**.

The original `version 1` **p12** files are no longer in use.  

**Constellation Network Hypergraph and Metagraphs** now use **p12** private key files that are on `version 2`.

## Purpose

The purpose of this document is to help any **Node Operators** that are still running their Nodes using `version 1` **p12** private key files to convert them to `version 2`.

## Setup

### Verify necessary components

We need to verify that we have the proper software packages installed on our system in order to push forward with a migration.

The **easiest** way to do this, is to install **nodectl** on a fresh Linux Debian distribution.

Alternatively, you can install the proper components on your own and follow the instructions after complete.

### Setup using nodectl

If you already have **nodectl** running on your VPS, you only need upload your `version 1` p12 file via the **restore** process.

- [restore p12 from mac](../resources/p12backup-mac#restore-p12-file)
- [restore p12 from windows](../resources/p12backup-win#restoring-your-p12)

If you do not have **nodectl** installed...

Simply:
  - [Build a VPS](../validator/get_started.md)
  - Upload the `version 1` p12 file via the **restore** process (above).
  - Follow the instructions to [install nodectl](../automated/nodectlInstall.md) even though we will not be using this VPS as a **Validator Node**; instead, using **nodectl**'s installation process to install all the necessary components to convert our **p12** `version 1` to `version 2`. 

:::note
If you are planning to build a dedicated VPS that will **not** ultimately be used as a validator Node, you do not need to adhere to the advised VPS sizing requirements.

You only need to verify that you have at least `30Gb` of hard drive space (disk) to make sure there is enough room for **nodectl**'s automation process to install the necessary components. 
:::

[Skip](#conversion-process) to the conversion process steps.

### Setup manually

Please follow the [manual](../manual/getting-started-manual.md) instructions. 

:::note
If not planning on using the VPS as a **Validator Node**; rather, just to convert your p12 file from `version 1` to `version 2`, you only need to use a simple VPS instance and allow for at least `30Gb` of hard drive space (disk)
:::

## Conversion Process

Now that we have all the necessary components installed on our VPS, we can begin the conversion process.

:::warning Note
We will not be using **nodectl** after this point.
:::

### What we need?

Before we continue, it is important to have all our information in place to avoid getting stuck.

#### What do we need?
- Option 1
  - **nodectl** [installed](../automated/nodectlInstall.md)
- Option 2
  - java installed
  - haveged installed
  - cl-keytool.jar downloaded
  - cl-wallet.jar downloaded

#### What we also need?

- p12 `version 1` private key file uploaded from our [mac](../resources/p12backup-mac#restore-p12-file) or [windows](../resources/p12backup-win#restoring-your-p12) system.

- Our **p12** details
  - `keystore` passphrase (that will be called `cl-keystore`)
  - `storepass` passphrase (that will be called `cl-storepass`)
  - `password` passphrase (that will be called `cl-password`)
  - `keypass` passphrase (that will be called `cl-keypass`)
  - Our wallet's `alias` (that will be called `cl-keyalias`)
    - *note*: This is **not** the MainNet 1.0 Node alias.
  - `name` of our p12 file

### Change directories

:::success MOVING FORWARD
The rest of this document will **assume** that you migrating your `version 1` p12 private key file to `version 2` using a **VPS** with **nodectl** version `2.x.x` installed.

**If you are not using nodectl, please make necessary changes on your own.**
:::

From our remote VPS session we will begin by changing directories to the location of our `cl-keytool.jar` and `cl-wallet.jar` file.

```
cd /var/tessellation/
```

### Export environment variables

Next we will export some **environment variables** that the `cl-keytool.jar` file will utilize to migrate our **p12** from `version 1` to `version 2`.

Please make sure to enclose all of your environment variables inside the double quotes.

```
export CL_KEYALIAS="myConstellationAlias"
export CL_KEYSTORE="/home/nodeadmin/tessellation/myconstellation.p12"
export CL_PASSWORD="my_password"
export CL_STOREPASS="my_storepass_passphrase"
export CL_KEYPASS="my_keystore_passphrase"
```

We can now verify that our environment variable has been properly exported

```
env | grep CL_
```
<MacWindow>
nodeadmin@@Constellation-Node:~# env | grep CL_<br />
CL_KEYALIAS=myConstellationAlias<br />
CL_KEYSTORE=/home/nodeadmin/tessellation/myconstellation.p12<br />
CL_PASSWORD=my_password<br />
CL_STOREPASS=my_storepass_passphrase<br />
CL_KEYPASS=my_keystore_passphrase<br />
</MacWindow>

### Migrate from V1 to V2
```
cd /home/nodeadmin/tessellation
java  -jar /var/tessellation/cl-keytool.jar migrate
```

### Verify that we can read the new p12
```
ls -l 
```
We should see our new **p12** file.
```
java -jar /var/tessellation/cl-wallet.jar show-public-key
```
We should see our public key information displayed.


---
title: p12 migrate v1 to v2
hide_table_of_contents: false
hide_title: true
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
</head>

## Migrate a v1 P12 Keystore

Constellation Network has invoked a new **p12** file standard for accessing the **Constellation Network Hypergraph and metagraphs**.

The original `version 1` **p12** files are no longer in use.  

**Constellation Network Hypergraph and metagraphs** now use **p12** private key files that utilize `version 2` format.

## Purpose

The purpose of this document is to help any **Node Operators** that are still running their Nodes using `version 1` **p12** private key files to convert them to `version 2`.

## Setup

### Verify necessary components

We need to verify that we have the proper software packages installed on our system in order to push forward with a migration.

The **easiest** way to do this:
- To utilize an existing **Constellation Network Validator Node** with nodectl installed.
- To install nodectl on a fresh Linux Debian distribution.

Alternatively, you can install the proper components on your own and follow the instructions after complete.

### Setup using nodectl

If you already have nodectl running on your VPS, you only need upload your `version 1` p12 file via the **restore** process.

- [restore p12 from mac](/validate/resources/p12-backup-mac#restore-p12-file)
- [restore p12 from windows](/validate/resources/p12-backup-win#restoring-your-p12)

:::danger
If utilizing an existing ( *or running* ) **Validator Node**, please make sure you do not overwrite your existing **p12** private key file or settings.
:::

#### If you do not have nodectl installed...

Simply:
  - [Build a VPS](/validate/validator/getting-started)
  - Upload the `version 1` p12 file for conversion via the **restore** process (above).
  - Follow the instructions to [install nodectl](/validate/automated/nodectlInstall) 
  
  :::info Side Note
  We will not be using this VPS as a **Validator Node**.  The purpose of installing nodectl is just a simply way to add all the necessary components/tools necessary to convert our **p12** `version 1` to `version 2`. 
  :::

:::note
If you are planning to build a dedicated VPS that will **not** ultimately be used as a validator Node, you do not need to adhere to the advised VPS sizing requirements.

You only need to verify that you have at least `30Gb` of hard drive space (disk) to make sure there is enough room for nodectl's automation process to install the necessary components. 
:::

[Skip](#conversion-process) to the conversion process steps.

### Setup manually

Please follow the [manual](/validate/manual/manual-install-getting-started) instructions. 

:::note
If not planning on using the VPS as a **Validator Node**; rather, just to convert your p12 file from `version 1` to `version 2`, you only need to use a simple VPS instance and allow for at least `30Gb` of hard drive space (disk)
:::

## Conversion Process

Now that we have all the necessary components installed on our VPS, we can begin the conversion process.

:::warning Note
We will not be using nodectl after this point.
:::

### What we need?

Before we continue, it is important to have all our information in place to avoid getting stuck.

#### What do we need?
- Option 1
  - **`nodectl`** [installed](/validate/automated/nodectlInstall)
- Option 2
  - `java` installed
  - `haveged` installed
  - `cl-keytool.jar` downloaded
  - `cl-wallet.jar` downloaded

#### What we also need?

- p12 `version 1` private key file uploaded from our [mac](/validate/resources/p12-backup-mac#restore-p12-file) or [windows](/validate/resources/p12-backup-win#restoring-your-p12) system.

- Our **p12** details
  - `keystore` passphrase &rarr; `CL_KEYSTORE`
  - `storepass` passphrase &rarr; `CL_STOREPASS`
  - `password` passphrase &rarr; `CL_PASSWORD`
  - `keypass` passphrase &rarr; `CL_KEYPASS`
  - Our wallet's `alias` &rarr; `CL_KEYALIAS`
    :::warning Important
    This is **not** the MainNet 1.0 Validator Node alias.
    :::
  - `name` of our p12 file

### Change directories

:::success MOVING FORWARD
The rest of this document will **assume** that you migrating your `version 1` p12 private key file to `version 2` using a **VPS** with nodectl version `2.x.x` installed.
:::

:::danger Not using nodectl
**You can utilize the instructions below to interpret the necessary steps to complete the conversion.**
:::

From our remote VPS session we will begin by changing directories to the location of our **`p12`** private key file that we are converting.

```
cd /home/nodeadmin/tessellation
```

### Export environment variables

Next we will export some **environment variables** that the `cl-keytool.jar` file will utilize to migrate our **p12** from `version 1` to `version 2`.

Please make sure:
- To enclose all of your environment variables inside the double quotes.
- Copy the format exactly has shown. 
- Change the variable values to your specific **p12**'s values.
- Add spaces as you see below.
- Do not add spaces where there are no spaces.

```
export CL_KEYALIAS="myConstellationAlias"
export CL_KEYSTORE="/home/nodeadmin/tessellation/myconstellation.p12"
export CL_PASSWORD="my_password"
export CL_STOREPASS="my_storepass_passphrase"
export CL_KEYPASS="my_keystore_passphrase"
```

<MacWindow>
nodeadmin@@Constellation-Node:~# export CL_KEYALIAS="myConstellationAlias"<br />
nodeadmin@@Constellation-Node:~# export CL_KEYSTORE="/home/nodeadmin/tessellation/myconstellation.p12"<br />
nodeadmin@@Constellation-Node:~# export CL_PASSWORD="my_password"<br />
nodeadmin@@Constellation-Node:~# export CL_STOREPASS="my_storepass_passphrase"<br />
nodeadmin@@Constellation-Node:~# export CL_KEYPASS="my_keystore_passphrase"<br />
</MacWindow>

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
Enter the command that will initiate the migration from `v1` to `v2`. This command will not produce any validating output if successful. However, if there is an issue an error will be presented.
```
java  -jar /var/tessellation/cl-keytool.jar migrate
```

### Verify that we have a new p12 v2 private key file
```
ls -l 
```
We should see our new **p12** file with a `_v2` appended to the original name with the `.p12` extension.
<MacWindow>
nodeadmin@@Constellation-Node:~# ls -l<br />
-rw-r--r-- 1 nodeadmin&nbsp;&nbsp;&nbsp;&nbsp;nodeadmin&nbsp;&nbsp;&nbsp;1094 May 26 12:17 myconstellation_v2.p12
</MacWindow>

### Verify we have a valid v2 p12 private key file

Update our `CL_KEYSTORE` variable to point to the new `v2` p12 file.
```
export CL_KEYSTORE=/home/nodeadmin/tessellation/myconstellation_v2.p12
```

<MacWindow>
nodeadmin@@Constellation-Node:~# export CL_KEYSTORE=/home/nodeadmin/tessellation/myconstellation_v2.p12<br />
</MacWindow>

We will now issue a command to expose the `p12` file's **public key**.
```
java -jar /var/tessellation/cl-wallet.jar show-public-key
```
We should see our public key information displayed.

:::info
The output below is fake information
:::

<MacWindow>
nodeadmin@@Constellation-Node:~# java -jar /var/tessellation/cl-wallet.jar show-public-key<br />
EC Public Key [ee:ff:aa:bb:cc:dd:ee:ff:11:22:33:44:55:66:77:88:99:aa:bb:cc]<br />
&nbsp;&nbsp;X: abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890<br />
&nbsp;&nbsp;Y: 111222333444555666777888999101010111111121212131313141414151515a<br />
</MacWindow>

### Complete
Your **p12** file should now be migrated from `version 1` to `version 2`.  Place your original `version 1` in a secure location for temporary storage.

You should now test your **new** `version 2` p12 private key file.  You can do this by: 
- Connecting to your appropriate Constellation Network cluster (Hypergraph or metagraph). 
- [Exporting your private key](/validate/automated/nodectl-commands#export_private_key).
- Utilizing your **p12** private key file with whatever process you require. 

#### Optional
Rename your new `version 2` p12 file to either the original name (dropping the `_v2` from the end).
```
mv /home/nodeadmin/tessellation/myconstellation_v2.p12 /home/nodeadmin/tessellation/myconstellation.p12
```

After completing the connection tests, exporting your [private key](/validate/automated/nodectl-commands#export_private_key) and verifying that you have full access to your wallet... You can **destroy** your original **p12** so that no one can get a hold of it.

#### nodectl users

If you did **not** rename your `v2` **p12** back to the original **p12** filename used before the migration ( and do not intend to ), you should make sure nodectl is aware of the p12 file name change.

You can update the [configuration](/validate/automated/nodectl-config) by issuing a [`sudo nodectl configure`](/validate/automated/nodectl-commands#configure) on your Node with nodectl installed.
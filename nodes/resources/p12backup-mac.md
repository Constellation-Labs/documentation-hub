---
title: Backup|Restore P12 Mac
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

---

## BACKING UP YOUR P12 
from your Node (Macintosh)

It is of **vital** importance to keep a **cold** backup of your **p12** file.  The term **cold** simply refers to storing your **p12** file in a location that is air gapped (not connected to the internet).  These locations can include (but are not limited to) 
- Encrypted Wallet Device
- Encrypted USB Key (Device or Thumb-Drive)
- UBS Key (Device or Thumb-Drive) stored in a safe when not in use

#### Instructions

Log into your **local system** and open a **terminal** session.

:::note
You can remind yourself how to access your local system and VPS here for [Macintosh](/nodes/resources/accessMac) or [Windows](/nodes/resources/accessWin).
:::

Create a `temporary` directory to store the `p12` file that you will backup from your **Node**.

Change directories to your `/home` directory.
```
cd ~
```
<MacWindow>
constellation@MacBook ~ % cd ~
</MacWindow>

:::note Your choice
It is your choice on the location and names that you give your directory.  Our instructions only display suggestions.
:::

Create a new directory to house your `p12` file.

```
mkdir constellation-backup
```
<MacWindow>
constellation@MacBook ~ % mkdir constellation-backup
</MacWindow>


##### ACCESS YOUR NODE VIA SFTP

:::important 
These instructions will show you the simplest way to retrieve your **p12** file, via a terminal session.  If you are more comfortable with a GUI application
there are several applications out in the Apple store to choose from (out of the scope of this documentation).  If you choose to use a GUI application, you
can refer to the instructions below and alter as necessary to fit your usage requirements of your application.
:::

In this example we are going to **pretend** that our Node's (VPS) private information is the following in order to ease the ability to follow along with this documentation:

### Setup Dictionary 

| VARIABLE	| OUR PRETEND INFORMATION	| Description |
| ----  | -----| ----- | 
| Local System Prompt | constellation@MacBook % | |
| VPS/Node Username	| **nodeadmin**	| The username that we will log into our Node with.	| 
| VPS/Node P12 filename | **my-p12file.p12**	| The name of your `p12` file. | 
| External IP address	| **123.123.123.123**	| The external IP address of your Node.  You can use `sudo nodectl whoami` from your Node to obtain your External IP address.	| 
| SSH Key Name	| **my-node-ssh-keyname**	| The name of your SSH key identify private key file used to access your Node from your local system.	| 
| Password	| **abc123**	| `nodeadmin`'s password that is required to use super user `sudo` commands.	| 
| P12passPhrase	| **123abc**	| Your `p12` file passphrase.	| 

Change directories to our `constellation-backup` directory on our local Macintosh system.

```
cd ~/constellation-backup
pwd
```

<MacWindow>
constellation@MacBook ~ % cd ~/constellation-backup<br />
constellation@MacBook constellation-backup % pwd<br />
/Users/constellation/constellation-backup<br />
constellation@MacBook constellation-backup %<br />
</MacWindow>

Open an `SFTP` session to your Node (VPS).  In relation to previous documentation regarding `ssh` connections, the `sftp` command is **exactly** the same as the `ssh` command used to  connect.  The only difference is the first word in the command.

:::success Reminder
You can remind yourself what your SSH identity key file name is by reviewing your `~/.ssh` directory.
<MacWindow>
constellation@MacBook ~ % ls -l ~/.ssh<br />
total 64<br />
-rw-------  1 constellation  staff  3434 May 11 09:25 my-node-ssh-keyname<br />
-rw-r--r--  1 constellation  staff   743 May 11 09:25 my-node-ssh-keyname.pub<br />
constellation@MacBook constellation-backup %<br />
</MacWindow>
:::

```
sftp -i ~/.ssh/my-node-ssh-keyname nodeadmin@123.123.123.123
```
<MacWindow>
constellation@MacBook constellation-backup % sftp -i ~/.ssh/my-node-ssh-keyname nodadmin@123.123.123.123<br />
Enter passphrase for key '/Users/netmet/.ssh/const_node_rsa': <br />
Connected to 1123.123.123.123.<br />
sftp><br />
</MacWindow>

From inside the `sftp` command line utility (CLI) enter the command to change directory to the `/home/nodeadmin/tessellation` directory *(or your custom location)* and list out *long format* the contents of the directory.
:::note
The `l` is the letter `L` not the number `1`.
:::
```
cd /home/nodeadmin/tessellation
ls -l
```
<MacWindow>
sftp> cd /home/nodeadmin/tessellation<br />
sftp> ls -l<br />
-rw-r--r--    1 nodeadmin nodeadmin       31 Jun 11 14:28 my-p12file.p12<br />
sftp> <br />
</MacWindow>

We now have confirmed the location and existence of our `p12` file.  We can use the sftp CLI `get` command to get the file.

```
get my-p12file.p12
```
<MacWindow>
sftp> get my-p12file.p12<br />
Fetching /home/nodeadmin/tessellation/my-p12file.p12 to my-p12file.p12<br />
/home/nodeadmin/tessellation/my-p12file.p12   100%   31     0.3KB/s   00:00<br /> 
sftp> <br />
</MacWindow>

:::success
You should see `100%` to indicate the file was 100% downloaded
:::

Exit out of the `sftp` utility.

<MacWindow>
sftp> exit<br />
constellation@MacBook constellation-backup %<br />
</MacWindow>

We are returned to our `local` Mac system with our `Mac` prompt.  Execute a long list `ls -l` from within the `constellation-backup` directory we created.  Verify that our `p12` key file is downloaded.
```
ls -l
```
<MacWindow>
constellation@MacBook constellation-backup % ls -l<br />
total 8
-rw-r--r--  1 netmet  staff  31 Aug 11 18:30 my-p12file.p12
constellation@MacBook constellation-backup %
</MacWindow>

#### Finally
Transfer your newly downloaded **backup p12 file** to your **cold storage** device.  Remove
the **p12** file from your temporary backup directory.

---

## RESTORING YOUR P12 
to your Node (Macintosh)

:::danger IMPORTANT
If you are restoring your `p12` file to Node that has been installed using `nodectl` (recommended): 
1. Make sure you do the installation of `Tessellation` first using `nodectl` before you restore your `p12` key file.
2. During the installation you will need to use the **same** `p12` file name as you did previously in order to make sure that the configuration `nodectl` builds matches.
:::

:::note NOTE
We will use the same `pretend` variables as in the `backup` [section](#setup-dictionary). This restore process also
assumes that you used the [Backup Procedure](#backing-up-your-p12) above.
:::

From your local **Macintosh** system, migrate your **backed up p12 key file** from your **cold storage** device to your `constellation-backup` temporary directory and make sure in your **terminal**
session you are in the file location holding your `backed up` p12 key file.

```
cd ~/constellation-backup
```

Do a directory listing to make sure you see your backed up file.

```
ls -l
```

<MacWindow>
constellation@MacBook % cd ~/constellation-backup<br />
constellation@MacBook constellation-backup % ls -l<br />
total 8
-rw-r--r--  1 netmet  staff  31 Aug 11 18:30 my-p12file.p12
constellation@MacBook constellation-backup %
</MacWindow>

Open an `SFTP` session to your Node (VPS).  In relation to previous documentation regarding `ssh` connections, the `sftp` command is **exactly** the same as the `ssh` command used to  connect.  The only difference is the first word in the command.

:::success Reminder
You can remind yourself what your SSH identity key file name is by reviewing your `~/.ssh` directory.
<MacWindow>
constellation@MacBook ~ % ls -l ~/.ssh<br />
total 64<br />
-rw-------  1 constellation  staff  3434 May 11 09:25 my-node-ssh-keyname<br />
-rw-r--r--  1 constellation  staff   743 May 11 09:25 my-node-ssh-keyname.pub<br />
constellation@MacBook constellation-backup %<br />
</MacWindow>
:::

:::note Reminder
Change the command to fit your Node's **IP**, **credentials**, and **file names**.
:::
```
sftp -i ~/.ssh/my-node-ssh-keyname nodeadmin@123.123.123.123
```
<MacWindow>
constellation@MacBook constellation-backup % sftp -i ~/.ssh/my-node-ssh-keyname nodadmin@123.123.123.123<br />
Enter passphrase for key '/Users/netmet/.ssh/const_node_rsa': <br />
Connected to 1123.123.123.123.<br />
sftp><br />
</MacWindow>

From inside the `sftp` command line utility (CLI) enter the command to change directory to the `/home/nodeadmin/tessellation` directory *(or your custom location)* and list out *long format* the contents of the directory.
:::note
The `l` is the letter `L` not the number `1`.
:::

:::danger IMPORTANT
If you had followed the directions to restore a new or existing Node, you should have used `nodectl` to install
`Tessellation` properly **USING THE SAME P12 FILE NAME**.  The directory listing will show your `p12` file with the 
same name as that you are attempting to restore.
:::

<MacWindow>
sftp> cd /home/nodeadmin/tessellation<br />
sftp> ls -l<br />
-rw-r--r--    1 nodeadmin nodeadmin       31 Jun 11 14:28 my-p12file.p12<br />
sftp> <br />
</MacWindow>

We now have confirmed the location and existence of our temporary `p12` file.  **If you did not create a temporary place 
holder `p12` file, this directory may be empty** (depending on your custom configuration).  We can use the sftp CLI `put` command to restore the p12 file.

```
put my-p12file.p12
```
<MacWindow>
sftp> put my-p12file.p12<br />
Uploading my-p12file.p12 to /home/nodeadmin/tessellation/my-p12file.p12<br />
my-p12file.12   100%   31     0.6KB/s   00:00    <br />
sftp> <br />
</MacWindow>

:::success
You should see `100%` to indicate the file was 100% uploaded to your Node.
:::

Exit out of the `sftp` utility.

<MacWindow>
sftp> exit<br />
constellation@MacBook constellation-backup %<br />
</MacWindow>

We are returned to our `local` Mac system with our `Mac` prompt.  


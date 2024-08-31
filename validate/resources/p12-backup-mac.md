---
title: Backup/Restore P12 on Mac
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

It is of _vital_ importance to keep a cold backup of your P12 file.  The term **cold** simply refers to storing your P12 file _offline_, thereby protecting your data from unauthorized access and vulnerabilities. Cold storage may include but are not limited to encrypted hardware wallets or USB keys.

## Backing up your P12

Log into your **local system** and open a [terminal session](/validate/resources/accessMac).

### Create directory

Change your current directory to `/home`, then create a temporary directory to store the P12 file. In this example, we'll name our directory `constellation-backup`, but you are free to choose any custom location or directory name.

```
cd ~
```

```
mkdir constellation-backup
```

### Change to temp directory

Change directories to your newly created directory.

```
cd ~/constellation-backup
```

### Connect to your node

Open an `sftp` session to your node and enter your passphrase to connect. (Remember to replace the examples below with your own info.)
```
sftp -i ~/.ssh/my-node-ssh-keyname nodeadmin@123.123.123.123
```

<MacWindow>
constellation@MacBook constellation-backup % sftp -i ~/.ssh/my-node-ssh-keyname nodadmin@123.123.123.123<br />
Enter passphrase for key '/Users/netmet/.ssh/my-node-ssh-keyname': <br />
Connected to 1123.123.123.123.<br />
sftp><br />
</MacWindow>

:::success What's my key pair name?
Use the command below to review your `~/.ssh` directory. Alternatively, try looking in your default home directory or where you originally saved your key pair during setup.

```
ls -l ~/.ssh
```
:::

### Locate P12 file

In your sftp session, change directories to `/home/nodeadmin/tessellation` or your custom location, then list out the contents of the directory.

```
cd /home/nodeadmin/tessellation
```
```
ls -l
```
<MacWindow>
sftp> cd /home/nodeadmin/tessellation<br />
sftp> ls -l<br />
-rw-r--r--    1 nodeadmin nodeadmin       31 Jun 11 14:28 my-p12file.p12<br />
sftp> <br />
</MacWindow>

### Download P12 file

You have now confirmed the location and existence of your `p12` file.  You can use the `get` command to get the file.  Since you're in your temp directory, the file will automatically download there.

```
get my-p12file.p12
```

If the file was downloaded correctly, you should see a `100%` status next to the filename.

<MacWindow>
sftp> get my-p12file.p12<br />
Fetching /home/nodeadmin/tessellation/my-p12file.p12 to my-p12file.p12<br />
/home/nodeadmin/tessellation/my-p12file.p12   100%   31     0.3KB/s   00:00<br /> 
sftp> <br />
</MacWindow>

### End session

Exit your sftp session with the `exit` command.
```
exit
```

### Verify download

Back in your local command prompt, execute a long list `ls -l` inside the `constellation-backup` directory you created earlier. Verify that your p12 key file is downloaded.
```
ls -l
```
<MacWindow>
constellation@MacBook constellation-backup % ls -l<br />
total 8
-rw-r--r--  1 netmet  staff  31 Aug 11 18:30 my-p12file.p12
constellation@MacBook constellation-backup %
</MacWindow>

### Transfer to cold storage
- Transfer your newly downloaded **p12 file** to your **cold storage** device.  
- Remember to remove the p12 file and temp backup directory when you are done.


## Restoring your P12

### Install Tessellation

If you are restoring your p12 file to node that has been installed using `nodectl` (recommended): 
1. Make sure you do the installation of `Tessellation` first using `nodectl` before you restore your p12 key file.
2. During the installation you will need to use the **same** p12 file name as you did previously in order to make sure that the configuration `nodectl` builds matches.

### Migrate P12 backup

Migrate your p12 backup from cold storage to your temp `constellation-backup` directory. Make sure you are in the correct directory containing your p12 backup file.

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

### Connect to node

Open an `sftp` session to your node and enter your passphrase to connect. (Remember to replace the examples below with your own info.)

```
sftp -i ~/.ssh/my-node-ssh-keyname nodeadmin@123.123.123.123
```
<MacWindow>
constellation@MacBook constellation-backup % sftp -i ~/.ssh/my-node-ssh-keyname nodadmin@123.123.123.123<br />
Enter passphrase for key 'my-node-ssh-keyname': 
Welcome to Ubuntu 20.04.5 LTS<br />
</MacWindow>

### Locate P12 file

In your sftp session, change directories to /home/nodeadmin/tessellation or your custom location, then list out the contents of the directory.

```
cd /home/nodeadmin/tessellation
```
```
ls -l
```

<MacWindow>
sftp> cd /home/nodeadmin/tessellation<br />
sftp> ls -l<br />
-rw-r--r--    1 nodeadmin nodeadmin       31 Jun 11 14:28 my-p12file.p12<br />
sftp> <br />
</MacWindow>

You have now confirmed the location and existence of your temporary `p12` file.

:::danger IMPORTANT
If you followed the directions to restore a new or existing node, you should have used `nodectl` to install
`Tessellation` properly **using the same P12 filename**.  The directory listing will show your `p12` file with the 
same name that you are attempting to restore.
:::

### Restore P12 file

If you did not create a temporary p12 file, this directory may be empty depending on your custom configuration. Enter the `put` command to restore the p12 file.

```
put my-p12file.p12
```
If the file was downloaded correctly, you should see a `100%` status next to the filename.

<MacWindow>
sftp> put my-p12file.p12<br />
Uploading my-p12file.p12 to /home/nodeadmin/tessellation/my-p12file.p12<br />
my-p12file.12   100%   31     0.6KB/s   00:00    <br />
sftp> <br />
</MacWindow>

### Exit session

Exit your sftp session with the `exit` command. You have successfully completed the restore process.

```
exit
```

:::info p12 Migration - Blue Box
If you are coming from the ***New Node Installation with p12 migration*** document (which shares elements of this document), you can return to that document now by clicking [here](/validate/automated/migrate/nodectl-migrate-upload); otherwise continue forward.
:::
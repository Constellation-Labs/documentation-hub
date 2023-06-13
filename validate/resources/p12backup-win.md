---
title: Backup/Restore P12 on Windows
hide_table_of_contents: false
---

<head>
  <title>Backup or Restore your P12 Key - Windows</title>
  <meta
    name="description"
    content="This document will help to backup or restore a p12 file private key file necessary to join the network."
  />
</head>

It is of _vital_ importance to keep a cold backup of your P12 file.  The term **cold** simply refers to storing your P12 file _offline_, thereby protecting your data from unauthorized access and vulnerabilities. Cold storage may include but are not limited to encrypted hardware wallets or USB keys.

## Backing up your P12

Log into your **local system** and open an [Explorer session](/validate/resources/accessWin).

### Create directory

Create a `temporary` directory to store the `p12` file that you will backup from your **Node**.  

In this example 👇  we created a folder called `constellation-backup` off the root of the user's home directory.  You can place your backup directory anywhere that is most comfortable to your preferences.

![](/img/validator_nodes/back_restore_win7.png)

### Open WinSCP

:::danger IMPORTANT
This documentation uses the **WinSCP** file transfer utility.  You may use whatever program that is most comfortable to your preferences, and adapt this documentation to fit your program's needs.  You can find **WinSCP** with a google
search from your browser, and installation with the default setup is acceptable.

**NOTE**:  During the WinSCP installation, when asked what `window` mode you would like, this documentation assumes you chose the `commander` style.
:::

### Configure connection

Open up `WinSCP`. In the Login window, choose `New Site` and fill in the details of how to access your node.

![](/img/validator_nodes/back_restore_win1.png)

Click on the `Edit` button. 
![](/img/validator_nodes/back_restore_win2.png)

Click on the `Advanced` button.
![](/img/validator_nodes/back_restore_win3.png)

Select `Authentication` from the `left` side panel and then browse to the `SSH key File` that you use to connect to your Node.
![](/img/validator_nodes/back_restore_win4.png)

### Connect to node

Select `OK` and `Save` and then connect to your node.  You should be prompted for your passphrase upon login.  

You may also be prompted with a security warning about your SSH key being unknown or new.  Since we know that our ssh key
is coming from us and is known, we can approve this.

Once you are logged in, you can navigate on the **`left`** panel to your backup directory 

Navigate to your `/home/nodeadmin/tessellation` directory on the **right** panel.

![](/img/validator_nodes/back_restore_win5.png)

### Download P12 file

Drag the p12 file from the **right** panel to the **left** panel.
![](/img/validator_nodes/back_restore_win6.png)

You have successfully downloaded your `p12` file.

### Transfer to cold storage
- Transfer your newly downloaded **p12 file** to your cold storage device.  
- Remember to remove the p12 file and temp backup directory when you are done.

## Restoring your P12 

### Install Tessellation

If you are restoring your p12 file to node that has been installed using `nodectl` (recommended): 
1. Make sure you do the installation of `Tessellation` first using `nodectl` before you restore your p12 key file.
2. During the installation you will need to use the **same** p12 file name as you did previously in order to make sure that the configuration `nodectl` builds matches.

### Migrate P12 file

To restore your p12 key file, copy your backup from cold storage to your Windows system backup directory. Create the directory if not present.
![](/img/validator_nodes/back_restore_win7.png)

:::danger IMPORTANT
If you followed the directions to restore a new or existing node, you should have used nodectl to install Tessellation properly using the same P12 filename. The directory listing will show your p12 file with the same name that you are attempting to restore.
:::

Follow the instructions from the [backup](#backing-up-your-p12) section above.  However, instead of dragging the file from the **right** side to the **left** side, you will reverse this process and drag from the **left** to the **right**. If you are requested to confirm replacement, select `yes`.

Congratulations, you have successfully restored your P12 key file.

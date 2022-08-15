---
title: Backup|Restore P12 Windows
hide_table_of_contents: false
---

<head>
  <title>Backup or Restore your P12 Key - Windows</title>
  <meta
    name="description"
    content="This document will help to backup or restore a p12 file private key file necessary to join the network."
  />
</head>

---

## BACKING UP YOUR P12 
from your Node (Windows)

It is of **vital** importance to keep a **cold** backup of your **p12** file.  The term **cold** simply refers to storing your **p12** file in a location that is air gapped (not connected to the internet).  These locations can include (but are not limited to) 
- Encrypted Wallet Device
- Encrypted USB Key (Device or Thumb-Drive)
- UBS Key (Device or Thumb-Drive) stored in a safe when not in use

#### Instructions

Log into your **local system** and open a new **Explorer** window.

:::note
You can remind yourself how to access your local system and VPS here for [Macintosh](/nodes/resources/accessMac) or [Windows](/nodes/resources/accessWin).
:::

Create a `temporary` directory to store the `p12` file that you will backup from your **Node**.  

In this example 👇  we created a folder called `constellation-backup` off the root of the user's home directory.  You can place your backup directory anywhere that is most comfortable to your preferences.

![](/img/validator_nodes/back_restore_win7.png)

:::danger IMPORTANT
This documentation uses the **WinSCP** file transfer utility.  You may use whatever program that is most comfortable to your preferences, and adapt this documentation to fit your program's needs.  You can find **WinSCP** with a google
search from your browser, and installation with the default setup is acceptable.

**NOTE**:  During the WinSCP installation, when asked what `window` mode you would like, this documentation assumes you chose the `commander` style.
:::

Open up `WinSCP`.  The `Login` sub-window should appear.  Choose the `New Site` and fill in the details of how to access your Node.

![](/img/validator_nodes/back_restore_win1.png)

Click on the `Edit` button. 
![](/img/validator_nodes/back_restore_win2.png)

Click on the `Advanced` button.
![](/img/validator_nodes/back_restore_win3.png)

Select `Authentication` from the `left` side panel and then browse to the `SSH key File` that you use to connect to your Node.
![](/img/validator_nodes/back_restore_win4.png)

Select `OK` and `Save` and then connect to your Node.  You should be prompted for your `passphrase` upon login.  

You may also be prompted with a `security warning` about your SSH key being unknown or new.  Since we know that our `ssh key`
is coming from us and is known, we can approve this access, and continue.

Once you are logged in, you can navigate on the **`left`** panel to your backup directory 

Navigate to your `/home/nodeadmin/tessellation` directory on the **right** panel.

![](/img/validator_nodes/back_restore_win5.png)

Drag the `p12` file from the **right** panel to the **left** panel.
![](/img/validator_nodes/back_restore_win6.png)

You have successfully downloaded your `p12` file.

#### Finally 
- Move your `p12` file out of your `temporary` folder and onto a **cold storage** device, for safe keeping.
- Delete your `p12` backup from your `temporary` directory.

## RESTORING YOUR P12 
to your Node (Windows)

:::danger IMPORTANT
If you are restoring your `p12` file to Node that has been installed using `nodectl` (recommended): 
1. Make sure you do the installation of `Tessellation` first using `nodectl` before you restore your `p12` key file.
2. During the installation you will need to use the **same** `p12` file name as you did previously in order to make sure that the configuration `nodectl` builds matches.
:::

In order to restore your **p12** key file.

1. Copy your **p12** backup file from your **cold storage** device to your Windows system's backup directory.  *Create the directory is not present.*
![](/img/validator_nodes/back_restore_win7.png)

:::danger IMPORTANT
If you had followed the directions to restore a new or existing Node, you should have used `nodectl` to install
`Tessellation` properly **USING THE SAME P12 FILE NAME**.  The directory listing will show your `p12` file with the 
same name as the `p12 file` name you are attempting to restore.  When you drag the file from the `local` system to your `VPS`, it will
automatically over-write the existing `p12` (*or is may ask you to confirm before continuing*).
:::

2. Follow the instructions from the [backup](#backing-up-your-p12) section above.  However, instead of dragging the file from the **right** side to the **left** side, you will reverse this process and drag from the **left** to the **right**.  
*If you are requested to confirm `replacing` the file, you will say `yes`.*

**Congratulations, you have successfully restored your P12 key file.**

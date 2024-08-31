---
title: SSH Keys on Windows
hide_table_of_contents: false
---

<head>
  <title>SSH Key Creation for Windows</title>
  <meta
    name="description"
    content="An understanding on how to create SSH Keys for your VPS from Windows OS"
  />
</head>

:::info 📺 Video tutorial
If you're more of a visual learner, watch the [video walkthrough](https://www.youtube.com/embed/LMxmJ7h0RQw) of this tutorial.
:::

### CREATE SSH KEYS ON USING WINDOWS 10

There are many different utilities that you can use with your Windows 10 (or other Windows versions).  One very simple and popular utility (application) is `Putty` and `PuttyGen`

Throughout this tutorial, we will use the `Putty` suite of tools.

Download the latest version of PuTTy from the following location

**[Download Putty Page is HERE](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)**

You should choose the `64-bit x86` link.

![](/img/validator_nodes/node-putty1.png)

Also download the `64-bit x86` puTTyGen utility.

![](/img/validator_nodes/node-putty2.png)

Open up `PuTTyGen.exe` by clicking on the `.exe` file. 

Change the bit size to `4096` (at the bottom right of the screen) and click on Generate Button. 

You will be asked to move the mouse around randomly and rapidly inside the box until the progress indicator completes and the screen changes.

![](/img/validator_nodes/node-putty3.png)

![](/img/validator_nodes/node-putty4.png)

Supply and Confirm a **complex key passphrase**. 

Copy the Public Key into a text editor for later reference.  This will be used later on our Cloud Provider of choice during the creation process of your VPS (virtual private server).

:::note
Make sure to copy all of the text inside the public key box
:::

![](/img/validator_nodes/node-putty5.png)

Please save your `public` and `private` keys to a safe place. 

:::info
The file for the private key should be saved with the **.ppk** extension if you are using Putty and Windows.

**ppk** = `puTTy private key`
:::

![](/img/validator_nodes/node-putty6.png)

| File Name | Description |
| --- | --- |
| **cn_node_id.ppk** | This file is the `private` key of our key pair. |
**cn_node_id.pub** | This file is the `public` key of our key pair. |

Now that the public and private keys are saved on your system.  Remember where you saved your keys.  Generally, you can save these keys on a USB stick (or other cold storage mechanism) and save in a safe secure place.

| Type | Description |
| --- | --- |
| **hot** | This file is located on a device that has Internet access and is vulnerable to accessibility through security holes, etc. |
**cold** | The file is located on a device with no Internet access. |

Thank you-
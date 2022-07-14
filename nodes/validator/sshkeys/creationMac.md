---
title: Macintosh SSH Key Creation
hide_table_of_contents: false
---

<head>
  <title>SSH Key Creation for Mac</title>
  <meta
    name="description"
    content="An understanding on how to create SSH Keys for your VPS from MaxOS"
  />
</head>

### Visual Learners

If you enjoy visual learning, you can view the following YouTube series on how to handle the creation and build out of a VPS in
various Cloud Provider settings.   Please **like** and **subscribe** so you are alerted to new videos as they are produced.

<iframe width="100%" height="380" src="https://www.youtube.com/embed/LMxmJ7h0RQw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### CREATE SSH KEYS ON USING A MACINTOSH

On your local machine, open up a new Apple/Mac terminal. We will use the `ssh-keygen` command with a byte of `4096`

Open up a new terminal session
1. Click on the desktop to change your top menu bar to `Finder` setup.
2. Click on `Go` and choose `Utilities`
![](/img/validator_nodes/nodes-mac-utilities.png)
3. Click on `Terminal`.
![](/img/validator_nodes/nodes-mac-terminal.png)

This will open up a terminal and drop you directly into your `home` directory for the current user you signed on with on your Macintosh system.

We can issue a `pwd` at the command prompt to `print working directory` and view our location. The below command shows that the `hostname` for the local Macintosh is `netmet-MBP` and the user name is `netmet` which when put together forms `netmet@netmet-MBP`.

![](/img/validator_nodes/node-pwd-cmd.png)

#### Generate our `ssh key pair`.

On your local machine from our Apple/Mac terminal. We will use the **`ssh-keygen`** command with a byte size of **`4096`**

```
ssh-keygen -b 4096
```

The built-in `ssh-keygen` utility will begin and prompt with something similar to below: 

:::note
In this example, the `/Users/netmet/.ssh/id_rsa` is a default location and name for the SSH key pair that will be generated. Simply hitting enter at this prompt, will use the name `id_rsa` and place the file in a hidden `.ssh` directory of the root of your home directory.
:::

The prompt is asking you if you want to save the key pair (files) that will be generated in this directory. It is recommended that you place the key files in a hidden `.ssh` directory. 


![](/img/validator_nodes/node-mac-sshkey1.png)

Below you can see that `cn_node_id` was entered as the name we want to call our key pair. The naming convention of `cn` **Constellation Network**, `node` for our **Node**, and `id` for **identification file** is used.  You can choose a name to your liking; however, it is recommended that you use a name that will help you identify what the SSH key pair is related to (used for).

:::info
We want to put the enter path to the location of our SSH key pair to make sure the `ssh-keygen` utility places the newly created key pair in the proper location.   
:::

![](/img/validator_nodes/node-mac-sshkey2.png)

The next line will request a passphrase. 

Enter in a complex password here. Don't use something simple. **Write it down** in the **secure location**, or save it to a secure password
mechanism, application, tool, or other.

```
Enter passphrase (empty for no passphrase):
```

After you enter and confirm the passphrase, the key pair (files) **`Public`** and **`Private`** will get generated. 

:::note
The output may not match exactly, this is OK.
:::

```
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in cn_node_id
Your public key has been saved in cn_node_id.pub
The key fingerprint is:
SHA256:pbMi8Rm73pgQWUxzVag6VDBqi/sI9sVjVdKtkBmuCVw netmet@netmet-MBP
The key's randomart image is:
+---[RSA 3072]----+
| E=o...o. |
| . .+.+* o |
| oo oB +.. |
| o.++ =o. |
| . =+.oS. |
| ..+++ o |
|... o==.. |
|...ooo.* |
| ....= . |
+----[SHA256]-----+
```

Changing our directory (off the root of our home directory) to the `.ssh` directory

Issuing a `ls -la` (show all files including hidden files)

:::note
In the command `ls -la` the `l` is the letter L not the number 1
:::

![](/img/validator_nodes/node-mac-sshkey3.png)

| File Name | Description |
| --- | --- |
| **cn_node_id** | This file is the `private` key of our key pair. |
**cn_node_id.pub** | This file is the `public` key of our key pair. |

Thank you-
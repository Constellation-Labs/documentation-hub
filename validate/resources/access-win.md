---
title: Remote Access on Windows
hide_table_of_contents: false
---

<head>
  <title>Access your VPS to create your Node - Windows</title>
  <meta
    name="description"
    content="Documentation on how to access a newly created VPS (Virtual Private Server) in the Cloud from your local Windows system."
  />
</head>

## Video Tutorial
:::info 📺 Video tutorial
If you're more of a visual learner, watch the [video walkthrough](https://www.youtube.com/embed/7lhiuFtrOzU) of this tutorial.
:::

## Reference
#### Definitions table to follow along in this document

| Key Value | Value |
| --------- | ----- |
| SSH Key File | cn_node_id
| Remote IP address of our VPS | `113.113.113.113` |
| SSH Key Pair File Location | `Users/.ssh/home/netmet`|
| Local System | The system used to access our remote VPS |
| Remote System | The system (VPS) we created in the prior documentation (DO, AWS, or GCP) that we are connecting to |
| [...] | Indicates redacted text and/or information |

:::danger REMINDER
We are `pretending` our remote location (VPS) has an external IP address of `113.113.113.113` and our user name is `netmet` ⬅️ do **not** use this!
:::

:::info
In previous tutorials we downloaded [puTTY](/validator/creation-win.md).  We will be returning to this application for the rest of this document.  You are free to use whatever terminal emulation program that suites you best.
:::

## Connect via Windows

Time to connect to our newly created instance!

### Setup Hostname or IP
Start up **Putty.exe** and in the `Host Name (or IP address)` place the IP address of your VPS instance.

:::danger
`113.113.113.113` is a fake IP address: Do not use.
:::

### Setup TCP port

![](/img/validator_nodes/nodeAccessWin1.png)
Set the **port** (if not already there) to **22**

![](/img/validator_nodes/nodeAccessWin2.png)
We will `save` our work for use later, by saving this as a **session**. 

### Define session Name

Give it a **name** that suits your needs and describes this session properly.

![](/img/validator_nodes/nodeAccessWin3.png)

### Auto Login
Click on the **data** element from the menu `(under Connection)`.

![](/img/validator_nodes/nodeAccessWin4.png)
Enter **root** in the auto-login option. We will be changing this later.

:::danger IMPORTANT
Different cloud providers use different default users to access your VPS for the first time.  **GCP** and **DO** use `root` while **AWS** uses `ubuntu`.   We will use `root` in our examples...  make sure to change this to `ubuntu` if you are using **AWS**, or review the documentation for the provider of your choice to determine their default username.
:::

![](/img/validator_nodes/nodeAccessWin5.png)

### SSH session

Expand the **SSH** section.
![](/img/validator_nodes/nodeAccessWin6.png)

Click **Auth** under the **SSH** section under **Connection** section.
![](/img/validator_nodes/nodeAccessWin7.png)

Click on the **Browse** and `navigate` to your **SSH Key File**. Choose the file and make sure it populates into the `Private Key box`. Optionally you can type the file's full PATH into the box.
![](/img/validator_nodes/nodeAccessWin8.png)

#### Upgrade Notice &gt;0.76

:::info Feature Change
Version &gt; `v0.76` updated the `SSH private key location` to its own separate section.
:::
![](/img/validator_nodes/putty078-creditional-change.jpg)

### Persist session definition

Click **Session** section (top of menu) and click on the **Save** button. This will persist our session information for later.
![](/img/validator_nodes/nodeAccessWin9.png)

### Create remote connection

Click **Open**.

![](/img/validator_nodes/nodeAccessWin10.png)
A **new** window should open, it will attempt to connect into an `SSH session` with the parameters we specified. The `SSH Session` should challenge you for a **passphrase** for the **Key Pair** file that your VPS was setup with, during the installation.

![](/img/validator_nodes/nodeAccessWin11.png)
After successfully entering in that password, you should be `connected` and have a prompt!

![](/img/validator_nodes/nodeAccessWin12.png)

---

**Excellent** you are now on your remote system through your local system!



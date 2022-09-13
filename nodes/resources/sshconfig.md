---
title: Change SSH Connection Port
hide_table_of_contents: false
---

<head>
  <title></title>
  <meta
    name="description"
    content="Documentation on how to change your SSH ingress connection port from the well-known port 22."
  />
</head>


This process guides the Node Operator through changing the **SSH** connection `standard well known port (22)` to a custom port, to increase the security of your Node (VPS).

## Explanation

SSH `Secure Shell Protocol` is the standard protocol used to gain remote access to computer systems (servers), for administration purposes.  In our case, mostly `VPS` (virtual private server) systems in the cloud.  

Utilizing **TCP/IP** (transfer control protocol / Internet Protocol ) a connection is made **by default** via the well-known port `22`. This connection is an **encrypted session** setup between the computer/server operator on the local end of the connection (at a local terminal or bastian host), and the remote server.  **SSH Key Pairs** are used to perform authentication and provide the encryption/decryption mechanisms.  

### Centralized 
In **CENTRALIZED** infrastructure, where there is a centralized security setup, it is easier to keep a well-known port in place.  In order to gain access to the centralized network, you must traverse several layers of security before you are able to access these internal servers.

### Decentralized 
In **DECENTRALIZED** setups; such as in the case for Constellation Network HyperGraph, the security generally setup in centralized environments are not generally obtainable.  Instead, access to the **VPS** systems are direct.  This opens up vulnerability to nefarious actors to everything from **DoS** (Denial of Service) to **unauthorized access attempts**.

To add just a little more ambiguity to our VPS security, **although this is just another simple step to avoid detection**, we can steer away from using the standard port that hostile actors may scan for when an attack is in action.  

:::danger IMPORTANT
This measure is an easy configuration change that simply creates another avoidance technique, **however** it does not protect beyond creating an extra step for hackers to take to find your system and attempt to disrupt in *whatever* way.  

**You still need to keep an active eye on your Validator Node to make sure it is running properly and not compromised.** 
:::

### Example Only Usage
:::note Please Note
This guide uses as an example custom `port 2222`, but the node operator needs to decide themselves which custom port between `1025` and `7999`, or `10000` through `65535`, they would like to configure.

Ports `8000-9999` maybe reserved for **HyperGraph State Channels** and the **Global Layer0**, therefore their usage is discouraged (but possible as well).
:::

## STEPS
### VPS Firewall Settings

:::danger REMINDER
`port 2222` ⬅️ You are free to use this address; however, since it is the example in the documentation, if too many Node Operators use this address it will be easy to identify when equating with the Constellation Network HyperGraph.
:::

##### Update your VPS's firewall settings to allow `port 2222`.

Log into your **VPS provider** administration console and add a **new rule** allowing inbound connections to `port 2222` restricting the access only to the local IP. 

The Firewall should contain an existing entry for SSH access on **port 22**.  Copy this rule adding in our new `custom port 2222`.  In the example, `111.111.111.111/32` is the local IP.

Do **NOT** delete the existing port `22` rule.  Once we verify our new access works, we will remove the old rule in the last steps.

*Example shows Digital Ocean*

![](/img/validator_nodes/ssh_port_inbound_rules.png)

### Edit SSH daemon config

Access your **VPS** [ Node ] in order to update the `sshd_config` file.  This is the default global configuration file for your VPS's  Debian OS.

:::note
You can remind yourself how to access your VPS here for [Macintosh](/nodes/resources/accessMac) or [Windows](/nodes/resources/accessWin).
:::

Windows should use a terminal emulator such as **PuTTy**.

Macintosh can use the below :point_down:
```
ssh -i <your_identify_file> nodeadmin@<your_ip_address>
```

From your VPS, we will access the `sshd_config` with **sudo** (super user).

```
sudo nano /etc/ssh/sshd_config
```

Navigate to the line where you see `#Port 22`, using the arrows on your keyboard.

![](/img/validator_nodes/ssh_port_config01.png)

If there is a `#` symbol (comment) in front of `Port 22`, remove the `#` and replace the value 22 with a port number of your choosing, between 1025 and 7999 or 10,000 through 65535.

Let’s take the example `2222`.

![](/img/validator_nodes/ssh_port_config02.png)

On your keyboard, press `CTRL + O` simultaneously. You should see this message at the bottom of the screen. Hit `Enter` to confirm.

![](/img/validator_nodes/ssh_port_config03.png)

On your keyboard, press `CTRL + X` simultaneously to close the text editor. You should now be back on your regular command prompt.

### Confirm configuration
Issuing the following command :point_down: we should see our updated `Port 2222` echo'ed to the screen
```
sudo cat /etc/ssh/sshd_config | grep "Port 2222"
```
*If you do not see `Port 2222` echo'ed to the screen (replace 2222 with your port number), you should repeat the steps above :point_up_2:*

### Reload the SSHd configuration

We need to restart the SSH service

```
sudo service sshd restart
```

### Windows Users - PuTTy Config

Windows users now need to update their terminal session configuration.

Since our `SSH port` has changed, the connection cannot be established any longer using the original well-known `port 22`.  The SSH clients needs to be updated to use the new port defined, by the node operator.

From **PuTTy**, load your `TestNet` profile configuration. On the top portion, next to the `IP Address` enter in the new custom `port 2222` port, in the `Port` input box provided.

![](/img/validator_nodes/ssh_port_config04.png)

Makes sure to `Save` the new profile settings to your `TestNet` configuration.

:::success IMPORTANT
Test your connection with your **new** port 2222
:::

### Macintosh Users - Terminal

The **old** command used to connect to our VPS [node] using the standard SSH `port 22` looked like this:
```
ssh -i ~/.ssh/cn-node-id nodeadmin@111.111.111.111
```

The command will now change to **specifically** state the `port` we will be using.  *In our example `port 2222`*.
```
ssh -p 2222 -i ~/.ssh/cn-node-id nodeadmin@111.111.111.111
```

### Remove old SSH rule

Now that we have tested and successfully accessed our VPS [Node] with our new port, we want to remove the original `port 22` **SSH** rule from our VPS firewall settings.

Log into your VPS provider, in the Firewall configuration delete the inbound entry related to the SSH standard port (22).

![](/img/validator_nodes/ssh_port_config05.png)

Done!

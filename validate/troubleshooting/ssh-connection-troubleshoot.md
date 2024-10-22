---
title: SSH Connection Troubleshooter
hide_table_of_contents: false
hide_title: false
---

import MacWindow from '@site/src/components/global/MacWindow';

<head>
  <title>Constellation nodectl utility</title>
  <meta
    name="description"
    content="nodectl utility upgrade tessellation"
  />
</head>

This guide is specifically for troubleshoot **an existing** node that you are unable to create a remote connection with, that previously worked.

## ◽ Common Troubleshooting
1. Verify the username for the VPS you are connecting to is correct.
1. Verify your SSH key pair file names.
1. Verify the permissions on your SSH key pair are correct (read only).
1. Verify that the public key for your VPS is present on the server. 
1. Verify that you have your private key on your local system and that you have the correct name for this file.

## ◽ Local IP address change 

One of the leading causes of connection problems occurs when the system used to establish the remote connection to your node—whether it’s a Macintosh, Windows, or Linux machine—**has undergone changes**.

Many internet service providers (ISPs) lease IP addresses to their customers for extended but temporary periods. In addition, due to factors like inactivity, lease expiration, equipment updates, or network reconfiguration, your local IP address may change. 

ISPs implement this process to “recycle” IP addresses from a limited pool, ensuring availability for all customers, especially when the number of customers exceeds the available IP addresses assigned to that provider.

### ◽ Symptoms

- Your PuTTy session may just sit with a blank screen for a period of time and then alert you with a connection timeout error.

- Your terminal session may just sit unresponsive for a period of time and then alert you with a connection timeout error.

> Example

- A Macintosh MackBook Pro is sitting at the office of a Node Operator and attempts to **connect** to their node to do normal checkups during normal morning tasks.  The last time they connected to their node was "yesterday".   
- The node's IP address is `13.13.13.13`.
- The node's SSH connection port is `22` (default).
- The private key used to connect with the node is called `my_identity_file`

<MacWindow>
user@my-MacBook-Pro ~ % ssh -i .ssh/my_identity_file nodeadmin@13.13.13.13<br />
ssh: connect to host 13.13.13.13 port 22: Operation timed out<br />
user@my-MacBook-Pro ~ %<br />
</MacWindow>

### ◽ Step To Fix

1. Open a web browser and navigate to [www.whatismyip.com](https://www.whatismyip.com).
1. Record the `My Public IPv4:` for your notes.
1. Connect to your VPS's web management console.
1. Update your SSH rule in your **firewall settings**.
   - [AWS](/validate/setup-guides/aws/sg)
   - [Digital Ocean](/validate/setup-guides/do/sg-droplet)
   - Hetzner follow the [Digital Ocean](/validate/setup-guides/aws/do/sg-droplet) guide and adapt to Hetzner's user experience UI.
1. Attempt to connect again

## ◽ SSH Key issue

### ◽ Local
This is an unlikely potential that your SSH private key located on your local system has become corrupted or its location changed.  Make sure you are able to find your private key, the name is correct, and the location path is valid.  

You can also attempt to restore your private keys from your backup.  

:::danger IMPORTANT
If you do not have a backup, once this connection issue is fixed, create a backup.
:::

### ◽ Remote

If you have access to your VPS through another method, such as the web console provided by your cloud provider, validate that the user you are attempting to connect as has the public SSH key correctly placed in the .ssh directory of the remote system.

For our examples, our username is `nodeadmin`.

1. Access your VPS, and refer to [SSH Explanation](/validate/validator/ssh-keys), [Mac SSH Guide](/validate/resources/accessMac), and [Windows SSH Guide](/validate/resources/accessWin) for detailed understanding.
1. navigate to your `.ssh` directory
```
cd ~/.ssh
```
3. Do a directory listing of that directory (letter `l` not number `1`).
```
ls -l
```
4. If you do not see your SSH key, you may need to figure out a way to upload your SSH public key back to the server.  You may also look in the `root`, `admin`, or `ubuntu` user's directory for the SSH public key.
```
ls -l /root/.ssh/
```
```
ls -l /home/ubuntu/.ssh
```
```
ls -l /home/admin/.ssh
```

If you find your key with a `_backup` attached to the name of the file, issue the following command and check again:
```
sudo nodectl enable_root_ssh
```
Copy the SSH key over to your `nodeadmin` directory.
```
sudo cp /root/.ssh/mypublickey.pub /home/nodeadmin/.ssh/mypublickey.pub
```
Change the ownership to `nodeadmin`
```
sudo chown nodeadmin:nodeadmin /home/nodeadmin/.ssh/mypublickey.pub
```
Once you have regained access to your `nodeadmin` account, it is a good idea to disable the root access again to help mitigate nefarious access attempts against your `root` user. 
```
sudo nodectl disable_root_ssh
```
## ◽ Cloud Service Outages
#### Cloud Provider Outage

Check with your cloud provider by attempting to access the main web console. Typically, if you can access the console, there will be an alert notifying you of potential outages in various regions where your cloud provider operates.

If you are unable to access the web console, this is a sign that the provider is having issues.  Do a search engine inquiry to see if any outage reports are available. 

#### VPS Outage
From your cloud provider's web console, check your Instances page to ensure your VPS is running and is not reporting errors.

## ◽ Internet Down
This may be an obvious reason for why you are unable to access your node; however, if you have no internet connection, verify your access and try again later.


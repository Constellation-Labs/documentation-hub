---
title: New Install - Access VPS
hide_table_of_contents: false
---
<intro-end />

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';
import MacWindow from '@site/src/components/global/MacWindow';

<head>
  <title>Constellation Network automation with nodectl</title>
  <meta
    name="description"
    content="nodectl installation of new Node"
  />
</head>

This section begins the step-by-step follow along instructions.

### Steps
The following steps will be discussed one at a time 👇 below.

1. If required, reminder yourself about SSH Concepts by clicking [here](/validate/validator/ssh-keys).
1. Open up a terminal session within Macintosh or Linux, or a remote connection application, such as PuTTy, for Windows users.
1. Issue the SSH connection request from your local system (Macintosh, Windows, or Linux).  This is just your local desktop or laptop computer.

### Issue Connection Request
#### Access your VPS
SSH into your Debian based OS system. 

- Replace **my-ssh-pem-file** with the name of your ssh key file.
- Replace **113.113.113.113** with the IP address of your VPS.

```
ssh ubuntu@113.113.113.113 -i my-ssh-pem-file
```
<MacWindow>
netmet@netmet-MacBook-Pro .ssh % ssh ubuntu@113.113.113.113 -i my-ssh-pem-file<br />
The authenticity of host '113.113.113.113 (113.113.113.113)' can't be established.<br />
ED25519 key fingerprint is SHA256:dU7879879879879789879878977Fiuiuiuiuiuiuug1.<br />
This key is not known by any other names<br />
Are you sure you want to continue connecting (yes/no/[fingerprint])? yes<br />
Warning: Permanently added '113.113.113.113' (ED25519) to the list of known hosts.<br />
Welcome to Ubuntu 22.04.2 LTS (GNU/Linux 5.15.0-1031-aws x86_64)<br />
<br />
 * Documentation:  https://help.ubuntu.com<br />
 * Management:     https://landscape.canonical.com<br />
 * Support:        https://ubuntu.com/advantage<br />
<br />
  System information as of Mon May  1 19:54:29 UTC 2023<br />
<br />
  System load:  0.0703125          Processes:             168<br />
  Usage of /:   1.0% of 154.88GB   Users logged in:       0<br />
  Memory usage: 0%                 IPv4 address for eth0: 172.31.90.241<br />
  Swap usage:   0%<br />
<br />
Expanded Security Maintenance for Applications is not enabled.<br />
<br />
0 updates can be applied immediately.<br />
<br />
Enable ESM Apps to receive additional future security updates.<br />
See https://ubuntu.com/esm or run: sudo pro status<br />
<br />
The list of available updates is more than a week old.<br />
To check for new updates run: sudo apt update<br />
<br />
<br />
The programs included with the Ubuntu system are free software;<br />
the exact distribution terms for each program are described in the<br />
individual files in /usr/share/doc/*/copyright.<br />
<br />
Ubuntu comes with ABSOLUTELY NO WARRANTY, to the extent permitted by<br />
applicable law.<br />
<br />
To run a command as administrator (user "root"), use "sudo command".<br />
See "man sudo_root" for details.<br />
<br />
ubuntu@ip-172-31-90-241:~$<br />
</MacWindow>

### Explained

1. We issued the connection request with the `ssh` command.
1. Because this was our initial attempt to access this VPS, a warning message was presented, cautioning us about connecting to what the local computer system deemed an "unknown" connection, potentially of a malicious nature. However, since we are aware that this request was intentionally initiated by us, we can proceed with the connection.
1. We type `yes` to proceed with accessing the new VPS (and future Node). This action informs the local computer system not to prompt us again, indicating our trust in this system. The local computer will now remember that it can trust this system for future connection requests, enabling access to this new VPS system.  We will not be challenged with this warning again.
1. The `MOTD` (Message of the Day) banner displays basic system related details of the VPS we connected into; along with, security patch information. We can review this information, but no action is required for now (until later in the documentation).
1. Finally we see `ubuntu@ip-172-31-90-241:~$`, on the last line.  The `ubuntu` before the `@` indicates that the username we logged into as; is called: `ubuntu`.  

##### Likely alternate usernames
You may most likely see:
  - ubuntu
  - admin
  - root

Throughout the rest of this documentation, you should replace the name `ubuntu` with the **user you have identified above**.

#### Quick Install

If you reached this documentation from the quick installation guide, you should continue to the next section of the normal installation to apply updates.  Alternatively, you can return the quick install guide by clicking [here](/validate/automated/quickInstall/nodectl-qi-install-prep#preparation-assumptions)
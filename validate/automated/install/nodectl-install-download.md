---
title: New Install - Download nodectl
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

### Latest Release
Download the latest version of nodectl.   

:::warning
Make sure you download the latest version of nodectl.  Even though the documentation may reflect the current latest version, it is recommended to verify the version is the latest, to ensure your Node will have the latest features and capabilities.

Documentation can become outdated; however, the basic methods and actions will remain the same; as well as, Constellation will update the documentation on a need-to basis.
:::

### Download Release
Open your web browser and enter in:
```
https://github.com/StardustCollective/nodectl/releases
```
Access [nodectl releases](https://github.com/StardustCollective/nodectl/releases) 

1. Click on the version that has the `latest` tag.
![](/img/validator_nodes/nodectl_install_release1.png)
2. Find the Manual Installation section
3. Find the appropriate link based on the architecture that matches your VPS.
4. highlight and copy to your clipboard or click on the clipboard icon on the right side of the box with the link embedded.

![](/img/validator_nodes/nodectl_install_release2.png)

5. Paste the copied link into your VPS terminal window.

### Navigation Details

Windows users using PuTTy should make sure the PuTTy window is in focus (selected) and then `right-click` with the mouse to paste the link into your PuTTy terminal.  

A `right-click` is the paste function in PuTTy.

Macintosh users using a normal `terminal` will make sure the terminal window is in focus (selected) and then use <kbd>command</kbd>+<kbd>v</kbd> to paste into the terminal.

The command pasted into your VPS 👇 will be a collation of commands in a single line of execution.

### Execute the download

```
sudo nodectl auto_restart disable; sudo wget https://github.com/netmet1/constellation_testnet_nodectl/releases/download/v2.15.2/nodectl_x86_64 -P /usr/local/bin -O /usr/local/bin/nodectl; sudo chmod +x /usr/local/bin/nodectl; sudo nodectl -v
```
#### Execution and output results
<MacWindow>
ubuntu@ip-172-31-90-241:~$ sudo nodectl auto_restart disable; sudo wget https://github.com/netmet1/constellation_testnet_nodectl/releases/download/v2.15.2/nodectl_x86_64 -P /usr/local/bin -O /usr/local/bin/nodectl; sudo chmod +x /usr/local/bin/nodectl; sudo nodectl -v<br />
sudo: <b>nodectl: command not found</b><br />
--2023-05-01 20:16:11--  https://github.com/netmet1/constellation_testnet_nodectl/releases/download/v2.7.0/nodectl_x86_64<br />
Resolving github.com (github.com)... 113.113.113.113<br />
Connecting to github.com (github.com)|113.113.113.113|:443... connected.<br />
HTTP request sent, awaiting response... 302 Found<br />
Location: https://objects.githubusercontent.com/github-production-release-asset-2e65be/543118169/2cd1e3c0-b1d1-438b-853e-7c550358d624?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20230501%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230501T201611Z&X-Amz-Expires=300&X-Amz-Signature=0bd2f9432a9886f18219b71423de0665b2c7d586d47e34115dabf60e88aadaaf&X-Amz-SignedHeaders=host&actor_id=0&key_id=0&repo_id=543118169&response-content-disposition=attachment%3B%20filename%3Dnodectl_x86_64&response-content-type=application%2Foctet-stream [following]<br />
--2023-05-01 20:16:12--  https://objects.githubusercontent.com/github-production-release-asset-2e65be/543118169/2cd1e3c0-b1d1-438b-853e-7c550358d624?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20230501%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230501T201611Z&X-Amz-Expires=300&X-Amz-Signature=0bd2f9432a9886f18219b71423de0665b2c7d586d47e34115dabf60e88aadaaf&X-Amz-SignedHeaders=host&actor_id=0&key_id=0&repo_id=543118169&response-content-disposition=attachment%3B%20filename%3Dnodectl_x86_64&response-content-type=application%2Foctet-stream<br />
Resolving objects.githubusercontent.com (objects.githubusercontent.com)... 185.199.110.133, 185.199.111.133, 185.199.108.133, ...<br />
Connecting to objects.githubusercontent.com (objects.githubusercontent.com)|185.199.110.133|:443... connected.<br />
HTTP request sent, awaiting response... 200 OK<br />
Length: 8888296 (8.5M) [application/octet-stream]<br />
Saving to: ‘/usr/local/bin/nodectl’<br />
<br />
nodectl                        100%[==================================================>]   8.48M  --.-KB/s    in 0.09s<br />
<br />
2023-05-01 20:16:12 (90.5 MB/s) - ‘/usr/local/bin/nodectl’ saved [8888296/8888296]<br />
<br />
No installation found<br />
Creating log directory for nodectl<br />
  VERSION&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MAJOR&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MINOR&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PATCH <br />                                                                   
  v2.15.2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;13&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0<br />           
<b>ubuntu</b>@ip-172-31-90-241:~$ <br />
</MacWindow>

In the example output 👆, an expected error is shown in **bold** (see [explained](#explained)).

:::info p12 Migration
If you are coming from the ***New Node Installation with p12 migration*** document (which shares elements of this document), you can return to that document now by clicking [here](/validate/automated/migrate/nodectl-migrate-upload); otherwise continue forward.
:::

## Explained 

Following the command above will execute 3 commands synchronously (in order).

1. It will attempt to disable the `auto_restart` feature of nodectl and fail.  This is excepted behavior because we have not turned our VPS into a Node yet.  The combination of commands executed is intended for both new installations and upgrades, where the auto_restart feature may be engaged. The auto_restart feature cannot be running during an upgrade.
1. It will utilize the `wget` utility; that comes preinstalled on most Debian based distributions, to download the nodectl binary from GitHub and place it in the correct location on your VPS for properly future use.
1. It will then execute the `version` command.
1. Prior to displaying the version for our review, since this is the first run of the nodectl utility, nodectl will automagically setup the logging mechanism.  These log files can be useful when troubleshooting nodectl related issues, later on during normal operation.
1. Finally, nodectl displays the version of nodectl, which will help us determine if the utility properly downloaded; as well as, at the desired version.

The username we are logged in with is also shown in **bold** (in the example above 👆 only - it will not be colored or highlighted on your real VPS output) to help us interpret the output correctly.


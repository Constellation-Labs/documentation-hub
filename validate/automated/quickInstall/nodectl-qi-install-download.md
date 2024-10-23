---
title: Quick Install - Download
sidebar_label: New Quick Install - Download 
hide_table_of_contents: False
---
<intro-end />

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';
import MacWindow from '@site/src/components/global/MacWindow';

<head>
  <title>Constellation Network Automation with nodectl</title>
  <meta
    name="description"
    content="nodectl new quick installation"
  />
</head>

We are logged into your freshly installed [VPS](/validate/setup-guides/) and will begin our installation.

## Download nodectl

We can download nodectl using the linux `curl` command; however, we do not need to worry about how to use this command.

Instead we can reach out to the `nodectl` GitHub repo and copy the command used to download, setup permissions, and move to the proper location on your VPS to function properly.

[Download nodectl](https://github.com/StardustCollective/nodectl/releases) from the **StardustCollective** GitHub repository.

> Example Only
From our assumptions we will pull down `v2.15.2` with the following command, but please make sure you only download a version with the `Latest` tag.

```
sudo wget -N https://github.com/stardustcollective/nodectl/releases/download/v2.15.2/nodectl_x86_64 -P /usr/local/bin -O /usr/local/bin/nodectl; sudo chmod +x /usr/local/bin/nodectl; sudo nodectl -v
```
<MacWindow>
ubuntu@ip-172-31-23-246:~$ sudo wget -N https://github.com/stardustcollective/nodectl/releases/download/v2.15.2/nodectl_x86_64 -P /usr/local/bin -O /usr/local/bin/nodectl; sudo chmod +x /usr/local/bin/nodectl; sudo nodectl -v
</MacWindow>

### Output

nodectl will be downloaded and you should see the `version information` at the end of the command results.  This will confirm that `nodectl` is downloaded, placed in the proper location, and executable. 

<MacWindow>
--2024-04-25 12:47:51--  https://github.com/stardustcollective/nodectl/releases/download/v2.15.2/nodectl_x86_64<br />
Resolving github.com (github.com)... 113.113.113.113<br />
Connecting to github.com (github.com)|113.113.113.113|:443... connected.<br />
HTTP request sent, awaiting response... 302 Found<br />
Location: https://objects.githubusercontent.com/github-production-release-asset-2e65be/611343043/008ad8a2-5ecc-4bf4-bce3-da35cbe465b2?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20240425%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240425T124751Z&X-Amz-Expires=300&X-Amz-Signature=5c0f1b7cc14e0a8fe43da07fec432ca942c89dcacc3151c97095e5fed85884ff&X-Amz-SignedHeaders=host&actor_id=0&key_id=0&repo_id=611343043&response-content-disposition=attachment%3B%20filename%3Dnodectl_x86_64&response-content-type=application%2Foctet-stream [following]
--2024-04-25 12:47:51--  https://objects.githubusercontent.com/github-production-release-asset-2e65be/611343043/008ad8a2-5ecc-4bf4-bce3-da35cbe465b2?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20240425%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240425T124751Z&X-Amz-Expires=300&X-Amz-Signature=5c0f1b7cc14e0a8fe43da07fec432ca942c89dcacc3151c97095e5fed85884ff&X-Amz-SignedHeaders=host&actor_id=0&key_id=0&repo_id=611343043&response-content-disposition=attachment%3B%20filename%3Dnodectl_x86_64&response-content-type=application%2Foctet-stream<br />
Resolving objects.githubusercontent.com (objects.githubusercontent.com)... 185.199.110.133, 185.199.111.133, 185.199.108.133, ...<br />
Connecting to objects.githubusercontent.com (objects.githubusercontent.com)|185.199.110.133|:443... connected.<br />
HTTP request sent, awaiting response... 200 OK<br />
Length: 10151936 (9.7M) [application/octet-stream]<br />
Saving to: ‘/usr/local/bin/nodectl’<br />
<br />
nodectl         100%[=====>]   9.68M  --.-KB/s    in 0.06s<br />  
<br />
2024-04-25 12:47:51 (153 MB/s) - ‘/usr/local/bin/nodectl’ saved [10151936/10151936]<br />
<br />
  VERSION&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MAJOR&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MINOR&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PATCH&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CONFIG<br /> 
  v2.15.2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;13&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;v2.1.1<br />
  ubuntu@ip-172-31-23-246:~$<br />
</MacWindow>

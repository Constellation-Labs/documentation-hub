---
title: New Install - Start Install
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

We are ready to execute the installation process and begin turning our VPS into a Constellation Network Node.

## Install

Request nodectl to start the installation.

```
sudo nodectl install
```
<MacWindow>
ubuntu@ip-172-31-90-241:~$ sudo nodectl install
</MacWindow>

#### Alternatively

Since this is a guide to perform a normal installation verses a [quick installation](/validate/automated/quickInstall/nodectl-qu-install-intro), we can add the `--normal` option to avoid being asked if we can to perform a quick installation.

```
sudo nodectl install --normal
```
<MacWindow>
ubuntu@ip-172-31-90-241:~$ sudo nodectl install --normal
</MacWindow>

nodectl will begin the installation process and ask you which HyperGraph environment you would like to install and join with.
---
title: nodectl Quick Install Options
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
    content="Constellation Network Automation - QuickStart"
  />
</head>

## ◽ Introduction 

Introduced in nodectl `v2.13.0`, the `quick-install` option enables Node Operators to quickly install nodectl without the level of customization available in a standard installation. 

This feature allows less technical operators to use all the recommended defaults without being prompted to choose various options, and instead, provides a CLI graphical progress indicator throughout the installation process.

## ◽ Usage
```
sudo nodectl install --quick-install
```

## ◽ Custom Options

You can supply the command line options to allow for a single command installation ("one-click install").

If you would like to introduce more custom values you can supply them at the command line by issuing a double dash, the option name, and the value for that option.

Custom options include:
- `--p12-passphrase`
- `--p12-alias`

- `--user`
- `--user-password`

- `--p12-destination-path`  
- `--p12-migration-path`   

- `--confirm`
- `--quiet`

Please see the [command reference guide](/validate/automated/nodectl-commands#install) to details.

## ◽ Example Usage

Quick install that creates a p12 wallet with the name `mywallet.p12` with a passphrase of `mywalletpassphrase`, a Node admin user called `hgtpdagadmin` with a password of `myuserpassword` and a p12 alias of `myp12alias`.

<MacWindow>
nodeadmin@Constellation-Node:~$ sudo nodectl install --quick-install --p12-passphrase hgtpdagadmin --user hgtpdagadmin --user-password myuserpassword --p12-alias myp12alias
</MacWindow>

```
sudo nodectl install --quick-install --p12-passphrase hgtpdagadmin --user hgtpdagadmin --user-password myuserpassword --p12-alias myp12alias
```

:::danger IMPORTANT
If you supply your passphrases/passwords on the command line, they will be stored in the bash shell's history cache.

You can clear this history with the `-c` option.
```
history -c
```
:::
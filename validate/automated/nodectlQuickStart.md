---
title: Install - QuickStart
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
    content="Constellation Network Automation - Upgrade Tessellation with nodectl"
  />
</head>

The process of installing your Constellation Node is quite simple.

### 1. Install your VPS

Since the installation of the VPS to run your Constellation Node on is out of the scope of this quick start, please refer to the [VPS Setup Guides](/validate/setup-guides/)

### 2. Download and install nodectl

Navigate to the official `StardustCollective` GitHub repository for `nodectl` and choose the most current `Latest` version.  *Do not choose a pre-release, as these versions have the potential to introduce bugs and inconsistencies.*

[nodectl GitHub Releases](https://github.com/StardustCollective/nodectl/releases)

Copy the download command from the `RETRIEVE` section of the Release Notes description and paste it to the command line of your VPS.

The command will download the `nodectl` utility, place it in the proper location, and setup the necessary file permissions.

### 3a. Run the quick install

You can now run the `quick-install` command.
```
sudo nodectl install --quick-install
```

nodectl will prompt you for a passphrase for your `p12 key store` (hot wallet).

nodectl will prompt you for a password to use for your non-root user (`nodeamdin`) that will act as the Node Administrator.

As a result, your Node will be created with:
- non-root user: `nodeadmin` with a password that was supplied by the installer.
- p12 key store hot wallet called `nodadmin.p12` located in the `/home/tessellation` directory of that `nodadmin` user with a passphrase supplied by the installer.
- p12 key store alias of `nodeadmin-alias`

#### Run the quick install with custom options

You can supply the user's password and p12's passphrase at the command line as well.

If you would like to introduce more custom values you can supply them at the command line by issuing a double dash, the option name, and the value for that option.

Custom options include:
- `--p12-passphrase`
- `--p12-alias`
- `--user`
- `--user-password`
- `--p12-destination-path`  
- `--p12-migration-path`   

Example of a quick install that creates a p12 wallet with the name `mywallet.p12` with a passphrase of `mywalletpassphrase`, a Node admin user called `hgtpdagadmin` with a password of `myuserpassword` and a p12 alias of `myp12alias`.

<MacWindow>
nodeadmin@Constellation-Node:~$ sudo nodectl install --quick-install --p12-passphrase hgtpdagadmin --user hgtpdagadmin --user-password myuserpassword --p12-alias myp12alias
</MacWindow>

```
sudo nodectl install --quick-install --p12-passphrase hgtpdagadmin --user hgtpdagadmin --user-password myuserpassword --p12-alias myp12alias
```

:::danger IMPORTANT
If you supply your passphrases/password on the command line, they will be stored in the bash shell's history cache.

```
history -c
```
:::

### 3b. Run the regular install

Running a regular install will step you through all the various components with extra prompts requesting your approval for changes made to the VPS to support your Constellation Node's ability to properly function.

```
sudo nodectl install
```

Utilizing the `--normal` option, you can skip the request for a [quick-install](#3a-run-the-quick-install).

```
sudo nodectl install --normal
```

You an also supply [options](#run-the-quick-install-with-custom-options) at the command line as well.
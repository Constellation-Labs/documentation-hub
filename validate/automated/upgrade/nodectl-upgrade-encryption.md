---
title: upgrading - Encryption
hide_table_of_contents: false
---
<intro-end />

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';
import MacWindow from '@site/src/components/global/MacWindow';

<head>
  <title>Constellation Network Automation with nodectl</title>
  <meta
    name="description"
    content="Constellation Network Automation - Upgrade Tessellation with nodectl"
  />
</head>

## ENCRYPTION

Starting from version v2.13.0, you now have the option to encrypt your p12 passphrase directly within the nodectl configuration file, `cn-config.yaml`.

### Understanding the Encryption Services

Depending on the encryption state of your Node, the upgrader *may* offer you the ability to `encrypt` your p12 passphrase in the configuration.  *This will be skipped if the configurator module detects the passphrase is already encrypted.*

:::note
You can encrypt the passphrase at any time using the nodectl configurator.
```
sudo nodectl configure -e
```
Choose [encryption services](../nodectl-encryption) from the configurator's main edit menu.
:::

Simply entering <kbd>y</kbd> here will instruct the upgrader to access the configurator, backup your configuration, and encrypt your passphrase, while offering your a visual understanding of each element.

If you choose not to encrypt, you can skip to the next section.

### Encrypting
We can press <kbd>enter</kbd> to accept the default, or <kbd>y</kbd>+<kbd>enter</kbd>.

<MacWindow>
------- * ENCRYPTION SERVICES * --------<br />
<br />
NEW  to nodectl >2.13.x<br />
<br />
Do you want to encrypt the passphrase in your cn-config.yaml configuration file?<br />
Enable encrypt? [y]:<br />
</MacWindow>

### Definitions and Reversal
If you choose to encrypt, the screen will clear and the following output will be seen.  The output will offer information on what is happening and how to handle reversal of the process.

<MacWindow>
IMPORTANT<br />
Enabling encryption will encrypt your passphrase in the configuration file linked to nodectl functionality.<br />
<br />
In the unlikely event the encrypted hash stops working [for whatever reason], you can simply disable this functionality, update/change your passphrase, and, upon completion, re-enable the encryption feature.<br />
<br />
Encryption will be turned on globally for all profiles. Each unique profile passphrase may be encrypted with a different key.<br />
<br />
For security purposes, nodectl will not decrypt the passphrase upon disabling the encryption feature.<br />
<br />
WARNING <br />
If the configuration file was manually updated, any updated encryption elements [or other] will be overwritten causing old encryption data that may be allowing nodectl to handle previously encrypted elements to stop working, to be overwritten, and removed!<br />
</MacWindow>

### Completing Encryption
nodectl will handle the encryption and complete the process without the need for user intervention.

<MacWindow>
------------ * GLOBAL P12 * ------------ <br />
<br />
Building encryption elements [global] ......... completed<br />
Configuration changes applied ................. successfully<br />
Building encryption elements .................. completed<br />
</MacWindow>

Next the services will restart.
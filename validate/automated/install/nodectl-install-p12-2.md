---
title: New Install - P12 Alias
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

Handling the **p12** private keystore alias creation.phrase.

### Create p12 alias

:::danger IMPORTANT
If you are **migrating** an existing **[p12 private key file](/validate/automated/nodectlInstallMigrate)**, you must use the same alias as you did when you originally created the file.  Failure to do so will lead to errors.

*MainNet 1.0 Node Operators, this is **not** your MainNet 1.0 Node alias; rather, it is your **wallet's** alias*
:::

Constellation Network requires that you provide an alias for your `p12 file`.  This alias is important, and should be added to your [notes](/validate/resources/nodectl-notes) and not be forgotten.  

<MacWindow>
  Please create a simple name to help you remember your<br />
  p12's private key name.<br />
  Please enter the alias name for your p12<br />
  private key [nodeadmin-alias] : <br />
</MacWindow>

Write your alias down in a safe location.

<MacWindow>
Generating p12 [nodeadmin-node.p12] ........... completed   
</MacWindow>

The installation will now move to the next stage of the installation.
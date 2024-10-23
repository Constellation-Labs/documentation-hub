---
title: Upgrade nodectl - Upgrade
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
    content="Upgrade nodectl utility"
  />
</head>

## Upgrade 

In the background, nodectl will download the latest version of nodectl.

:::caution POSSIBLE ERROR
We may encounter an error `cfg-199` depending on the version of nodectl you are utilizing.  This is an error message that lets us know that we need to upgrade our Node after the utility (nodectl) upgrade is completed.  

We can safely ignore this message and continue.

If the version you are running does not need an upgrade, you will not receive an error.
:::

## Validate

nodectl will download the digital signature files from the nodectl repository 

<MacWindow>
fetching public key ........................... complete<br />                                    
fetching digital signature hash ............... complete<br />                                     
fetching digital signature .................... complete<br /> 
</MacWindow>

It will then display the contents and instructions on how to be extra secure in verifying that you have a valid copy of nodectl.

Please see the nodectl [validate](/validate/automated/nodectl-validate#understanding-verify_nodectl) documentation for details and then return to this guide.

### Success

If we get a SUCCESS, we can continue.

<MacWindow>
VERIFICATION RESULT<br />
SUCCESS - AUTHENTIC NODECTL 
</MacWindow>

In our example, we have downloaded `v2.15.2` of nodectl.  nodectl will execute the new `v2.15.2` binary and display the versioning to help us verify we have downloaded the correct version.

The below example shows us on the major version of `2`, minor version of `15` and `0` patch level.  It also indicates that we are running `v2.1.1` of the nodectl configuration.

<MacWindow>
nodeadmin@Constellation-Node:~# sudo nodectl version<br />
  VERSION&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MAJOR&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MINOR&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PATCH&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CONFIG<br />
  v2.15.2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;15&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;v2.1.1<br />            
nodeadmin@Constellation-Node:~# 
</MacWindow> 

:::danger IMPORTANT
Even if you see a SUCCESS message when validating your copy of nodectl via a digital signature, you should still compare the public key and hash value between the output displayed on your Node during the upgrade and the values in the offical repository.

Links are provided in the output. Access these links, ensure you are on the correct repository (not a phishing site), and compare the hashes and keys for verification.
:::

## Upgrade Required

In some cases, nodectl will recognize that an upgrade is required.  

In this example, an upgrade of the `Node` is required.  This will help nodectl to run properly on your Node whether it is an upgrade needed for nodectl, or changes to the Tessellation protocol that may require some updates.

<MacWindow>
This version of nodectl requires an upgrade be performed on your Node.<br />
<br />
Press Y then [ENTER] to upgrade or N then [ENTER] to cancel:<br />
</MacWindow>

## Upgrading Node after nodectl

You can press <kbd>Y</kbd>+<kbd>Enter</kbd> to accept and allow nodectl to enter directly into the upgrade command, or <kbd>N</kbd>+<kbd>Enter</kbd> if we want to wait until later.  

If we choose not to upgrade the Node after the nodectl upgrade, we must return to the upgrade process when ready and issue a [sudo nodectl upgrade](/validate/automated/upgrade/nodectl-upgrade) to allow our Node to finish the upgrade.

## Upgrade Not Required

Congratulations, you have completed this step-by-step guide!

## Upgrade Required

Once the upgrade begins, we can refer to the [upgrade guide](/validate/automated/upgrade/nodectl-upgrade) to for a detailed step-by-step on the process of upgrading your Node.
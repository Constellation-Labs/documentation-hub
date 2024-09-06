---
title: p12 migration - Import p12 continued
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
    content="nodectl installation of new Node"
  />
</head>

### Choose P12 file

We should now reach the point in the **installation** where nodectl needs to know:
1. Which p12 file (if multiple) that we want to import
3. Where the p12 file is located.

nodectl will offer us a menu of options for any p12 files that it finds on your system.  In this example we can pretend we uploaded **mynode.p12** to our `ubuntu` users's account using the instructions from the pervious steps.

We can choose `1` ( do **not** hit <kbd>enter</kbd> )

If you do **not** see your p12 file, this means either you placed it in a location that nodectl is not looking within, or you did not properly upload your p12 file.  

If the former, you can hit `2` and then enter in the fully qualified location of your p12 file.

<MacWindow>
  nodectl has detected an existing p12 migration to this new Node has been requested; and now
  needs to find and migrate this private key file. Please select an option.<br />
<br />
  1) /home/ubuntu/nodeadmin-node.p12<br />
  2) input manual entry<br />
<br />
  KEY PRESS an option<br />
</MacWindow>

### Warning Message

In the event that nodectl is unable to locate your [p12](/validate/validator/p12) file, make sure you properly have it uploaded ([Mac](/validate/resources/p12-backup-mac) or [Windows](/validate/resources/p12-backup-win)).

You may choose option 2 from the menu 👆 above for to `input manual entry`.

<MacWindow>
 WARNING  Unable to location existing p12 files on this VPS.
</MacWindow>

If you do not receive a warning, you can skip this section and [continue back to the nodectl installation](/validate/automated/install/nodectl-install-services), until the end of the installation.

At the request for a manual entry, we can enter the fully qualified path to your p12 keystore.

### Manual P12 Entry

<MacWindow>
  a) to abort<br />
  Please enter full path including p12 file key:<br />
</MacWindow>

If you enter in <kbd>a</kbd>+<kbd>Enter</kbd> the p12 migration will be aborted, and nodectl will continue the installation creating a **new** p12.

:::warning CANCEL IMPORT 
If you choose the <kbd>a</kbd> option, the p12 import will be cancelled and the installation will continue.  nodectl will create a new p12 keystore.
:::

### Continue
You can now return to the installation documentation and follow the instructions until you reach the end.

**<kbd>[CONTINUE NODECTL INSTALLATION](/validate/automated/install/nodectl-install-services)</kbd>**

Some concluding information is next.
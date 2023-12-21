---
title: p12 migration - Import p12 continued
hide_table_of_contents: false
---
<intro-end />

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';
import MacWindow from '@site/src/components/global/MacWindow';

<head>
  <title>MainNet 2.0 Automation with nodectl</title>
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

You can now return to the installation documentation and follow the instructions until you reach the end.

**<kbd>[CONTINUE NODECTL INSTALLATION](/validate/automated/install/nodectlInstallServices)</kbd>**

Some concluding information is next.
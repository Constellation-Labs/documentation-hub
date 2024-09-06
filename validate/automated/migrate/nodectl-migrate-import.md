---
title: p12 migration - Import p12
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

Now that we have secured our p12 on the new VPS, our installation will continue.

When asked if we are migrating over an existing p12 private key, we will enter <kbd>y</kbd>.

<MacWindow>
  Are you migrating over an existing p12 private key? [n]: <b>y</b><br /> 
</MacWindow>

nodectl will warn you that we need to upload your existing **p12** file; however, we should have already done this via the instructions from **how to upload your p12** section of this documentation.

#### Have not uploaded p12
If you have not uploaded your p12 keystore file, enter <kbd>y</kbd> here 👇 to exit the installation. 

[Upload your existing p12](/validate/automated/migrate/nodectl-migrate-upload) to your VPS and repeat the previous steps to return to this point in the documentation.

#### Have uploaded p12
Otherwise if we have already uploaded our p12 keystore file, we can hit the <kbd>n</kbd> key.

<MacWindow>
  BEFORE WE BEGIN <br />
<br />
  If this Node will be using an existing p12 private
  key, the installation should be exited and the existing p12 private key
  uploaded to a known secure local directory on this server. Alternatively, you can simply pause
  here and upload the p12 private key file, and then continue.<br />
<br />
  Please see the Constellation Doc Hub Validator section for instructions on how to do this.<br />
<br />
  Later in the installation, the Node Operator will be given the opportunity to migrate over the
  existing p12 private key. At the necessary time, a request for the p12 name
  and directory location will be given. Once nodectl understands where
  the p12 file is located and necessary credentials, it will then be migrated by the installation to the proper location.<br />
<br />
  Exit now to upload existing p12? [n]: <b>n</b><br />
<br />
</MacWindow>

The next step is to return to the new installation instructions. Continue to follow the instructions, step by step, until you reach the next *blue box* to return here.

**<kbd>[CONTINUE NODECTL INSTALLATION](/validate/automated/install/nodectl-install-automate-existing)</kbd>**
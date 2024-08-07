---
title: Quick Install - Installing (Cont)
sidebar_label: New Quick Install - Installing (Cont)
hide_table_of_contents: False
---
<intro-end />

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';
import MacWindow from '@site/src/components/global/MacWindow';
import Collapsible from '@components/global/Collapsible/Collapsible.jsx';

<head>
  <title>Constellation Network Automation with nodectl</title>
  <meta
    name="description"
    content="nodectl new quick installation"
  />
</head>

nodectl will continue the quick installation.  You can continue to sit back and relax while the Node is installed.  

You can watch the progress through the progress bar indicator as each component is installed.

*percentage completion will vary.*

### Swapping
Handle setting up the Node's swap file

<MacWindow>
nodectl installing [ mainnet ]<br />
Setting up swap file..................... preparing<br />
[ ######################## 54%......................... ]
</MacWindow>

### Administration
Handle the Node's user setup

<MacWindow>
nodectl installing [ mainnet ]<br />
Setting up Node administration........... preparing<br />
[ ########################### 56% ..................... ]
</MacWindow>

### Protocol Structure
nodectl will create any elements that are specific to the functionality of nodectl for when it needs to handle the Tessellation protocol.

<MacWindow>
nodectl installing [ mainnet ]<br />
Handling protocol structure.............. preparing<br />
[ ############################# 60% ................... ]
</MacWindow>

### P12 Setup
nodectl will create and setup your p12 file requirements.  This may be building a new p12 file and applying the necessary parameters or migrating an existing p12.

<MacWindow>
nodectl installing [ mainnet ]<br />
Generating P12 file...................... preparing<br />
[ ################################# 70% ............... ]
</MacWindow>

### Configuration Build

Build and populate the `cn-config.yaml` file will all necessary configuration values.

<MacWindow>
nodectl installing [ mainnet ]<br />
Populating configuration................. preparing<br />
[ ################################### 74% ............. ]
</MacWindow>

Write out the file to the proper location.

<MacWindow>
nodectl installing [ mainnet ]<br />
Finalizing configuration................. preparing<br />
[ ####################################### 82% ......... ]
</MacWindow>

### Service Creation
nodectl will create all the services that it will use to help administer your Node.

<MacWindow>
nodectl installing [ mainnet ]<br />
Building services........................ preparing<br />
[ ######################################### 88% ....... ]
</MacWindow>

### SSH Configuration
nodectl will update the SSH configuration to lock down the Node and disable some security vulnerabilities.

<MacWindow>
nodectl installing [ mainnet ]<br />
Handling SSH Security.................... preparing<br />
[ ########################################## 90% ...... ]
</MacWindow>

### Setup AutoComplete
nodectl will teach the VPS's Bash shell to be able to auto complete commands.  This can be done by double tapping the <kbd>Tab</kbd> key after entering the `sudo nodectl` command, to show the available commands.

<MacWindow>
nodectl installing [ mainnet ]<br />
Setup auto complete...................... preparing<br />
[ ############################################ 95% .... ]
</MacWindow>

### Enable Encryption
nodectl will encrypt your [p12](/validate/validator/p12) [passphrase](/validate/resources/password) within the `cn-config.yaml` to secure your p12 from bad actors if access is gained to the configuration file.

<MacWindow>
nodectl installing [ mainnet ]<br />
Handling Encryption Services............. preparing<br />
[ ############################################# 97% ... ]
</MacWindow>

### Finalize the Installation

<MacWindow>
nodectl installing [ mainnet ]<br />
Completing Installation.................. preparing<br />
[ ################################################# 99% ]
</MacWindow>
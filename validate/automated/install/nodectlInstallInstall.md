---
title: New Install - Install nodectl
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

We are ready to execute the installation process and begin turning our VPS into a Constellation Network Node.

## Install
```
sudo nodectl install
```
<MacWindow>
ubuntu@ip-172-31-90-241:~$ sudo nodectl install
</MacWindow>

### Confirm Installation Request
You will be presented a screen that will offer some instructions on how the installation will work.

Default options that will be presented within brackets `[ ]`.  If you would like to use the default option, you can just hit the <kbd>enter</kbd>, on your keyboard.

<MacWindow>
 ========================================<br />
  =   CONSTELLATION NETWORK HYPERGRAPH   =<br />
  =          INSTALLATION REQUEST        =<br />
  =      TESSELLATION VALIDATOR NODE     =<br />
  ========================================<br />
  @netmet72<br />
<br />
   NOTE <br />
<br />
  Default options will be enclosed in [] (brackets). If you want to use the <br />
  value defined in the<br />
  brackets, simply hit the &lt;enter&gt; key to accept said value.<br />
<br />
  n stands for  no <br /> 
  y stands for  yes  <br />
<br />
  IMPORTANT nodectl was designed to run on a terminal session with a<br />
  black background setting. Default terminal emulators with a white background<br />
  may experience some 'hard to see' contrasts. It is recommended to change the<br />
  preferences on your terminal [ of choice ]<br /> 
  to run with a black background.<br />
<br />
  WARNING You about to turn this VPS or Server into a<br />
  Constellation Network Validator Node<br />
  Are you sure you want to continue this installation? [n]: <br />
</MacWindow>

Type in <kbd>y</kbd> and then hit the <kbd>enter</kbd> key.
```
Are you sure you want to continue this installation? [n]: y
```

nodectl will begin the installation process and ask you which HyperGraph environment you would like to install and join with.
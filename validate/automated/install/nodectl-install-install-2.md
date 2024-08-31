---
title: New Install - Install nodectl
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

### Confirm Installation Request
Since we choose `n` to the quick installation, or we included the `--normal` option when executing our installation, our screen will change to the following display or show it for the first time.

Default options that will be presented within brackets `[ ]`.  If you would like to use the default option, you can just hit the <kbd>enter</kbd>, on your keyboard.

<MacWindow>
========================================<br />
=&nbsp;&nbsp;&nbsp;CONSTELLATION NETWORK HYPERGRAPH&nbsp;&nbsp;&nbsp;=<br />
=&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;INSTALLATION REQUEST&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=<br />
=&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TESSELLATION VALIDATOR NODE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=<br />
========================================<br />
 Code Name: Princess Warrior<br />
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
  QUICK INSTALL  nodectl's installer provides a quick install option that utilizes all the recommended default settings. This allows for a streamlined process, requiring minimal input from the future Node Operator.<br />
<br />
  Alternatively, you can choose a customization mode, step-by-step installation, where nodectl will ask you questions and provide explanations for the necessary elements to customize the installation of your node.<br />
<br />
  WARNING You about to turn this VPS or Server into a<br />
  Constellation Network Validator Node<br />
  Are you sure you want to continue this installation? [n]: <br />
</MacWindow>

Type in <kbd>y</kbd>+<kbd>Enter</kbd> key.
```
Are you sure you want to continue this installation? [n]: y
```

nodectl will begin the installation process and ask you which HyperGraph environment you would like to install and join with.
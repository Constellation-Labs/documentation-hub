---
title: Quick Install - Welcome Banner
sidebar_label: New Quick Install - Welcome Banner 
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

As the installation starts, we will be received by a welcome banner with minor "warnings" about what we are about to create.  A new Node!

<MacWindow>
 ========================================<br />
 =&nbsp;&nbsp;&nbsp;CONSTELLATION NETWORK HYPERGRAPH&nbsp;&nbsp;&nbsp;=<br />
 =&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;INSTALLATION REQUEST        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=<br />
 =&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TESSELLATION VALIDATOR NODE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=<br />
 ========================================<br />
 Code Name: Princess Warrior<br />
<br />
  NOTE <br />
<br />
  Default options will be enclosed in [] (brackets).
  If you want to use the value defined in the brackets, simply hit
  the &lg;enter&gt; key to accept said value.<br />
<br />
<br />                                                                      
   QUICK INSTALL REQUESTED<br />
   <br />
   WARNING <br />   
  Even though this is the recommended options, nodectl will use all          
  recommended settings without prompting for confirmations, be sure this is  
  acceptable before continuing with this setting.<br />
<br />                               
  *******************************<br />
  This includes removal of existing Tessellation and nodectl service,        
  p12, and other configuration files if present.<br />
  *******************************<br />
  <br />
  A few mandatory entries may be necessary; hence, nodectl will now
  prompt a series of questions before proceeding with the
  installation. If these options were already entered through the
  command line interface (CLI), the corresponding questions will be
  skipped.<br />
<br />
  nodectl quick install will not offer detailed
  explanation for various prompt requests, please use the normal
  installation or read the documentation.<br />
  https://docs.constellationnetwork.io/validate/<br />
</MacWindow>

<Collapsible title="Extra Width Warning">
<p>
The nodectl's installer requires a terminal width requirement of <b>85</b> in order to properly display the UX experience.
</p>
<p>
In the event your terminal window is too small, you will receive a warning message similar to below 👇.  In this example, the terminal was only <b>79</b> columns when it needs to be at least <b>85</b>.
</p>

<MacWindow>
  WARNING<br /> 
  nodectl has detected that the terminal size WIDTH is too narrow.
  to properly display the installer's progress indicators. While
  this won't affect the installation itself, it may impact the user
  experience.<br />
<br />
  detected column width: 79<br />
  To improve the display, you can optionally widen your terminal window
  by clicking on the terminal emulator window and dragging it out to at
  least 85 columns.<br />
</MacWindow>  
</Collapsible>

After we have read over the introduction, we can press any key to continue.
---
title: upgrading - Internals
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

### Node Internal Configuration

- Review and cleanup any unnecessary elements on the Node.
- Update system components as necessary.
- Update service files.
- Remove nodectl specific system files that may be abandoned.
- Update the Debian OS with any `auto_complete` updates.

<MacWindow>
--- * NODE INTERNAL CONFIGURATION * ----<br />
<br />
Verifying Node directory setup ................ complete<br /> 
Updating swapfile settings .................... skipped<br /> 
NOTE: For partial or skipped elements, see the logs for details.<br />
Removing old default seed files ................ complete<br />
Removing old default jar files ................. complete<br />
Removing older [Tessellation] files............. complete<br /> 
Removing older nodectl [bash] files............. complete<br /> 
Building >v2.0.0 Services Files ................ complete<br />
In the event that the configuration yaml services changed nodectl will attempt to clean up old service files.<br />
Skipping clean nothing to remove | file count:  0 files [0B]<br />
Clean up config yaml changes v2.0.0 ........... complete<br />
Removing old tmp files ........................ complete<br />    
Applying auto_complete updates ................ complete<br />       
</MacWindow>

Next step is to clean up some directory files to clear space and tidy up the Node.
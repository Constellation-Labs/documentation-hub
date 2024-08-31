---
title: New Install - Automation
hide_table_of_contents: false
---
<intro-end />

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';
import MacWindow from '@site/src/components/global/MacWindow';
import Collapsible from '@components/global/Collapsible/Collapsible.jsx';

<head>
  <title>Constellation Network automation with nodectl</title>
  <meta
    name="description"
    content="nodectl installation of new Node"
  />
</head>

nodectl will obtain your external IP address for us.

:::note
The IP address `113.113.113.113` is a fake IP used for example purposes only
:::

<MacWindow>
Obtaining External IP ......................... 113.113.113.113<br />
</MacWindow>

<Collapsible title="Existing Install Warning">
In the event an existing configuration or installation attempt was made on the VPS, you may receive a warning message.
<MacWindow>
WARNING  An existing Tessellation installation may be present on this server. Preforming a fresh installation on top of an existing installation can produce unexpected results.<br />
<br />
RECOMMENDED  Attempt an uninstall first.<br />
sudo nodectl uninstall<br />
<br />
******************************************<br />
IMPORTANT  Any existing tessellation configuration, p12, and/or service files will be removed from this server.<br />
******************************************<br />
<br />
This installation cannot continue unless the old configuration file is removed.<br />
<br />
You can exit here, backup important files and use the uninstall first or continue.  If you continue, nodectl will first remove existing configurations and  elements.<br />
<br />
continue? [n]:<br />
</MacWindow>
<p>
You can either choose to exit here and perform an uninstall or allow nodectl to continue anyway, at your own risk.
</p>
<p>
nodectl will remove the existing data
</p>
<MacWindow>
------- * HANDLE EXISTING DATA * ------- <br />
<br />
Clean up old configuration data ............... complete <br />
</MacWindow>   
</Collapsible>

If necessary you can access the nodectl [uninstall guide](/validate/automated/uninstall/index).
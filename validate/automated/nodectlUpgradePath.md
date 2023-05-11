---
title: nodectl upgrade path
hide_table_of_contents: true
---

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';
import MacWindow from '@site/src/components/global/MacWindow';

<head>
  <title>MainNet 2.0 Automation with nodectl</title>
  <meta
    name="description"
    content="MainNet 2.0 Automation - Understanding the nodectl upgrade path"
  />
  <style>{`
    :root {
      --doc-item-container-width: 60rem;
    }
  `}
  </style>
</head>

## nodectl upgrade path

Utilizing the [upgrade_path](./nodectlCommands.md#upgrade-path) command, you can review what version of **nodectl** you are running on the Node.  It will offer you information regarding what the `upgrade path` is to properly advance your way, through versions of **nodectL** from the current version your Node is running to the latest version.

:::danger IMPORTANT
Regardless of what version you are on.  It is **HIGHLY RECOMMENDED** and **REQUIRED** to download the next version in line with `path` shown with the [upgrade_path](./nodectlCommands.md#upgrade-path) command, and regardless of... to utilize the [upgrade](./nodectlCommands.md#upgrade) after download for each version you download.
:::

### Example

You are on version `v1.1`

Upgrade Path:  `v1` --> `v1.2` --> `v1.10` --> `v1.12.0` --> `v2.0`

You will need to start by finding the closest version to your version, that is great than your version.

1. We find `v1.2`

2. We will now download `v1.2` using the `wget` command

3. We will upgrade our Node via `sudo nodectl upgrade`

4. We will now download `v1.10`

5. We will upgrade our Node via `sudo nodectl upgrade`

6. We will now download `v1.12.0`

7. We will upgrade our Node via `sudo nodectl upgrade`

8. We will now download `v2.0`

9. We will upgrade our Node via `sudo nodectl upgrade`

**We are done!**
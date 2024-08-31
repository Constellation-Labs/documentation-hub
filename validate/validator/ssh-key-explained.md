---
title: SSH Keys Explained
slug: ssh-keys
hide_table_of_contents: false
---

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

### What are SSH Keys?

When an Administrator (Node Operator) builds a VPS in the cloud, they will need a way to access and administer that VPS (instance). This is generally done by using a local computer (personal laptop or other type of local system) to connect to the VPS for administration.  In most cases this requires the local system to connect to the remote system (our Cloud VPS) through the Internet.

When data traverses the Internet, it is vulnerable to getting intercepted by nefarious actors to steal, spy, or use the data flowing between our local and remote systems, in some way unintended by the owner of the connection and data.

To protect against such vulnerability, we encrypt our data before it leaves the local or remote system, traverses the connection between the local and remote system, and finally reaches its intended destination where it gets decrypted.  This is called an encrypted tunnel between devices.

SSH (Secure Shell) keys are a pair of public and private keys (i.e. a key pair) that are used to authenticate and establish an encrypted connection between your local computer and remote machine (a Node). Depending on the situation, the public key may be in charge of decrypting data while the private key is in charge of encrypting data, or visa-versa.  

In the case of connections to a Cloud instance, the public key is used to encrypt data and a private key is used to decrypt it.

## How to create SSH keys

<DocsCards>
  <DocsCard header="SSH keys Quick Start" href="/validate/quick-start/sshQuickStart" icon="/img/quick-start-icon.png">
    <p>Quick Start Guide for Mac or Windows.</p>
  </DocsCard>

  <DocsCard header="SSH keys on Mac" href="creation-mac" icon="/icons/icon_apple.png">
    <p>How to generate SSH keys on a Mac.</p>
  </DocsCard>

  <DocsCard header="SSH keys on Windows" href="creation-win" icon="/icons/icon_windows.png">
    <p>How to generate SSH keys on Windows.</p>
  </DocsCard>
</DocsCards>
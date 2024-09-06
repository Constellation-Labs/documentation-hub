---
title: New Install - P12 Creation
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

Handling the **p12** private keystore creation.

### Build our wallet (p12)

nodectl will now help us through the process of creating our Node's wallet and authentication requirements. This is necessary to join the Hypergraph/metagraph via authentication, sign validation proofs, and collect rewards for work accomplished on the Hypergraph/metagraph.

We will start by providing a name of our `p12` file.

### What is a p12 file?

The [p12](/validate/validator/p12) file is a specially formatted private key file used by (but not created by) Constellation's Network's protocol.  

The p12 file is short for `PKCS#12`. It is a secure archive format containing a private key and its associated certificate chain. It is widely used in various applications (including Tessellation).

Simply put, the `p12` file is used store various private keys. 

You can now provide a file name for your `p12` file.  This can be any name that suits your needs.  As an added precaution, do not share this filename with anyone that shouldn't have a need to access the file.

If you would like to keep the default name `nodeadmin-node.p12` **(*not recommended*)**, just hit the <kbd>enter</kbd> key.

### Name our P12 Keystore

<MacWindow>
  ========================================<br />
  =             P12 GENERATION           =<br />
  ========================================<br />
  Please enter a name for your p12<br />
  private key file [nodeadmin-node.p12] :<br />
</MacWindow>

We are ready to provide nodectl with a passphrase for our future `p12` file.

nodectl will again provide you with information about creating the passphrase.

When creating your passphrase, **do not use**:
 - periods
 - double `//` 
 - section signs
 - double quotes
 - single quotes

<MacWindow>
  We will end of up with 3 separate unique
  passphrases.<br />
<br />
  1 SSH KEY passphrase/keyphrase - >already created<br />
<br />
  2 User nodeadmin's VPS admin password - already created<br />
<br />
  3 P12 Private key passphrase/keyphrase<br />
<br />
  You will not see your password as you type it, this is for security purposes.
  Your password should contain capital & lowercase letters, numbers, special characters,
  but no single or double quotes.<br />
<br />
  This passphrase should be 10 in length.<br />
   WARNING  nodectl does not work well with section signs
  special characters.<br />
<br />
  This passphrase will allow you to authenticate to the
  Hypergrpah.<br />
  This passphrase will allow you to authenticate to your Node's
  Wallet.<br />
  You should create a unique passphrase and write it down!<br />
<br />
  We recommend you save this to a secure location and, do NOT
  forget the passphrase!<br />
<br />
  In your notes:<br />
  "This is the passphrase to access my Node's hot wallet and gain
  access to the Hypergraph."<br />
</MacWindow>

Access your *secure** [notes](/validate/resources/nodectl-notes) and write down your p12 information.
### Passphrase entry

We can now provide a new unique passphrase for our p12 file.  

:::danger IMPORTANT
Make sure it is very secure, this will be used to access your Node's wallet; as well as, authenticate to the Hypergraph and metagraph.
:::

<MacWindow>
>> Please enter a 10 character minimum<br />
>> passphrase for your p12 private key:<br />
</MacWindow>

Confirm your passphrase

<MacWindow>
>> Please confirm your p12 private key's passphrase:<br />
</MacWindow>

Write your passphrase down in a very secure location, and never share it out to anyone that should **not** have direct access to your Node or Node's wallet.

Time to create our alias.
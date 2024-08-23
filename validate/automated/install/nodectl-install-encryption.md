---
title: New Install - Encryption
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

You now have the option to encrypt your p12 passphrase that will be stored in your `cn-config.yaml` file which is used by nodectl to understand the configuration of your Node.

If you do not encrypt, the passphrase will be stored in plain text format in the file.  It is up to you if you want to enable encryption, however it is **recommended**.

### Confirm Encryption

We can press <kbd>Enter</kbd> to accept the default, <kbd>y</kbd>+<kbd>Enter</kbd>, or <kbd>n</kbd>+<kbd>Enter</kbd>.

<MacWindow>
------- * ENCRYPTION SERVICES * --------<br /> 
<br />
Do you want to encrypt the passphrase in your cn-config.yaml configuration file?<br />
Encrypt? [y]: <br />
</MacWindow>

You can can also encrypt (or disable encryption) at any time by utilizing the [encryption guide](/validate/automated/nodectl-encryption).

### Automated Encryption
nodectl will begin the encryption.

Derive a seed phrase to use with the encryption

<MacWindow>
seed phrase [deriving] ........................ complete
</MacWindow>

Remove and destroy the seed phrase because it is a one-time use element of the encryption process.

<MacWindow>
seed phrase [redacting] ........................ complete
</MacWindow>

Remove all elements that helped to prepare the encryption hash

<MacWindow>
seed phrase [forgetting] ........................ complete
</MacWindow>

Encryption is complete

<MacWindow>
seed phrase [finished] ........................ complete
</MacWindow>

Update the configuration

<MacWindow>
Building encryption elements [global] ......... completed<br /> 
Building encryption elements [dag-l0] ......... completed<br />  
<br /> 
Configuration changes applied ................. successfully<br />   
Building encryption element ................... completed<br /> 
</MacWindow>

The screen will clear...
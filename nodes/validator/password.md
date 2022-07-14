---
title: Understanding Passwords
hide_table_of_contents: false
---

<head>
  <title>Understanding Passwords</title>
  <meta
    name="description"
    content="Documentation on the differences between passwords, passphrases, and keyphrases."
  />
</head>

## Understanding the differences between Password types

:::info GOOGLE IT! 
A password is a short character set of mixed digits. A passphrase is a longer string of text that makes up a phrase or sentence.
:::

In security terms you can consider a passphrase as a longer version of a password. You should not use sentences or easily identifiable (guessable) words in your passphrases. A passphrase is identical to a password in most cases.

#### TABLE

 | WHAT	NEEDS ACCESS| WHAT ACCESS TYPE IS RECOMMENDED |	USE CASE DESCRIPTION |
 |---- | ----------- | --- |
 | **root**	| SSH Key Passphrase | root access will be handled automatically by the SSH key. However you do not want to access your Node or allow access to your Node via the root user. If someone gets into your node as root, they have full administrative access. |
 | **nodeadmin** |	SSH Key Passphrase and Password | You should access your Node via the nodeadmin user. The nodeadmin user will not have direct root (administrative) access your Node. In order to administer your Node, you will need to use your nodeadmin password - **First Layer of Security**: Having the SSH Keys (your local system has the private key and your Node has the public key). Access the your Node with the nodeadmin password and the same SSH key as the root user. - **Second Layer of Security**: Use your SSH Key's passphrase to access your nodeadmin account which is shared with the root user. - **Third Layer of Security**: You will use your nodeadmin password to verify that you are allowed to issue administrative commands that can alter your Node. |
| **p12 file**	| Passphrase |	Unrelated to your usernames and passwords, the p12 file is your private key file allowing you to access the **HyperGraph** environment. This key passphrase should be VERY secure, saved off your computer in MainNet situations (when it is used to create rewards). It is associated with your Node's Crypto wallet, access to the MainNet, etc. |

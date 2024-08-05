---
title: Understanding Passwords
hide_table_of_contents: false
---

A **password** is a string of characters while a **passphrase** is a sentence-like string of words. Because a passphrase is longer and more complex, it's typically more secure than a password. You should not use easily guessable words or sentences in your passphrases.

## Roles and Permissions

### root

Root access will be handled automatically by the SSH key. However you do not want to access your Node or allow access to your Node via the root user. If someone gets into your node as root, they have full administrative access.

### nodeadmin
You should access your node via the `nodeadmin` user which does not allow root level permissions. In order to administer your node, you will need to use your `nodeadmin` password.

## Security Layers

### First layer
Having the SSH Keys (your local system has the private key and your Node has the public key). Access your Node with the `nodeadmin` password and the same SSH key as the root user.

### Second layer
Use your SSH key's passphrase to access your `nodeadmin` account which is shared with the root user.

### Third layer
Use your `nodeadmin` password to verify that you have permission to run administrative commands that can alter your node.

## Private Key

Unrelated to your usernames and passwords, the **p12 file** is your private key file allowing you to access the Hypergraph or metagraph environment. This key passphrase should be **VERY** secure, saved off your computer in MainNet situations (when it is used to create rewards). It is associated with your node's crypto wallet, access to MainNet, etc.
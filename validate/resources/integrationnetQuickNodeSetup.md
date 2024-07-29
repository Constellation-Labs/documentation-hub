---
title: Integrationnet Node Quick Install
slug: integrationnet-node-quick-install
hide_table_of_contents: false
---


# Setting Up Your Integrationnet Node

This guide is specifically for setting up your Integrationnet Node, and is opinionated with sensible defaults.

## 1. Choose VPS Provider
Refer to the [Constellation Network Setup Guides](https://docs.constellationnetwork.io/validate/setup-guides/) for choosing a VPS provider.

## 2. Setup firewall
Open inbound TCP ports: 9000, 9001, 9010, 9011, and your ssh port (normally 22).
Open all outbound ports.

Refer to these guides on [Digital Ocean](https://docs.constellationnetwork.io/validate/setup-guides/do/sgDroplet), [AWS](https://docs.constellationnetwork.io/validate/setup-guides/aws/sg), [Digital Ocean](https://docs.constellationnetwork.io/validate/setup-guides/gcp/sg), and [Hetzner](https://docs.hetzner.com/cloud/firewalls/getting-started/creating-a-firewall/).

## 3. Provision Your VPS

### Minimum Specs for Your Node

| Type            | Minimum  |
|-----------------|----------|
| **CPU**         | 8+       |
| **RAM**         | 16GB RAM |
| **Disk Space**  | 320GB    |
| **Traffic Allowance** | 10 TB/month |

Suggested OS: **Ubuntu 22.04**

## 4. SSH into Your VPS
Refer to [this doc](https://docs.constellationnetwork.io/validate/validator/ssh-keys) for SSH instructions. 
If you like a video explainer, see this [YouTube](https://www.youtube.com/watch?v=FUgO6C9qMfQ) for Windows.
Store your SSH public **and** private key on a USB drive/secure file storage.

## 5. Update OS
```sh
sudo apt-get update && sudo apt-get upgrade
```

## 6. Reboot
```sh
sudo reboot now
```
SSH into your VPS again using the user set by your VPS provider (e.g., `root` or `ubuntu`).

## 7. Install nodectl (Node Control Utility Program v2.14.1)
```sh
sudo nodectl auto_restart disable; sudo wget -N https://github.com/stardustcollective/nodectl/releases/download/v2.14.1/nodectl_x86_64 -P /usr/local/bin -O /usr/local/bin/nodectl; sudo chmod +x /usr/local/bin/nodectl; sudo nodectl -v
```

## 8. Install Tessellation
```sh
sudo nodectl install --quick-install
```
`Please choose which Hypergraph or Metagraph you would like to install on this server:`
- Choose 2 (integrationnet [HyperGraph])

`Are you migrating an existing p12 private key to this Node? [n]:`
- n 
  - *We are assuming you are not migrating and this is a clean, first time setup*

`Please enter in the new user you would like to
create [nodeadmin]:`
- Press enter
  - *This will select the default, which is `nodeadmin`*
- Enter your strong password
  - *You will not see the password or * while entering your password. This is a Linux level security feature.*
- Confirm your strong password
  - *You will again not see the password or * while entering your password.*


Your Node is set up and you will be presented with an end screen:

````
Please follow the instructions below, as indicated

1) Submit your NodeID to Constellation Admins.
2) Collateralize your Node.
3) sudo nodectl check_seedlist -p dag-l0
4) sudo nodectl restart -p all
5) Log out and log back in with as nodeadmin with your new nodeadmin password.
````

**Steps 2-4 can be ignored for now, as you are joining the Integrationnet this is not needed.**

:::info Your old user which you used to SSH into your VPS is now disabled.
Logout and login with the new `nodeadmin` user as set up by the quick install. Your previous user does not work anymore.
:::

## 9. Pass Your NodeID and IP Address to the Team Lead
You will also see your Node ID, which contains 128 alhanumeric characters similar to: `a0b1c2d3e4f5g6h7i8j9k0l1m2n3o4p5q6r7s8t9u0v1w2x3y4z5a6b7c8d9e0f1g2h3i4j5k6l7m8n9o0p1q2r3s4t5u6v7w8x9y0z1a2b3c4d5e6f7g8h9i0j1k2l3`

For the IP you run on your Node Server:
```sh
curl ifconfig.me
```
Provide both your Node ID and IP to your team lead.

## 10. Back Up Your Node p12
Refer to [p12 backup guide Windows](https://docs.constellationnetwork.io/validate/resources/p12backup-win), or [p12 backup guide Mac](https://docs.constellationnetwork.io/validate/resources/p12backup-mac) 

Keep this on a USB drive/secure file storage.

## 11. Secure Storage of Passwords
Ensure you have the following passwords written down and kept in a secure storage (password manager, USD drive or written down and kept safe):
1. `nodeadmin` password
2. `p12 file` password
3. *Optional* SSH user password (could also be with public key authorization, depending on Step 1 and 2)


# Setting Up Your Integrationnet Node

This guide is specifically for setting up your Integrationnet Node, and is opinionated with sensible defaults.

## 1. Choose VPS Provider
Refer to the [Constellation Network Setup Guides](https://docs.constellationnetwork.io/validate/setup-guides/) for choosing a VPS provider.

## 2. Provision Your VPS

### Minimum Specs for Your Node

| Type            | Minimum  |
|-----------------|----------|
| **CPU**         | 8+       |
| **RAM**         | 16GB RAM |
| **Disk Space**  | 320GB    |
| **Traffic Allowance** | 10 TB/month |

Suggested OS: **Ubuntu 22.04**

## 3. SSH into Your VPS
Refer to [this doc](https://docs.constellationnetwork.io/validate/validator/ssh-keys) for SSH instructions. Store your SSH public **and** private key on a USB drive/secure file storage.

## 4. Update OS
```sh
sudo apt-get update && sudo apt-get upgrade
```

## 5. Reboot
```sh
sudo reboot now
```
SSH into your VPS again using the user set by your VPS provider (e.g., `root` or `ubuntu`).

## 6. Install nodectl (Node Control Utility Program v2.14.1)
```sh
sudo nodectl auto_restart disable; sudo wget -N https://github.com/stardustcollective/nodectl/releases/download/v2.14.1/nodectl_x86_64 -P /usr/local/bin -O /usr/local/bin/nodectl; sudo chmod +x /usr/local/bin/nodectl; sudo nodectl -v
```

## 7. Install Tessellation
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

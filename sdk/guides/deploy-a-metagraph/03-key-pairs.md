---
id: key-pairs
title: Key pairs
---

Key pairs are a crucial part of securing your instances. They consist of a public key that AWS stores and a private key file that you store. The private key file is used to SSH into your instances securely. 

### Use the following steps to create a keypair
Navigate to the **`Key pairs`** page on the Amazon EC2 console.

![Key pair aws](/img/sdk/key-pair-1.png)
    
#### Click on **`Create key pair`**
Provide a unique name for your key pair, such as: `MetagraphKeyPair`

Your screen should now look similar to this:

![Key pair aws](/img/sdk/key-pair-2.png)

After you click **`Create key pair`**, a new key pair will be generated, and your browser will automatically download a file that contains your private key.

:::important
Safeguard this file as it will be necessary for SSH access to your instances. Do not share this file or expose it publicly as it could compromise the security of your instances.
:::

Store your keypair on your local machine in a secure location. You will need it to connect to your EC2 instances. 

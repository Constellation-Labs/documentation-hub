---
title: Add SSH Key
hide_table_of_contents: false
---

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

<head>
  <title>AWS Apply SSH Keys</title>
  <meta
    name="description"
    content="Uploading our Public key to AWS EC2 Instance"
  />
  <style>{`
    :root {
      --doc-item-container-width: 60rem;
    }
  `}
  </style>
</head>

## AWS - EC2

A virtual private machine (VPS) inside Amazon Web Service's cloud service is called an **EC2** instance.  This stands for *elastic compute cloud*.

You may access our YouTube video titled **Create AWS EC2**, for a detailed visual learning experience. 

You may also follow *step by step* instructions using the tutorial below for Apple/Linux or Windows. 

:::note
If you choose the YouTube Series, it is highly recommended to watch the entire series, from the beginning.
:::
SSH Key Generation Series - **Video 4b** by NetMet.

Please like and subscribe to support NetMet's work and to be alerted to new content specifically applied to **Constellation Network**, in the future.

<iframe width="80%" height="380" src="https://www.youtube.com/embed/0plYuXJwfOU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

We **need** a way to **access** our `EC2 Instance` (VPS). 

Please refer to the [SSH](../../validator/sshkeyExplained.md) section to create your SSH key pair.  

:::danger WARNING NOT RECOMMENDED
You also have the ability to create a less secure SSH key pair directly from AWS's **EC2** creation wizard.  This is **not** recommended because it does not offer the ability to supply a **passphrase** with your SSH key.  

This alone is an **X**!  Your Node will be supplying a hot wallet. If you do not have a passphrase to access your Node (therefor only needing the private key file), is a **bad idea**.

![](/img/validator_nodes/node-aws-autosshkey.png)

If you are on Windows choose `.ppk` as your format.

If you are on a Mac or Linux system choose `.pem` as your format.

This method has been shown in the documentation even though not recommended, because it could be used to speed up processes in development environments where Nodes might be built and terminated rapidly during testing, etc.
:::

## Upload SSH Key to AWS

### Access EC2 Compute Section

:::note
If you came from the previous section [Deploy EC2 (Part 1)](./createEC2.md) you should already be in the `Compute` section in the correct `Region` as your future Instance type.  Skip to [Select Key Pairs](#select-key-pairs)
:::

Click on the`Services` button to start our process.

![](/img/validator_nodes/node-aws-ec2-services1.png)

From the new drop down box, choose the option **`Compute`**.

![](/img/validator_nodes/node-aws-ec2-services2.png)

Choose the option **`EC2`** from the **Compute** section.

![](/img/validator_nodes/node-aws-ec2-services3.png)

### Region

We need to pick a `region` to host our EC2 instance.

:::note
You will need to choose a region that supports either an `a` type or `t` type compute instance.  Please refer to the [Create EC2](./createEC2.md) for further details.

Failure to have the correct region chosen will cause you to repeat this section again in order to upload your SSH key to the correct region.
:::

![](/img/validator_nodes/node-aws-ec2-3.png)
Once you have your **SSH Key Pair** created and uploaded to **AWS**; you can continue to the next section to launch your future Node **EC2** instance via the AWS Web Console. 

### Select Key Pairs

From the `left side` menu in the `Compute` section of the AWS dashboard, choose `Key Pairs`.  This is located half way down the menu under the `Network & Security` section.

![](/img/validator_nodes/node-aws-keypair-section.png)

On the top right, choose the `Action` dropdown, and select `Import key pair`.

![](/img/validator_nodes/node-aws-keypair-import.png)

You will be using the **PUBLIC** key that you created in the previous sections.

`Arrow marked 1`: Supply a simple name to identify your key pair as.  This can be a shortened version of the name of the key pair file you created, simple name that follows any standardization you may follow, or the exact name of the key pair files you created.  

`Arrow marked 2`: Click on the `Browse` button, navigate to your public key, select it.

`Arrow marked 3`: Click `Import key pair`.

`Arrow marked 4`: **optional/alternative** --> In the event you have issues browsing for an importing your public key, you can open the public key file; on your local machine, with your favorite editor and copy and paste the contents into the provided text-area box.

![](/img/validator_nodes/node-aws-keypair-import2.png)

Your `public key` should show up in the `Key pairs` list after the import is successful.

You are ready to return to building your `EC2 instance`.
---
id: configuring-base-instance
title: Configuring base instance
---

- From your **`Instances`** page, click on your instance.
- Then you should see something like this:

![configuring instance 01](/img/sdk/configuring-base-image-01.png)

- Click on the **`Connect`** button at the top of the page.
- We have different ways to access the instance. In this example, we will connect using `ssh`
- To use `ssh` we should use the file downloaded at step [Key pairs](/sdk/guides/setup-a-metagraph/key-pairs)
- Let’s run the instance. We need to give privileges to the downloaded file

```jsx
chmod 400 MyKeypair.pem
```

- Now, use the **`ssh`** command to connect to your instance:

```jsx
ssh -i "MyKeypair.pem" ubuntu@ec2-35-88-229-4.us-west-2.compute.amazonaws.com
```

- The name/IP of the instance will be different, but you can get the instructions on how to connect via ssh in the **`Connect to your instance`** section of the EC2 Console.:

![configuring instance 012](/img/sdk/configuring-base-image-02.png)

- If asked to confirm the fingerprint of the instance, type **`yes`**.
- Once connected, you should see a screen similar to this:

![configuring instance 03](/img/sdk/configuring-base-image-03.png)

- Now, you can start setting up your instance. Create a directory named **`code`** and navigate into it:

```bash
mkdir code
cd code/
```

- Next, install the necessary dependencies:

```bash
sudo apt-get update
```

```bash
sudo apt install openjdk-11-jdk -y
```

```bash
sudo apt-get install curl -y
sudo apt-get install wget -y
sudo apt-get install gnupg -y
```

```bash
sudo echo "deb https://repo.scala-sbt.org/scalasbt/debian all main" | sudo tee /etc/apt/sources.list.d/sbt.list
	sudo echo "deb https://repo.scala-sbt.org/scalasbt/debian /" | sudo tee /etc/apt/sources.list.d/sbt_old.list
sudo curl -sL "https://keyserver.ubuntu.com/pks/lookup?op=get&search=0x2EE0EA64E40A89B84B2DF73499E82A75642AC823" | sudo apt-key add
```

```bash
sudo apt-get update
```

```bash
sudo apt-get install sbt -y
```

- Next, clone the Tessellation repository and checkout the integrationnet node version. You can find the integrationnet node version using the **`/node/info`** endpoint.

![configuring instance 04](/img/sdk/configuring-base-image-04.png)

```bash
git clone https://github.com/Constellation-Labs/tessellation.git
cd tessellation
git checkout v2.0.0-alpha.7
```

- Create a GitHub token to build and publish the JARs.
- Instructions on creating an **[access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)** can be found in the GitHub documentation. The token should only have the **`read:packages`** scope.
- Ensure you have a clean **`.m2`** directory:

```bash
rm -r ~/.m2
```

- Publish the JARs that will be used for the Metagraph instances:

```bash

export GITHUB_TOKEN=:your_token
sbt clean
```

```bash

sbt shared/publishM2
```

```scala

sbt kernel/publishM2 keytool/publishM2 sdk/publishM2 dagL1/publishM2 currencyL0/publishM2 currencyL1/publishM2
```

This will take some time.

- Return to the root directory:

```scala
cd ..
```

- Install the coursier and giter8 packages:

```bash
curl -fL https://github.com/coursier/coursier/releases/latest/download/cs-x86_64-pc-linux.gz | gzip -d > cs && chmod +x cs && ./cs set
```

```bash
source ~/.profile
cs install giter8
```

- Now create the Metagraph project. We will use the `gitter` lib for that
- **We should provide the same version as the Tessellation checkout above**

```bash
g8 Constellation-Labs/currency --tag v2.0.0-alpha.7 --name="my-project" --tessellation_version="2.0.0-alpha.6"
```

- If you want to customize the reward logic before compiling, see the **[Customize Rewards](https://docs.constellationnetwork.io/sdk/guides/customize-rewards/)** guide:
https://docs.constellationnetwork.io/sdk/guides/customize-rewards/
- Compile the Metagraph L0 and Metagraph L1 jars:

```bash
cd my-project/
sbt clean currencyL0/assembly currencyL1/assembly
```

- Move and rename the JARs to the **`/code`** directory:

```bash
cd ..
mv my-project/modules/l0/target/scala-2.13/my-project-currency-l0-assembly-0.1.0-SNAPSHOT.jar metagraph-l0.jar
mv my-project/modules/l1/target/scala-2.13/my-project-currency-l1-assembly-0.1.0-SNAPSHOT.jar metagraph-l1.jar
```

- We should now download some files from the Tessellation repo releases. In this example, we should go to the releases [https://github.com/Constellation-Labs/tessellation/releases/tag/v2.0.0-](https://github.com/Constellation-Labs/tessellation/releases/tag/v2.0.0-alpha.3)alpha.7
- Then we need the files: cl-node.jar, cl-wallet.jar

```bash
wget https://github.com/Constellation-Labs/tessellation/releases/download/v2.0.0-alpha.7/cl-node.jar
wget https://github.com/Constellation-Labs/tessellation/releases/download/v2.0.0-alpha.7/cl-wallet.jar
wget https://github.com/Constellation-Labs/tessellation/releases/download/v2.0.0-alpha.7/cl-keytool.jar
```

- Create a **`genesis.csv`** file:

```bash
touch genesis.csv
```

- Edit the genesis file: (**We used ‘vim’ in this example, you can choose any text editors that you want to**):

```bash
vim genesis.csv
```

- Add the following values to the file: (**NOTE: The addresses and amounts below are just examples, you can replace them with any of your addresses and amounts if you want to**):

```bash
DAG8pkb7EhCkT3yU87B2yPBunSCPnEdmX2Wv24sZ,1000000000000
DAG4o41NzhfX6DyYBTTXu6sJa6awm36abJpv89jB,1000000000000
DAG4Zd2W2JxL1f1gsHQCoaKrRonPSSHLgcqD7osU,1000000000000
```

- Right now, we have the base image configured. This image will be used in all Metagraph instances
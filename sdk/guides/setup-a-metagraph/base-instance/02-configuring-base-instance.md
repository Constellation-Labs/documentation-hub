---
id: configuring-base-instance
title: Configuring base instance
---

## Connecting to the instance

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
ssh -i "MyKeypair.pem" ubuntu@your_instance.aws-region.compute.amazonaws.com
```

- The name/IP of the instance will be different, but you can get the instructions on how to connect via ssh in the **`Connect to your instance`** section of the EC2 Console.:

![configuring instance 012](/img/sdk/configuring-base-image-02.png)

- If asked to confirm the fingerprint of the instance, type **`yes`**.
- Once connected, you should see a screen similar to this:

![configuring instance 03](/img/sdk/configuring-base-image-03.png)

## Base instance setup

- Now, you can start setting up your instance. Create a directory named **`code`** and navigate into it:

```bash
mkdir code
cd code/
```

- Additionally, let's create the following directories: `global-l0`, `metagraph-l0`, `currency-l1`, and `data-l1`. These will be the root directories for our global L0 instance (`global-l0`) each of our metagraph layers (`metagraph-l0`, `currency-l1`, `data-l1`).

```bash
mkdir global-l0
mkdir metagraph-l0
mkdir currency-l1
mkdir data-l1
```

- Install the necessary dependencies:

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

- For the metagraph execution you need to generate the metagraph JARs. There are two ways to obtain these JARs: 

  - [Generating JARs on Base Instance](/sdk/guides/setup-a-metagraph/base-instance/generating-metagraph-jars)
	-	[Generating JARs with the Euclid SDK](/sdk/guides/setup-a-metagraph/base-instance/using-jars-from-euclid)
  

## Setting up the genesis file

:::info
The Genesis file is a crucial component of your Metagraph. Thats where you generate the initial token balances for your initial distributions.
:::

### Dependencies
- Start by downloading some files from the Tessellation repo releases. Go to the releases [https://github.com/Constellation-Labs/tessellation/releases/latest](https://github.com/Constellation-Labs/tessellation/releases/latest)
- Then we need the files: cl-keytool.jar, cl-wallet.jar, and cl-node.jar
- Move to the `code` directory and run the following
 
```bash
wget https://github.com/Constellation-Labs/tessellation/releases/download/v2.2.0/cl-node.jar
wget https://github.com/Constellation-Labs/tessellation/releases/download/v2.2.0/cl-wallet.jar
wget https://github.com/Constellation-Labs/tessellation/releases/download/v2.2.0/cl-keytool.jar

cp cl-wallet.jar metagraph-l0/cl-wallet.jar
cp cl-wallet.jar currency-l1/cl-wallet.jar
mv cl-wallet.jar data-l1/cl-wallet.jar

cp cl-keytool.jar metagraph-l0/cl-keytool.jar
cp cl-keytool.jar currency-l1/cl-keytool.jar
mv cl-keytool.jar data-l1/cl-keytool.jar

mv cl-node.jar global-l0/global-l0.jar
```

:::warning 
Make sure you're using the latest version of Tessellation. You can find the most recent release in [**here**](https://github.com/Constellation-Labs/tessellation/releases).
:::

### Genesis file
#### Using genesis.csv from Euclid
- If you already have your genesis file used for testing on Euclid, you can upload the file here.
- To send your `genesis.csv` file, you can use `scp`:
```bash
scp -i "MyKeypair.pem" your_genesis_file.csv ubuntu@ec2-your-ip.your-region.compute.amazonaws.com:code/metagraph-l0/genesis.csv
```

#### Creating genesis.csv
- If you don't have a `genesis.csv` file, or want's to create it, you can follow the steps below
- Move to the directory `code/metagraph-l0` 
- Create a **`genesis.csv`** file:

```bash
touch genesis.csv
```

- Edit the genesis file:

:::info
The steps below use vim, you can use any text editor of your preference
:::

```bash
vim genesis.csv
```

- Add the following values to the file: 

```bash
DAG8pkb7EhCkT3yU87B2yPBunSCPnEdmX2Wv24sZ,1000000000000
DAG4o41NzhfX6DyYBTTXu6sJa6awm36abJpv89jB,1000000000000
DAG4Zd2W2JxL1f1gsHQCoaKrRonPSSHLgcqD7osU,1000000000000
```
:::note
These are example values, feel free to use any address and values of your choice
:::

:::info
Edit the addresses and balances according to your needs or leave the file empty if your Metagraph starts without any token distribution.
:::

### Generating metagraphID

- Now that you have generated your genesis file, the next step is to generate the metagraphID. This metagraph ID will be used to grant your metagraph access to the network (MainNet only) and is the identifier that your metagraph will use on the DAG Explorer. 
- To generate your metagraphID, execute the following command:
```bash
export CL_KEYSTORE=test.p12
export CL_KEYALIAS=test
export CL_PASSWORD=test
export CL_PUBLIC_HTTP_PORT=9100
export CL_P2P_HTTP_PORT=9101
export CL_CLI_HTTP_PORT=9102
export CL_GLOBAL_L0_PEER_HTTP_HOST=localhost
export CL_GLOBAL_L0_PEER_HTTP_PORT=9000
export CL_GLOBAL_L0_PEER_ID=e2f4496e5872682d7a55aa06e507a58e96b5d48a5286bfdff7ed780fa464d9e789b2760ecd840f4cb3ee6e1c1d81b2ee844c88dbebf149b1084b7313eb680714
export CL_APP_ENV=integrationnet

java -jar cl-keytool.jar generate

nohup java -jar metagraph-l0.jar create-genesis genesis.csv > metagraph-l0.log 2>&1 &

rm test.p12
```
- The environment variables above are required, but they will be overwritten in the next steps
 
- This command should complete successfully, and you should find the following files in your directory:
  - `genesis.snapshot`
  - `genesis.address`

- You can open the `genesis.address` file to view your metagraphID, which should resemble a DAG address: `DAG...`

:::important
On MainNet, the MetagraphID needs to be shared with the Constellation Network team to be added to the seedlist
:::

The base instance is now completely configured and you will use it in all metagraph instances
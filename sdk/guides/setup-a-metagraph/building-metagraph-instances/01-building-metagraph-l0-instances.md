---
id: building-metagraph-L0-instances
title: Building metagraph L0 Instances
---

Let’s create our Metagraph L0 😎, our L0 will need you to set up at least 3 instances, each instance will have its own Global L0 and Metagraph L0.

:::note
 Remember to replace the parameters that start with `:something...` with your own specific values 
:::

:::note
 METAGRAPH_ID it's the metagraphID generated when [Configuring Base Instance](/sdk/guides/setup-a-metagraph/base-instance/configuring-base-instance)
:::

:::important
The **`METAGRAPH_ID`** must remain consistent for all nodes across the L0 and L1 layers.
:::

### Shared Steps

These steps should be performed for each instance you wish to create.

- Visit the AMI page and select the appropriate image.
- Press the **`Launch instance from AMI`** button.
- Name your instance, select the **`Instance Type`** as **`t2.large`**, choose your **`Key pair`**, and select the appropriate **`Security Groups`**.
- Then press `Launch Instance`
- To connect to the instance, use **`ssh`** or another AWS-provided option. If the instance user differs from **`ubuntu`**, switch to **`ubuntu`** before proceeding.
- Upon connecting, navigate to the `code` folder using

```bash
cd code
```

### Setup Metagraph L0 - Instance 1

To create the first Metagraph L0 instance, follow these steps:

- Securely transfer one of your **`p12`** files to the instance using **`scp`**. For example:

```bash
scp -i "MyKeypair.pem" :p12_file.p12 your_instance:code
```

- In this guide, the **`p12`** file is referred to as **`metagraph-file.p12`**.

**Creating the Global L0**

- Let’s copy the `.p12` file to global-l0 directory

```bash
cp metagraph-file.p12 global-l0/
cd global-l0/
```

- Ensure that the **`p12`** file in the **`global-l0`** directory is authorized on the integrationnet seedlist.
- Download the seedlist to the **`global-l0`** folder using

```bash
wget https://constellationlabs-dag.s3.us-west-1.amazonaws.com/integrationnet-seedlist
```

- Set the following environment variables:

```bash
export CL_KEYSTORE=":p12_file_used_on_seedlist_1.p12"
export CL_KEYALIAS=":p12_file_used_on_seedlist_1"
export CL_PASSWORD=":file_password_1"
```

- Obtain the public IP of your cluster by using

```bash
curl ifconfig.me
```

- Run the following command:

```bash
nohup java -jar cl-node.jar run-validator --ip :instance_public_ip --public-port 6000 --p2p-port 6001 --cli-port 6002 --collateral 0 --seedlist integrationnet-seedlist -e integrationnet  > logs.log 2>&1 &
```

- You should see that 1 file and 1 directory were created: `logs.log` and `logs`
- Inside the directory `logs` you can see one file `app.log`. Here is the initialization logs
- Now we need to join this Global L0 to the integrationnet, run the following command:

```bash
curl -v -X POST http://localhost:6002/cluster/join -H "Content-type: application/json" -d '{ "id":":integrationnet_node_id", "ip": ":integrationnet_node_ip", "p2pPort": :integrationnet_node_p2p_port }'
```

- The **`id`**, **`ip`**, and **`p2pPort`** parameters are obtained from inspecting the node info on the integrationnet. For example: **http://103.145.63.182:9000/node/info**.
- You can check if your node successfully joined the integrationnet at:
http://:your_ip:6000/cluster/info 

Now that we have one global L0 instance running, we need to run our metagraph L0 instance

- Return to the `code` folder and move to the `metagraph-l0` directory

```bash
cd ../metagraph-l0
```

- We should use a authorized `.p12` file, we can use the previous one used on global-l0 layer and set the same parameters:

```bash
cp ../metagraph-file.p12 metagraph-file.p12
export CL_KEYSTORE=":p12_file_used_on_seedlist_1.p12"
export CL_KEYALIAS=":p12_file_used_on_seedlist_1"
export CL_PASSWORD=":file_password_1"
```

- We should provide the following parameters:

```bash

export CL_PUBLIC_HTTP_PORT=7000
export CL_P2P_HTTP_PORT=7001
export CL_CLI_HTTP_PORT=7002
export CL_GLOBAL_L0_PEER_HTTP_HOST=localhost
export CL_GLOBAL_L0_PEER_HTTP_PORT=6000
export CL_GLOBAL_L0_PEER_ID=:local_global_l0_id
CL_APP_ENV=integrationnet
export CL_COLLATERAL=0
```

- run the following command:

```bash
nohup java -jar metagraph-l0.jar run-genesis genesis.snapshot --ip :instance_ip > metagraph-l0-logs.log 2>&1 &
```

- Folder `logs` should will be created.
- You can check if your Metagraph L0 successfully started:
[http://:your_ip:7000/cluster/info](https://www.notion.so/Generating-Base-Instance-39cef6eda5e346939184d18855312044?pvs=21)

### Setup Metagraph L0 - Intance #2

- We will need another `p12` file , you can use `scp` to send the p12 file to the instance in a secure way:

```bash
scp -i "MyKeypair.pem" :p12_file.p12 your_instance:code
```

- Let's call our `p12` file in this example of `metagraph-file-1.p12`

**GLOBAL L0**

- Let’s copy the `.p12` file to global-l0 directory

```bash
cp metagraph-file-1.p12 global-l0/
cd global-l0/
```

:::important
The p12 file inside the global-l0 folder has to be authorized on the integrationnet seedlist and different from instance 1
:::important

- Download the seedlist to the folder

```bash
wget https://constellationlabs-dag.s3.us-west-1.amazonaws.com/integrationnet-seedlist
```

- Run the global L0 instance. For that, we need to provide some parameters first:

```bash
export CL_KEYSTORE=":p12_file_used_on_seedlist_2.p12"
export CL_KEYALIAS=":p12_file_used_on_seedlist_2"
export CL_PASSWORD=":file_password_2"
```

- You need to get the public IP of the cluster:

```bash
curl ifconfig.me
```

- Then you need to run the following command:

```bash
nohup java -jar cl-node.jar run-validator --ip :instance_public_ip --public-port 6100 --p2p-port 6101 --cli-port 6102 --collateral 0 --seedlist integrationnet-seedlist -e integrationnet  > logs.log 2>&1 &
```

- You should see that 1 file and 1 directory were created: `logs.log` and `logs`
- Inside the directory `logs` you can see one file `app.log`.
- Now we need to add this Global L0 to the integrationnet:

```bash
curl -v -X POST http://localhost:6102/cluster/join -H "Content-type: application/json" -d '{ "id":":integrationnet_node_id", "ip": ":integrationnet_node_ip", "p2pPort": :integrationnet_node_p2p_port }'
```

- The parameters: `id`, `ip`, and `p2pPort` are found inspecting the node info on integrationnet, as an example: http://103.145.63.182:9000/node/info
- You can check if your node successfully joined the integrationnet by doing this:
http://:your_ip:6000/cluster/info

Now that we have one global L0 instance running, we need to run our metagraph L0 instance

- Return to the `code` folder and move to the `metagraph-l0` directory

```bash
cd ../metagraph-l0
```

- We should use one authorized `.p12` file, we can use the previous one used on global-l0 layer and set the same parameters:

```bash
cp ../metagraph-file-1.p12 metagraph-file-1.p12
export CL_KEYSTORE=":p12_file_used_on_seedlist_2.p12"
export CL_KEYALIAS=":p12_file_used_on_seedlist_2"
export CL_PASSWORD=":file_password_2"
```

- We should also provide the following parameters:

```bash

export CL_PUBLIC_HTTP_PORT=7100
export CL_P2P_HTTP_PORT=7101
export CL_CLI_HTTP_PORT=7102
export CL_GLOBAL_L0_PEER_HTTP_HOST=localhost
export CL_GLOBAL_L0_PEER_HTTP_PORT=6000
export CL_GLOBAL_L0_PEER_ID=:local_global_node_id
export CL_L0_TOKEN_IDENTIFIER=:**METAGRAPH_ID**
CL_APP_ENV=integrationnet
export CL_COLLATERAL=0
```

- Execute the command:

```bash
nohup java -jar metagraph-l0.jar run-validator --ip :ip > metagraph-l0-logs.log 2>&1 &
```

- The same folder `logs` should be created.
- Now we are running Metagraph L0 - 2 as a validator, so we need to join Metagraph L0 - 1. You can get the information by doing this:

```bash
http://:metagraph-l0-instance-1:7000/node/info
```

```bash
curl -v -X POST http://localhost:7102/cluster/join -H "Content-type: application/json" -d '{ "id":":metagraph_node_1_id", "ip": "metagraph_node_1_ip", "p2pPort": 7001 }'
```

- You can check if your Metagraph L0 successfully started:
[http://:your_ip:7000/cluster/info](http://:your_ip:7000/cluster/info)

### Setup Metagraph L0 - Instance #3

- We need another of the `p12` files here, you can use `scp` to send the p12 file to the instance in a secure way, like this:

```bash
scp -i "MyKeypair.pem" :p12_file.p12 your_instance:code
```

- Let's call our `p12` file in this example of `metagraph-file-2.p12`

**GLOBAL L0**

- Let’s copy the `.p12` file to global-l0 directory

```bash
cp metagraph-file-2.p12 global-l0/
cd global-l0/
```

:::important
The p12 file inside the global-l0 folder has to be authorized on the integrationnet seedlist and different from the other instances
:::important

- Download the seedlist to the folder

```bash
wget https://constellationlabs-dag.s3.us-west-1.amazonaws.com/integrationnet-seedlist
```

- Run the global L0 instance. For that, we need to provide some parameters first:

```bash
export CL_KEYSTORE=":p12_file_used_on_seedlist_3.p12"
export CL_KEYALIAS=":p12_file_used_on_seedlist_3"
export CL_PASSWORD=":file_password_3"
```

- You need to get the public IP for the cluster:

```bash
curl ifconfig.me
```

- Run the following command:

```bash
nohup java -jar cl-node.jar run-validator --ip :instance_public_ip --public-port 6200 --p2p-port 6201 --cli-port 6202 --collateral 0 --seedlist integrationnet-seedlist -e integrationnet  > logs.log 2>&1 &
```

- You should see that 1 file and 1 directory were created: `logs.log` and `logs`
- Inside the directory `logs` you can see one file `app.log` .Here is the initialization logs
- Now we need to add this Global L0 to the integrationnet:

```bash
curl -v -X POST http://localhost:6202/cluster/join -H "Content-type: application/json" -d '{ "id":":integrationnet_node_id", "ip": ":integrationnet_node_ip", "p2pPort": :integrationnet_node_p2p_port }'
```

- The parameters: `id`, `ip`, and `p2pPort` can be found by inspecting the node info on integrationnet, as an example: http://103.145.63.182:9000/node/info
-Check if your node successfully joined the integrationnet:
http://:your_ip:6000/cluster/info

Now that we have one global L0 instance running, we need to run our metagraph L0 instance

- Return to the `code` folder and move to the `metagraph-l0` directory

```bash
cd ../metagraph-l0
```

- We should use one authorized `.p12` file, we can use the previous one used on global-l0 layer and set the same parameters:

```bash
cp ../metagraph-file-2.p12 metagraph-file-2.p12
export CL_KEYSTORE=":p12_file_used_on_seedlist_3.p12"
export CL_KEYALIAS=":p12_file_used_on_seedlist_3"
export CL_PASSWORD=":file_password_3"
```

- We should provide the following parameters:

```bash
export CL_PUBLIC_HTTP_PORT=7200
export CL_P2P_HTTP_PORT=7201
export CL_CLI_HTTP_PORT=7202
export CL_GLOBAL_L0_PEER_HTTP_HOST=localhost
export CL_GLOBAL_L0_PEER_HTTP_PORT=6000
export CL_GLOBAL_L0_PEER_ID=:local_global_node_id
export CL_L0_TOKEN_IDENTIFIER=:**METAGRAPH_ID**
CL_APP_ENV=integrationnet
export CL_COLLATERAL=0
```

- And then we can call this:

```bash
nohup java -jar metagraph-l0.jar run-validator --ip :ip > metagraph-l0-logs.log 2>&1 &
```

- The same folder `logs` should be created.
- Now we are running Metagraph L0 - 2 as a validator, so we need to join Metagraph L0 - 1. You can get the information by doing this:

```bash
http://:metagraph-l0-instance-1:7000/node/info
```

```bash
curl -v -X POST http://localhost:7202/cluster/join -H "Content-type: application/json" -d '{ "id":":metagraph_node_1_id", "ip": "metagraph_node_1_ip", "p2pPort": 9001 }'
```

- You can check if your Metagraph L0 successfully started by doing this:
[http://:your_ip:7000/cluster/info](http://:your_ip:7000/cluster/info)
- We need another of the `p12` files here, you can use `scp` to send the p12 file to the instance in a secure way, like this:

```bash
scp -i "MyKeypair.pem" :p12_file.p12 your_instance:code
```
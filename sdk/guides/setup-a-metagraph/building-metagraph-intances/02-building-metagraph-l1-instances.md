---
id: building-metagraph-L1-instances
title: Building metagraph L1 Instances
---


Let’s create our Metagraph L1 😎, our L1 will need you to set up at least 3 instances. 

:::note
 Remember to replace the parameters that start with `:something...` with your own specific values 
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
- Upon connecting, navigate to the code folder using

```bash
cd code/
```

### Setup Metagraph L1 - Instance #1

- Let's call our `p12` file in this example of `metagraph-file.p12`
- You can remove the old one from this instance

```bash
rm metagraph-file.p12
```

- Then we can create a new one:

```bash
export CL_KEYSTORE="metagraph_integrationnet.p12"
export CL_KEYALIAS="metagraph_integrationnet"
export CL_PASSWORD="password"

java -jar cl-keytool.jar generate
```

- We should provide the following parameters:

```bash
export CL_PUBLIC_HTTP_PORT=9000
export CL_P2P_HTTP_PORT=9001
export CL_CLI_HTTP_PORT=9002
export CL_GLOBAL_L0_PEER_HTTP_HOST=:ip_from_metagraph_l0_node_1_global_l0
export CL_GLOBAL_L0_PEER_HTTP_PORT=8000
export CL_GLOBAL_L0_PEER_ID=:id_from_metagraph_l0_node_1_global_l0
export CL_L0_PEER_HTTP_HOST=:ip_from_metagraph_l0_node_1_metagraph_l0
export CL_L0_PEER_HTTP_PORT=9000
export CL_L0_PEER_ID=:id_from_metagraph_l0_node_1_metagraph_l0
export CL_L0_TOKEN_IDENTIFIER=:**METAGRAPH_ID**
export CL_APP_ENV=testnet
export CL_COLLATERAL=0
```

- And then we can call this:

```bash
nohup java -jar metagraph-l1.jar run-initial-validator --ip :instance_ip > metagprah-l1-logs.log 2>&1 &
```

- The same folder `logs` should be created.
- Check if your Metagraph L1 successfully started:
[http://:your_ip:9000/cluster/info](https://www.notion.so/Generating-Base-Instance-39cef6eda5e346939184d18855312044?pvs=21)

### Setup Metagraph L1 - Instance #2

- Let's name our `p12` file in this example of `metagraph-file.p12`
- We can remove the old one from this instance

```bash
rm metagraph-file.p12
```

- Then we create a new one:

```bash
export CL_KEYSTORE="metagraph_integrationnet.p12"
export CL_KEYALIAS="metagraph_integrationnet"
export CL_PASSWORD="password"

java -jar cl-keytool.jar generate
```

- We should provide the following parameters:

```bash
export CL_PUBLIC_HTTP_PORT=9000
export CL_P2P_HTTP_PORT=9001
export CL_CLI_HTTP_PORT=9002
export CL_GLOBAL_L0_PEER_HTTP_HOST=:ip_from_metagraph_l0_node_1_global_l0
export CL_GLOBAL_L0_PEER_HTTP_PORT=8000
export CL_GLOBAL_L0_PEER_ID=:id_from_metagraph_l0_node_1_global_l0
export CL_L0_PEER_HTTP_HOST=:ip_from_metagraph_l0_node_1_metagraph_l0
export CL_L0_PEER_HTTP_PORT=9000
export CL_L0_PEER_ID=:id_from_metagraph_l0_node_1_metagraph_l0
export CL_L0_TOKEN_IDENTIFIER=:**METAGRAPH_ID**
export CL_APP_ENV=testnet
export CL_COLLATERAL=0
```

- And run:

```bash
nohup java -jar metagraph-l1.jar run-validator --ip :ip > currency-l1-logs.log 2>&1 &
```

- Now we are running Metagraph L1 - Instance #2 as a validator, so we need to join Metagraph L1 - Instance #1. You can get the information:

```bash
http://:metagraph-l1-instance-1:9000/node/info
```

```bash
curl -v -X POST http://localhost:9002/cluster/join -H "Content-type: application/json" -d '{ "id":":id_from_metagraph_l1_1", "ip": ":ip_from_metagraph_l1", "p2pPort": 9001 }'
```

- The same folder `logs` should be created.
- You can check if your Metagraph L1 successfully started by doing this:
[http://:your_ip:9000/cluster/info](https://www.notion.so/Generating-Base-Instance-39cef6eda5e346939184d18855312044?pvs=21)

### Setup Metagraph L1 - Instance #3

- Let's call our `p12` file in this example of `metagraph-file.p12`
- We can remove the old one from this instance

```bash
rm metagraph-file.p12
```

- Then we can create a new one:

```bash
export CL_KEYSTORE="metagraph_integrationnet.p12"
export CL_KEYALIAS="metagraph_integrationnet"
export CL_PASSWORD="password"

java -jar cl-keytool.jar generate
```

- We should provide the following parameters:

```bash
export CL_PUBLIC_HTTP_PORT=9000
export CL_P2P_HTTP_PORT=9001
export CL_CLI_HTTP_PORT=9002
export CL_GLOBAL_L0_PEER_HTTP_HOST=:ip_from_metagraph_l0_node_1_global_l0
export CL_GLOBAL_L0_PEER_HTTP_PORT=8000
export CL_GLOBAL_L0_PEER_ID=:id_from_metagraph_l0_node_1_global_l0
export CL_L0_PEER_HTTP_HOST=:ip_from_metagraph_l0_node_1_metagraph_l0
export CL_L0_PEER_HTTP_PORT=9000
export CL_L0_PEER_ID=:id_from_metagraph_l0_node_1_metagraph_l0
export CL_L0_TOKEN_IDENTIFIER=:**METAGRAPH_ID**
export CL_APP_ENV=testnet
export CL_COLLATERAL=0
```

- And then we can call this:

```bash
nohup java -jar metagraph-l1.jar run-validator --ip :ip > currency-l1-logs.log 2>&1 &
```

- Now we are running Metagraph L1 - Instance #3 as a validator, so we need to join Metagraph L1 - Instance #1. You can get the information at:

```bash
http://:metagraph-l1-instance-1:9000/node/info
```

```bash
curl -v -X POST http://localhost:9002/cluster/join -H "Content-type: application/json" -d '{ "id":":id_from_metagraph_l1_1", "ip": ":ip_from_metagraph_l1", "p2pPort": 9001 }'
```

- The same folder `logs` should be created.
- You can check if your Metagraph L1 successfully started at:
[http://:your_ip:9000/cluster/info](https://www.notion.so/Generating-Base-Instance-39cef6eda5e346939184d18855312044?pvs=21)
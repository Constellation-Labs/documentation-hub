---
id: building-metagraph-L0-instances
title: Building metagraph-l0 instances
---

Let’s create our Metagraph L0 😎

:::note
- Remember to replace the parameters that start with `:something...` with your own specific values
- You can learn how to run instances from AMI **[here](/sdk/guides/setup-a-metagraph/base-instance/launching-instances-from-ami)**
- Please note that we only require three instances for all layers (`global-l0`, `metagraph-l0`, `currency-l1`, and `data-l1`). We will organize these layers into directories for the instances.
- METAGRAPH_ID is the metagraphID generated in the [Configuring Base Instance](/sdk/guides/setup-a-metagraph/base-instance/configuring-base-instance) guide. 
:::

:::important
The **`METAGRAPH_ID`** must remain consistent for all nodes across the L0 and L1 layers.
:::

### P12 files
- As mentioned earlier, you will need a minimum of three p12 files. Make sure to assign each unique file to a separate instance.
- Securely transfer one of your **`p12`** files to the instance using **`scp`**. For example:
```bash
scp -i "MyKeypair.pem" :p12_file.p12 your_instance:code/metagraph-l0
```
- In this guide, the **`p12`** file is referred to as **`metagraph-file.p12`**.
- Ensure that the **`p12`** file in the **`metagraph-l0`** directory is authorized on the integrationnet seedlist.
- Download the seedlist to the **`metagraph-l0`** folder using

```bash
wget https://constellationlabs-dag.s3.us-west-1.amazonaws.com/integrationnet-seedlist
```

### Setup Metagraph L0 - Instance 1

- Navigate to the `metagraph-l0` directory

```bash
cd code/metagraph-l0
```

- We should use a authorized `.p12` file, we can use the previous one used on global-l0 layer and set the same parameters:

```bash
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

### Setup Metagraph L0 - Instance #2

- Navigate to the `metagraph-l0` directory

```bash
cd code/metagraph-l0
```

- We should use one authorized `.p12` file, we can use the previous one used on global-l0 layer and set the same parameters:

```bash
export CL_KEYSTORE=":p12_file_used_on_seedlist_2.p12"
export CL_KEYALIAS=":p12_file_used_on_seedlist_2"
export CL_PASSWORD=":file_password_2"
```

- We should also provide the following parameters:

```bash

export CL_PUBLIC_HTTP_PORT=7000
export CL_P2P_HTTP_PORT=7001
export CL_CLI_HTTP_PORT=7002
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
curl -v -X POST http://localhost:7002/cluster/join -H "Content-type: application/json" -d '{ "id":":metagraph_node_1_id", "ip": "metagraph_node_1_ip", "p2pPort": 7001 }'
```

- You can check if your Metagraph L0 successfully started:
[http://:your_ip:7000/cluster/info](http://:your_ip:7000/cluster/info)

### Setup Metagraph L0 - Instance #2

- Navigate to the `metagraph-l0` directory

```bash
cd code/metagraph-l0
```

- We should use one authorized `.p12` file, we can use the previous one used on global-l0 layer and set the same parameters:

```bash
export CL_KEYSTORE=":p12_file_used_on_seedlist_3.p12"
export CL_KEYALIAS=":p12_file_used_on_seedlist_3"
export CL_PASSWORD=":file_password_3"
```

- We should also provide the following parameters:

```bash

export CL_PUBLIC_HTTP_PORT=7000
export CL_P2P_HTTP_PORT=7001
export CL_CLI_HTTP_PORT=7002
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
curl -v -X POST http://localhost:7002/cluster/join -H "Content-type: application/json" -d '{ "id":":metagraph_node_1_id", "ip": "metagraph_node_1_ip", "p2pPort": 7001 }'
```

- You can check if your Metagraph L0 successfully started:
[http://:your_ip:7000/cluster/info](http://:your_ip:7000/cluster/info)

:::note
 Ensure that each instance is associated with a distinct authorized `p12` file on the seedlist.
:::
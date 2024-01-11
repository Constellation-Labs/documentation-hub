---
id: building-data-l1-instances
title: Building data-l1 instances
---


Let’s create our Data L1 😎

:::note
 Remember to replace the parameters that start with `:something...` with your own specific values 
:::

:::note
 You can learn how to run instances from AMI [here](/sdk/guides/setup-a-metagraph/base-instance/launching-instances-from-ami)
:::

:::note
 Please note that we only require three instances for all layers (`global-l0`, `metagraph-l0`, `currency-l1`, and `data-l1`). We will organize these layers into directories for the instances.
:::

:::note
 METAGRAPH_ID is the metagraphID generated in the [Configuring Base Instance](/sdk/guides/setup-a-metagraph/base-instance/configuring-base-instance) guide. 
:::

:::important
The **`METAGRAPH_ID`** must remain consistent for all nodes across the L0 and L1 layers.
:::

### Setup Data L1 - Instance #1
- Navigate to the `data-l1` directory

```bash
cd code/data-l1
```

- We should use a authorized `.p12` file, we can use the previous one used on global-l0 layer and set the same parameters:

```bash
export CL_KEYSTORE=":p12_file_used_on_seedlist_1.p12"
export CL_KEYALIAS=":p12_file_used_on_seedlist_1"
export CL_PASSWORD=":file_password_1"
```

- We should provide the following parameters:

```bash
export CL_PUBLIC_HTTP_PORT=8000
export CL_P2P_HTTP_PORT=8001
export CL_CLI_HTTP_PORT=8002
export CL_GLOBAL_L0_PEER_HTTP_HOST=:ip_from_metagraph_l0_node_1_global_l0
export CL_GLOBAL_L0_PEER_HTTP_PORT=6000
export CL_GLOBAL_L0_PEER_ID=:id_from_metagraph_l0_node_1_global_l0
export CL_L0_PEER_HTTP_HOST=:ip_from_metagraph_l0_node_1_metagraph_l0
export CL_L0_PEER_HTTP_PORT=7000
export CL_L0_PEER_ID=:id_from_metagraph_l0_node_1_metagraph_l0
export CL_L0_TOKEN_IDENTIFIER=:**METAGRAPH_ID**
export CL_APP_ENV=integrationnet
export CL_COLLATERAL=0
```

- And then we can call this:

```bash
nohup java -jar data-l1.jar run-initial-validator --ip :instance_ip > metagprah-l1-logs.log 2>&1 &
```

- The same folder `logs` should be created.
- Check if your Data L1 successfully started:
[http://:your_ip:8000/cluster/info](https://www.notion.so/Generating-Base-Instance-39cef6eda5e346939184d18855312044?pvs=21)

### Setup Data L1 - Instance #2
- Navigate to the `data-l1` directory

```bash
cd code/data-l1
```

- We should use a authorized `.p12` file, we can use the previous one used on global-l0 layer and set the same parameters:

```bash
export CL_KEYSTORE=":p12_file_used_on_seedlist_2.p12"
export CL_KEYALIAS=":p12_file_used_on_seedlist_2"
export CL_PASSWORD=":file_password_2"
```

- We should provide the following parameters:

```bash
export CL_PUBLIC_HTTP_PORT=8000
export CL_P2P_HTTP_PORT=8001
export CL_CLI_HTTP_PORT=8002
export CL_GLOBAL_L0_PEER_HTTP_HOST=:ip_from_metagraph_l0_node_1_global_l0
export CL_GLOBAL_L0_PEER_HTTP_PORT=6000
export CL_GLOBAL_L0_PEER_ID=:id_from_metagraph_l0_node_1_global_l0
export CL_L0_PEER_HTTP_HOST=:ip_from_metagraph_l0_node_1_metagraph_l0
export CL_L0_PEER_HTTP_PORT=7000
export CL_L0_PEER_ID=:id_from_metagraph_l0_node_1_metagraph_l0
export CL_L0_TOKEN_IDENTIFIER=:**METAGRAPH_ID**
export CL_APP_ENV=integrationnet
export CL_COLLATERAL=0
```

- And run:

```bash
nohup java -jar currency-l1.jar run-validator --ip :ip > currency-l1-logs.log 2>&1 &
```

- Now we are running Currency L1 - Instance #2 as a validator, so we need to join Currency L1 - Instance #1. You can get the information:

```bash
http://:currency-l1-instance-1:8000/node/info
```

```bash
curl -v -X POST http://localhost:8002/cluster/join -H "Content-type: application/json" -d '{ "id":":id_from_currency_l1_1", "ip": ":ip_from_currency_l1", "p2pPort": 8001 }'
```

- The same folder `logs` should be created.
- You can check if your Currency L1 successfully started by doing this:
[http://:your_ip:8000/cluster/info](https://www.notion.so/Generating-Base-Instance-39cef6eda5e346939184d18855312044?pvs=21)

### Setup Currency L1 - Instance #3
- Navigate to the `currency-l1` directory

```bash
cd code/currency-l1
```

- We should use a authorized `.p12` file, we can use the previous one used on global-l0 layer and set the same parameters:

```bash
export CL_KEYSTORE=":p12_file_used_on_seedlist_3.p12"
export CL_KEYALIAS=":p12_file_used_on_seedlist_3"
export CL_PASSWORD=":file_password_3"
```

- We should provide the following parameters:

```bash
export CL_PUBLIC_HTTP_PORT=8000
export CL_P2P_HTTP_PORT=8001
export CL_CLI_HTTP_PORT=8002
export CL_GLOBAL_L0_PEER_HTTP_HOST=:ip_from_metagraph_l0_node_1_global_l0
export CL_GLOBAL_L0_PEER_HTTP_PORT=6000
export CL_GLOBAL_L0_PEER_ID=:id_from_metagraph_l0_node_1_global_l0
export CL_L0_PEER_HTTP_HOST=:ip_from_metagraph_l0_node_1_metagraph_l0
export CL_L0_PEER_HTTP_PORT=7000
export CL_L0_PEER_ID=:id_from_metagraph_l0_node_1_metagraph_l0
export CL_L0_TOKEN_IDENTIFIER=:**METAGRAPH_ID**
export CL_APP_ENV=integrationnet
export CL_COLLATERAL=0
```

- And run:

```bash
nohup java -jar currency-l1.jar run-validator --ip :ip > currency-l1-logs.log 2>&1 &
```

- Now we are running Currency L1 - Instance #2 as a validator, so we need to join Currency L1 - Instance #1. You can get the information:

```bash
http://:currency-l1-instance-1:8000/node/info
```

```bash
curl -v -X POST http://localhost:8002/cluster/join -H "Content-type: application/json" -d '{ "id":":id_from_currency_l1_1", "ip": ":ip_from_currency_l1", "p2pPort": 8001 }'
```

- The same folder `logs` should be created.
- You can check if your Currency L1 successfully started by doing this:
[http://:your_ip:8000/cluster/info](https://www.notion.so/Generating-Base-Instance-39cef6eda5e346939184d18855312044?pvs=21)

:::note
 Ensure that each instance is associated with a distinct authorized `p12` file on the seedlist.
:::
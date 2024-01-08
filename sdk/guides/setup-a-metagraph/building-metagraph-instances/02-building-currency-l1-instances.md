---
id: building-currency-l1-instances
title: Building currency L1 Instances
---


Let’s create our Currency L1 😎, our L1 will need you to set up at least 3 instances. 

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
- Upon connecting, navigate to the `code/currency-l1` folder using

```bash
cd code/currency-l1
```

### Setup Currency L1 - Instance #1

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
nohup java -jar currency-l1.jar run-initial-validator --ip :instance_ip > metagprah-l1-logs.log 2>&1 &
```

- The same folder `logs` should be created.
- Check if your Currency L1 successfully started:
[http://:your_ip:8000/cluster/info](https://www.notion.so/Generating-Base-Instance-39cef6eda5e346939184d18855312044?pvs=21)

### Setup Currency L1 - Instance #2

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
export CL_PUBLIC_HTTP_PORT=8100
export CL_P2P_HTTP_PORT=8101
export CL_CLI_HTTP_PORT=8102
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
http://:metagraph-l1-instance-1:8000/node/info
```

```bash
curl -v -X POST http://localhost:8102/cluster/join -H "Content-type: application/json" -d '{ "id":":id_from_currency_l1_1", "ip": ":ip_from_currency_l1", "p2pPort": 8001 }'
```

- The same folder `logs` should be created.
- You can check if your Currency L1 successfully started by doing this:
[http://:your_ip:8000/cluster/info](https://www.notion.so/Generating-Base-Instance-39cef6eda5e346939184d18855312044?pvs=21)

### Setup Currency L1 - Instance #3

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
export CL_PUBLIC_HTTP_PORT=8200
export CL_P2P_HTTP_PORT=8201
export CL_CLI_HTTP_PORT=8202
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
nohup java -jar currency-l1.jar run-validator --ip :ip > currency-l1-logs.log 2>&1 &
```

- Now we are running Currency L1 - Instance #3 as a validator, so we need to join Currency L1 - Instance #1. You can get the information at:

```bash
http://:metagraph-l1-instance-1:8000/node/info
```

```bash
curl -v -X POST http://localhost:8202/cluster/join -H "Content-type: application/json" -d '{ "id":":id_from_currency_l1_1", "ip": ":ip_from_currency_l1", "p2pPort": 8001 }'
```

- The same folder `logs` should be created.
- You can check if your Currency L1 successfully started at:
[http://:your_ip:8000/cluster/info](https://www.notion.so/Generating-Base-Instance-39cef6eda5e346939184d18855312044?pvs=21)
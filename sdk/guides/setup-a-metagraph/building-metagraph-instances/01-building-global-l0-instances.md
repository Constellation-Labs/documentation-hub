---
id: building-global-L0-instances
title: Building global-l0 instances
---

Let’s create our Global L0 😎

:::note
 You can learn how to run instances from AMI [here](/sdk/guides/setup-a-metagraph/base-instance/launching-instances-from-ami)
:::

:::note
 Remember to replace the parameters that start with `:something...` with your own specific values 
:::

:::note
 Please note that we only require three instances for all layers (`global-l0`, `metagraph-l0`, `currency-l1`, and `data-l1`). We will organize these layers into directories for the instances.
:::

### P12 files
- As mentioned earlier, you will need a minimum of three p12 files. Make sure to assign each unique file to a separate instance.
- Securely transfer one of your **`p12`** files to the instance using **`scp`**. For example:
```bash
scp -i "MyKeypair.pem" :p12_file.p12 your_instance:code/global-l0
```
- In this guide, the **`p12`** file is referred to as **`metagraph-file.p12`**.
- Ensure that the **`p12`** file in the **`global-l0`** directory is authorized on the integrationnet seedlist.
- Download the seedlist to the **`global-l0`** folder using

```bash
wget https://constellationlabs-dag.s3.us-west-1.amazonaws.com/integrationnet-seedlist
```


### Setup Global L0 - Instance 1
- Let's move to the `global-l0` directory

```bash
cd code/global-l0
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


### Setup Global L0 - Instance 2
- Let's move to the `global-l0` directory

```bash
cd code/global-l0
```

- Set the following environment variables:

```bash
export CL_KEYSTORE=":p12_file_used_on_seedlist_2.p12"
export CL_KEYALIAS=":p12_file_used_on_seedlist_2"
export CL_PASSWORD=":file_password_2"
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

### Setup Global L0 - Instance 3
- Let's move to the `global-l0` directory

```bash
cd code/global-l0
```

- Set the following environment variables:

```bash
export CL_KEYSTORE=":p12_file_used_on_seedlist_3.p12"
export CL_KEYALIAS=":p12_file_used_on_seedlist_3"
export CL_PASSWORD=":file_password_3"
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

:::note
 Ensure that each instance is associated with a distinct authorized `p12` file on the seedlist.
:::

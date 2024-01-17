---
id: start-metagraph-L0-instances
title: Start Metagraph L0 Instances
---

<intro-end />

In this section, we will start each of our metagraph L0 instances and join them to the Global L0 network. 

### Setup Metagraph L0
SSH into one of your EC2 instances and move to the `metagraph-l0` directory.

```bash
ssh -i "MyKeypair.pem" ubuntu@your_instance_ip"
cd code/metagraph-l0
```

#### Set environment variables
Export the following environment variables, changing the values to use your p12 file's real name, alias, and password. 
```bash
export CL_KEYSTORE=":p12_file_used_on_seedlist_1.p12"
export CL_KEYALIAS=":p12_file_used_on_seedlist_1"
export CL_PASSWORD=":file_password_1"
```

Also export the following environment variables, filling in `CL_GLOBAL_L0_PEER_ID` with the public ID of your Global L0 node which can be obtained from the `/node/info` endpoint at the end of the previous step. This is also the pub ID of your p12 file.
```bash
export CL_PUBLIC_HTTP_PORT=9100
export CL_P2P_HTTP_PORT=9101
export CL_CLI_HTTP_PORT=9102
export CL_GLOBAL_L0_PEER_HTTP_HOST=localhost
export CL_GLOBAL_L0_PEER_HTTP_PORT=9000
export CL_GLOBAL_L0_PEER_ID=:local_global_l0_id
CL_APP_ENV=integrationnet
export CL_COLLATERAL=0
```

#### Start your metagraph L0 node (genesis)
:::note
Run this command only on the first of your instances. When you repeat these steps for the 2nd and 3rd instance, use the `run-validator` joining process below instead.
:::

Use the following command to start the metagraph L0 process in genesis mode. This should only be done once to start your network from the genesis snapshot. In the future, to restart the network use `run-rollback` instead to restart from the most recent snapshot. Fill in the `:instance_ip` variable with the public IP address of your node. 
```bash
nohup java -jar metagraph-l0.jar run-genesis genesis.snapshot --ip :instance_ip > metagraph-l0-logs.log 2>&1 &
```

You can check if your metagraph L0 successfully started using the `/cluster/info` endpoint or by checking logs. 
```
http://:your_ip:9100/cluster/info
```

#### Start your metagraph L0 node (validator)
The 2nd and 3rd nodes should be started in validator mode and joined to the first node that was run in genesis or run-rollback mode. All other steps are the same. 

```bash
nohup java -jar metagraph-l0.jar run-validator --ip :ip > metagraph-l0-logs.log 2>&1 &
```

Once the node is running in validator mode, we need to join it to the first node using the following command
```bash
curl -v -X POST http://localhost:9102/cluster/join -H "Content-type: application/json" -d '{ "id":":metagraph_node_1_id", "ip": "metagraph_node_1_ip", "p2pPort": 9101 }'
```

You can check if the nodes successfully started using the `/cluster/info` endpoint for your metagraph L0. You should see nodes appear in the list if all started properly. 
http://:your_ip:9100/cluster/info

### Repeat
Repeat the above steps for each of your 3 nodes before moving on to start your metagraph L1 layers. Note that the startup commands differ between the three nodes. The first node should be started in genesis or run-rollback mode. The second and third nodes should be started in validator mode and joined to the first node. 
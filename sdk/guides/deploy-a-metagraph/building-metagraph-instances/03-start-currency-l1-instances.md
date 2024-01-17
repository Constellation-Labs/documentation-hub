---
id: start-currency-l1-instances
title: Start Currency L1 Instances
---

<intro-end />

In this section, we will start each of our currency L1 instances and join them to the metagraph L0 network. 

### Setup Currency L1
SSH into one of your EC2 instances and move to the `currency-l1` directory.

```bash
ssh -i "MyKeypair.pem" ubuntu@your_instance_ip"
cd code/currency-l1
```

#### Set environment variables
Export the following environment variables, changing the values to use your p12 file's real name, alias, and password. 
```bash
export CL_KEYSTORE=":p12_file_used_on_seedlist_1.p12"
export CL_KEYALIAS=":p12_file_used_on_seedlist_1"
export CL_PASSWORD=":file_password_1"
```

Also export the following environment variables, filling in the following:  
- `CL_GLOBAL_L0_PEER_ID`: The public ID of your Global L0 node which can be obtained from the `/node/info` endpoint of your Global L0 instance (http://your_node_id:9000/node/info). 
- `CL_L0_PEER_ID`: The public ID of the metagraph l0 node which is the same as `CL_GLOBAL_L0_PEER_ID` above if you're using the same p12 files for all layers.
- `CL_GLOBAL_L0_PEER_HTTP_HOST`: The public IP of this node (points to global-l0 layer). 
- `CL_L0_PEER_HTTP_HOST`: The public IP of this node (points to metagraph-l0 layer).
- `CL_L0_TOKEN_IDENTIFIER`: The metagraph ID in your address.genesis file.

```bash
export CL_PUBLIC_HTTP_PORT=9200
export CL_P2P_HTTP_PORT=9201
export CL_CLI_HTTP_PORT=9202
export CL_GLOBAL_L0_PEER_HTTP_PORT=9000
export CL_GLOBAL_L0_PEER_HTTP_HOST=:ip_from_metagraph_l0_node_1_global_l0
export CL_GLOBAL_L0_PEER_ID=:id_from_metagraph_l0_node_1_global_l0
export CL_L0_PEER_HTTP_HOST=:ip_from_metagraph_l0_node_1_metagraph_l0
export CL_L0_PEER_HTTP_PORT=9100
export CL_L0_PEER_ID=:id_from_metagraph_l0_node_1_metagraph_l0
export CL_L0_TOKEN_IDENTIFIER=:**METAGRAPH_ID**
export CL_APP_ENV=integrationnet
export CL_COLLATERAL=0
```

#### Start your currency L1 node (initial)
:::note
Run this command only on the first of your instances. When you repeat these steps for the 2nd and 3rd instance, use the `run-validator` joining process below instead.
:::

Run the following command, filling in the public ip address of your instance. 
```bash
nohup java -jar currency-l1.jar run-initial-validator --ip :instance_ip > metagprah-l1-logs.log 2>&1 &
```

Check if your Currency L1 successfully started:
http://:your_ip:9200/cluster/info

#### Start your currency L1 node (validator)
The 2nd and 3rd nodes should be started in validator mode and joined to the first node that was run in initial-validator mode. All other steps are the same. 

```bash
nohup java -jar currency-l1.jar run-validator --ip :ip > currency-l1-logs.log 2>&1 &
```

Run the following command to join, filling in the `id` and `ip` of your first currency L1 node. 
```bash
curl -v -X POST http://localhost:9202/cluster/join -H "Content-type: application/json" -d '{ "id":":id_from_currency_l1_1", "ip": ":ip_from_currency_l1", "p2pPort": 9201 }'
```

You can check if the nodes successfully started using the `/cluster/info` endpoint for your metagraph L0. You should see nodes appear in the list if all started properly. 
http://:your_ip:9200/cluster/info

### Repeat
Repeat the above steps for each of your 3 currency L1 nodes before moving on to start your data L1 layer. Note that the startup commands differ between the three nodes. The first node should be started in initial-validator mode. The second and third nodes should be started in validator mode and joined to the first node. 
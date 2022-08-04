---
title: Setup a Private L0 Cluster
---
<intro-end />

This guide will walk you through how to set up a private testnet of L0 nodes for you to test your state channel against. This environment is the recommended way to develop and test your project.
Projects can migrate to the [public TestNet](/apps/testnet) when they are getting close to production ready. 

## Prerequisites
- 3 Linux cloud instances with ports 9000 and 9001 opened. See [validator node setup instructions](/nodes/validator/providers) for more detail on how to configure your instances.
- Java version 11
```bash
sudo apt-get install openjdk-11-jdk
java -version
```

## Steps
The minimum requirement for a test L0 network is 3 nodes - 1 genesis node and 2 validator nodes. This network will be fully functional for testing purposes and forms the minimum size needed for consensus. 

**1.** Download the executables that will run on each node. The latest executables can be found assets distributed with each [Tessellation Release](https://github.com/Constellation-Labs/tessellation/releases).

**2.** Build Tessellation from source - see [Compile Tessellation](/statechannels/examples/compile-tessellation).

**3.** Create a wallet to associate to each node using the cl-keytool. One wallet will be needed for each node. Create a `*.p12` file using the following steps on each of the 3 nodes.
   1. `export CL_KEYSTORE=./<private-key-filename>.p12`
   2. `export CL_PASSWORD=<private-key-password>`
   3. `export CL_KEYALIAS=<private-key-alias>`
   4. Run the following command to generate the p12 file. The file will be created using the name exported as `CL_KEYSTORE`.
   ```bash
    java -jar cl-keytool.jar generate
   ```
   
**4.** Create the `genesis.csv` file on the genesis node. Please note that this is done only on the node that will be used as the genesis node, not on the other 2 nodes that will become validator nodes. 

Create a file named `genesis.csv` with the following format:
```csv
   <valid_dag_address>,<token_amount>
```  

This allows your network to initiate the genesis node with tokens attributed to the addresses you choose. Please note, this is test DAG that is local to your network and has no actual value.

**5.** On the node selected to be the genesis node, run the following code to start Tessellation as the genesis node. 
```bash
java "-Xms1024M" "-Xmx3G" "-Xss256K" -cp cl-node.jar org.tessellation.Main run-genesis ./genesis.csv --ip <genesis-node-ip> --public-port 9000 --p2p-port 9001 --cli-port 9003 --collateral 0 -e testnet
```

:::info Note
Make sure your public port and p2p port are open on your cloud instance for this step. For this example, you would need port 9000 and 9001 open. 
:::

**6.** Get the node ID of the genesis node using the following command. You can run this command locally rather than on one of the cloud instances. This will be used on the validator nodes to join the network. 
```bash
curl -v http://<genesis-node-ip>:9000/cluster/info
```

This will return a JSON response like this
```json
[{"id":"746f872e629455fd5b92ebd32af334cd2ec493f4d1b8679f405191405aea6083e8b63b740874962dcb71ce9bdaf6f1ea1a94ae6428a271c102265f80d5187a2d","ip":"13.40.100.125","publicPort":9000,"p2pPort":9001,"session":" db886897-b3b1-484e-b645-ba3659587099","state":"Ready"}]
```

Alternatively, you could use the `cl-wallet.jar` file to get the node ID while connected to your cloud instance.
```bash
java -jar cl-wallet.jar show-id
```

**7.** Run the following command on each of the cloud instances selected to be validator nodes. This will start Tessellation in validator mode. 
```bash
java "-Xms1024M" "-Xmx3G" "-Xss256K" -cp cl-node.jar org.tessellation.Main run-validator --ip <validator-node-ip> --public-port 9000 --p2p-port 9001 --cli-port 9003 --collateral 0 -e testnet
```

**8.** Run the following command on each validator node to connect them to the genesis node. 
```bash
curl -v -X POST http://localhost:9003/cluster/join -H "Content-type: application/json" -d '{ "id":"<genesis-node-id>", "ip": "<genesis-node-ip>", "p2pPort": <genesis-node-p2p-port> }'
```

**9.** Check that all of the nodes have been added to the cluster with the cluster info endpoint again. This is the same endpoint we used to find the node ID in step 6. 

```bash
curl -v http://<genesis-node-ip>:9000/cluster/info
```

You should get a response with an array of 3 objects showing detail for each of the 3 nodes in the network. 
```json
[{"id":"7cca619f65e8c352e8fd725b48245b3017f7dbb5e3b2f66c13a2ae843082441ffb433ac34212d232285fb90a3dd681a32ea0431e78854692bce6f0e1450163c8","ip" : "18.168.100.187","publicPort": 8000, "p2pPort": 8001,"session": "2fd78ed0-c5b3-48ae-800a-1c176987af99","state":"Ready"}, {"id":"548dd53d4fcd175ef5f0a5ed37c2f3c85438f745cd5a82b41b0daa54db37878eb959ea4475bbdc8db284d708759fcd3435db0d8c85fb28cc854dddd97d923a09","ip":"13.40.100.154","publicPort": 7000,"p2pPort": 7001,"session": "55876c28-bd25-4875-98e3-4e102b8458d9", "state":"Ready"},{"id":"746f872e629455fd5b92ebd32af334cd2ec493f4d1b8679f405191405aea6083e8b63b740874962dcb71ce9bdaf6f1ea1a94ae6428a271c102265f80d5187a2d","ip":"13.40.100.125","publicPort":9000,"p2pPort":9001,"session":" db886897-b3b1-484e-b645-ba3659587099", "state": "Ready"}]
```
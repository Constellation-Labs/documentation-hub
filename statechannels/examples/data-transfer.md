---
title: Data Transfer Demo
hide_table_of_contents: false
---
<intro-end />

This guide will walk you through basic state channel functionality including creating a snapshot, posting to the global L0, and implementing basic token functionality.

## What you'll learn
1. Create a state channel snapshot comprised of L1 data transactions
2. Post the state channel snapshot to the global L0
3. Retrieve the state channel snapshot from the global L0 snapshot
4. Convert the state channel snapshot to a human readable format
5. Retreive the L1 data transactions in human readable format
6. Create a basic token
7. Post a simple token transaction to the state channel to transfer tokens from one wallet to another
8. Retrieve token transaction details with a given transaction ID
9. Retrieve token balance in a wallet with a given wallet address
10. Retrieve all transactions related to a wallet with a given wallet address

## Prerequisites
- A cloud instance with port 19000 opened. This instance will be used to run an L1 node.
- Java version 11
```bash
sudo apt-get install openjdk-11-jdk
java –version
```

## Steps
**1.** Download the [demo executable](https://github.com/Alkimi-Exchange/state-channel-demo/blob/main/binaries/tessellation-demo-assembly-0.1.jar).

**2.** Build the demo from source following [these instructions](/statechannels/examples/data-transfer-setup).

**3.** Export the following variables
```bash
export CL_KEYSTORE=./<private-key-filename>.p12
export CL_PASSWORD=<private-key-password>
export CL_KEYALIAS=<private-key-alias>
```

**4.** Run the jar using the default port, 19000
```bash
java -cp tessellation-demo-assembly-0.1.jar com.tessellation.demo.Main run-demo
```

**5.** Check the service availability of the demo application. A reply of "pong" indicates the service is available. 
```bash
curl -i http://<demo-ip-address>:19000/demo/ping
```

**6.** Create a state channel snapshot

For the purposes of this demo we have used the following state channel address: `DAG45MPJCa2RsStWfdv8RZshrMpsFHhnsiHN7kvX`

We will use both a valid and an invalid transaction example 
- **Valid:** [examples/DemoTransaction.json](https://github.com/Alkimi-Exchange/state-channel-demo/blob/main/examples/DemoTransaction.json)
- **Invalid:** [examples/InvalidDemoTransactions.json](https://github.com/Alkimi-Exchange/state-channel-demo/blob/main/examples/InvalidDemoTransactions.json)

The arguments in the transaction are validated by `DemoTransactionValidator`. This validator can be customised as per business requirements. This can be as complicated or as simple as required. 

Posting a valid transaction will result in a response with the following format [examples/SignedStateChannelSnapshotBinary.json](https://github.com/Alkimi-Exchange/state-channel-demo/blob/main/examples/SignedStateChannelSnapshotBinary.json). Posting an invalid transaction will result in a `400 Bad Request` response. 

The sample input can be serialized and signed using the following command
```bash
curl -v -X POST http://<demo-ip-address>:19000/demo/state-channel-snapshot -H 'Content-Type:application/json' -H "Accept:application/json" -d @DemoTransaction.json
```

This POST call will return a serialized signed transaction in the format
```json
{"value":{"lastSnapshotHash":"0000000000000000000000000000000000000000000000000000000000000000","content":[120,1,-22,7,2,97,109,111,117,110,-12,105,-28,2,-48,15,0,3,105,100,79,0]},"proofs":[{"id":"746f871e529455fd5b92ebd32af554aa2ec493f4d1b8679f405191405aea6083e8b63b740874962dcb71ce9bdaf6f1ea1a94ae6428a271c102141f80d5187a2d","signature":"3045022100d1f120f5663b9a69cc139676d021f6a7f7fc8e24492a2df267f85c8f58403b5802205df4aee32ae375f89bbfda9eaf97393099ad8a81ded983f2eb3824eae3f0d5d8"}]}
```

**7.** Submit the state channel snapshot to the global L0

A sample state channel snapshot can be seen here - [examples/SignedStateChannelSnapshotBinary.json](https://github.com/Alkimi-Exchange/state-channel-demo/blob/main/examples/SignedStateChannelSnapshotBinary.json)

Use the serialized signed transaction that was the result of the previous step as the input for this step. The state channel snapshot can be posted to the global L0 using the following command.
```bash
curl -v -X POST http://<l0-node-ip>:9000/state-channels/DAG45MPJCa2RsStWfdv8RZshrMpsFHhnsiHN7kvX/snapshot -H 'Content-Type:application/json' -H "Accept:application/json" -d @SignedStateChannelSnapshotBinary.json
```

On success, this API returns 200 OK. 

**8.** Retrieve the state channel snapshot from the global L0 snapshot

Use the following command to retrieve the state channel snapshot from the global L0 snapshot
```bash
curl -i http://<l0-node-ip>:9000/global-snapshots/latest
```

`l0-node-ip` refers to the genesis or validator node IP that this state channel snapshot is retrieved from.

:::info L0 API Endpoints
Looking for additional information on available L0 API endpoints? See the full [API spec.](/apps/network-apis)
:::

**9.** Retrieve the global L0 snapshot in human readable format
```bash
curl -i http://<l1-node-ip>:19000/demo/global-snapshots/{ordinal}
```
Returns a string

**10.** Retrieve L1 transactions persisted in the global L0 snapshot
```bash
curl -i http://<l1-node-ip>:19000/demo/transactions/{ordinal}
```
Returns any demo transactions persisted in the global snapshot with the supplied ordinal.

**11.** Create subsequent state channel snapshots

To create further state channel snaphots, the `lastSnapshotHash` value must be provided as a query parameter to the endpoint while creating the state channel snapshot. This value is the hash of the previous state channel snapshot posted. 

```bash
curl -v -X POST http://localhost:19000/demo/state-channel-snapshot?lastSnapshotHash=854693443ff34068f267428420e42cbcc79824bea7e004faffbca67fddad3f08 -H 'Content-Type:application/json' -H "Accept:application/json" -d @examples/DemoTransaction.json
```

`lastSnapshotHash` can be obtained from the GlobalSnapshot. The value inside `GlobalSnapshotInfo` -> `TreeMap` is the `lastSnapshotHash`. 


`GlobalSnapshotInfo(TreeMap(DAG45MPJCa2RsStWfdv8RZshrMpsFHhnsiHN7kvX->` <mark>854693443ff34068f267428420e42cbcc79824bea7e004faffbca67fddad3f08</mark> `), TreeMap(),TreeMap(DAG3k3VihUWMjse9LE93jRqZLEuwGd6a5Ypk4zYS -> 2000))`



:::danger Token functionality
The remainder of this guide walks us through basic token functionality such as transferring test funds between wallet addresses and checking balances. This is provided for demostration purposes. This is not an example of implementing a token that conforms to the [_L0 Token Standard_](/core-concepts/network/l0-token-standard). L0 tokens have additional requirements and must conform to specific interfaces that are beyond the scope of this demo. Future examples will explain the process of minting an L0 token in detail.  
:::

**12.** The demo code has been initialized with 30,000 demo tokens distributed evenly among 3 wallets

- DAG45MPJCa2RsStWfdv8RZshrMpsFHhnsiHN7kvL -> 10000 tokens
- DAG45MPJCa2RsStWfdv8RZshrMpsFHhnsiHN7kvP -> 10000 tokens
- DAG45MPJCa2RsStWfdv8RZshrMpsFHhnsiHN7kvT -> 10000 tokens

These wallet balances are held in the state channel. When a token transaction is sent to the state channel, the transaction is validated i.e. checked that the addresses are valid DAG addresses and that the source wallet has the requisite number of tokens to make a successful transfer. Once the validations have passed, the state channel updates the wallet balances to reflect the requested token transaction.

**13.** Check the balance of each wallet with the following command
```bash
curl -i http://localhost:19000/demo/token-balances/{dagWalletAddress}
```

**14.** Submit a token transaction to the state channel
Using the example [TokenTransaction](https://github.com/Alkimi-Exchange/state-channel-demo/blob/main/examples/TokenTransaction.json) format, submit a token transaction. 

```bash
curl -v -X POST http://localhost:19000/demo/token-transactions  -H 'Content-Type:application/json' -H "Accept:application/json" -d @examples/TokenTransaction.json
```

:::info Demo purposes only
Note that token transactions should be signed by the source wallet. The state channel should validate the signature before taking any action. However, for the purpose of this demo, these transactions are sent unsigned. This would need to be changed for a production ready code.
::: 

**15.** Explore transactions with the API

Get the details of a token transaction given a transaction ID
```bash
curl -i http://localhost:19000/demo/token-transactions/{txn_id}
```

Get the balance of a wallet given a DAG wallet address
```bash
curl -i http://localhost:19000/demo/token-balances/{dagWalletAddress}
```

Get all transactions associated with a wallet given a DAG wallet address
```bash
curl -i http://localhost:19000/demo/token-transactions/wallet/{dagWalletAddress}
```
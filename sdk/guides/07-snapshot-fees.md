---
title: Snapshot Fees
sidebar_label: Snapshot Fees
slug: /guides/snapshot-fees
hide_table_of_contents: false
---

<intro-end />

The Hypergraph charges fees for validating and storing metagraph snapshots, ensuring the network's continued functionality. These snapshot fees, along with node collateral requirements, are the only expenses metagraphs must pay in order to interface with the Hypergraph. This fee structure provides metagraphs with significant flexibility, enabling them to decide their own fee structures and data inclusion policies.

Metagraphs have the autonomy to choose whether to charge their end users directly, impose fees for specific data types, or even operate without user fees. They can also control which data is included in their snapshots, managing costs and determining the privacy level of their network.

Fees are calculated based on the size and computational cost of processing snapshots. Currently, all snapshots have a computational cost of 1, which means that snapshot size is the only active factor in determining snapshot fee cost. For detailed information on network fees, refer to the [Network Fees Litepaper](/learn/tools-resources/network-fees-litepaper).

## Owner and Staking Wallets

The Global L0 deducts snapshot fees from an "owner wallet," which is designated by a majority of metagraph validators and registered with the gL0. An additional wallet, known as the "staking wallet," can also be designated to reduce fees based on its balance at the time a snapshot is processed. These two wallets can be the same, but the addresses used for either the owner or staking wallets must be globally unique on the Hypergraph.

The owner and staking wallets are designated by signing a message to prove ownership of each wallet and creating a "Currency Message" for the metagraph. This Currency Message must be signed by a majority of the L0 nodes of the metagraph, then included in a metagraph snapshot to be sent to the gL0 for registration and inclusion in a global snapshot. Owner and staking wallets can be changed at any time using the same process.

:::note Assigning an owner wallet is required
Starting in Tessellation v2.7.0, the Hypergraph will reject snapshots sent by metagraphs that do not designate an owner wallet or if the designated wallet does not have sufficient funds to cover the cost of the current snapshot’s fees. For this reason, assigning an owner wallet is required. Assigning a staking wallet is optional. 
:::

### Assigning Metagraph Wallets with Euclid

Euclid simplifies the process of assigning both the owner and staking wallets with a few simple Hydra commands ([v0.11.0](https://github.com/Constellation-Labs/euclid-development-environment/releases/tag/v0.11.0) or later). 

:::info Local builds
Snapshot fees are turned off by default for local builds. Owner and staking details only need to be configured when deploying to MainNet or a public testnet (IntegrationNet, etc.).
:::

First, update the `snapshot_fees` key in euclid.json with the name, alias, and password of the p12 file for each of the wallets. The p12 files should be stored in the `source/p12-files` directory and should have a unique name. 

For example (replace with your own values): 

```json
{
  "snapshot_fees": {
    "owner": {
	    "name": "metagraph_owner.p12",
	    "alias": "metagraph_owner",
	    "password": "pass1234" 
    },
    "staking": {
	    "name": "metagraph_staking.p12",
	    "alias": "metagraph_staking",
	    "password": "pass1235" 
    }
  }
}
```

Next, run `hydra remote-deploy` , this will deploy your owner and staking p12 files to the remote nodes. 

If running your remote metagraph from genesis, no special configuration is required - owner and (optionally) staking wallet configuration will be automatically set for you if provided in euclid.json. Simply run `hydra remote-start` or `hydra remote-start --force_genesis` to start your metagraph from genesis.  

If running an existing metagraph as rollback, run 
```
hydra remote-start --force_owner_message --force_staking_message
``` 
to set or overwrite the fee wallet configuration for the metagraph. 

The `--force_staking_message` parameter is optional and can be removed if not using a staking wallet. 

To check that your configuration has been successfully updated, run 

```
hydra remote-snapshot-fee-config
```

You should see an output like this:

```text
OWNER
Owner Address: DAG3Z6oMiqXyi4SKEU4u4fwNiYAMYFyPwR3ttTSd
Owner Parent Ordinal: 0

STAKING
Staking Address: DAG5yuTbZP5Jq55yzdDkAisULFhkhPrW7XRqNY1D
Staking Parent Ordinal: 0
```

If both the Owner and Staking addresses are set then the addresses are properly assigned and the Hypergraph will process snapshot fees based on that configuration.
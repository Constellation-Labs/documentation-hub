---
title: Working with Tokens
sidebar_label: Tokens
hide_table_of_contents: false
---

<intro-end />

This section will cover the use of L0 tokens within a metagraph - how to mint them, how to determine fees for user actions, and different strategies for state management in relation to token distribution. 

## Minting Tokens

Tokens can be minted in two ways through a metagraph: at genesis through the use of the *genesis file*, or as part of a incremental snapshot using the *rewards* function. 

### Genesis File

The genesis file is a file used during the creation of a genesis snapshot, i.e. the first snapshot of the chain, which contains initial wallet balances. Configuring the genesis file sets the initial circulating supply for the network and assigns that supply to specific wallets. 

The genesis file is a simple CSV file that can be found in `source/metagraph-l0/genesis/genesis.csv` with the format of 

```csv
<ADDRESS>,<BALANCE>
```

Euclid comes with a default set of addresses and balances in this file. You can (and should) edit for your own needs however you like. 

NOTE: The balances in the genesis file are denominated in datum rather than DAG. 1 DAG is 100,000,000 datum. So for example to set a balance of 25 tokens to a wallet, you would add the following line: `DAG123..., 2500000000`

The genesis file is used only once, during the formation of the genesis snapshot, and as such you only have one chance to set your initial balances. Changing the contents of this file once the snapshot chain has progressed beyond the first snapshot will not have any effect on token balances on your network. 

Once the metagraph state has progressed beyond the genesis snapshot (ordinal 1+), any changes to the token balance map must come through either token transactions or new minting of tokens through the rewards function. 

### Rewards Function

The rewards function is a function of the `CurrencyL0App` called during the [Metagraph Snapshot Lifecycle](../data/lifecycle-functions) which has the ability to create Reward transactions. Reward transactions are special minting transactions on the network which increase the circulating supply of the L0 token and distribute it to an address. 

 
If we examine the function in `modules→l0→Main.scala`, we can see that the function is provided with the following context: 

- `Signed[CurrencyIncrementalSnapshot]`
- `SortedMap[Address, Balance]`
- `SortedSet[Signed[Transaction]]`
- `ConsensusTrigger`
- `Set[CurrencySnapshotEvent]`
- `Option[DataCalculatedState]`

The expected output of the rewards function is a SortedSet with reward transactions. Using the context data provided, a number of strategies for token minting are possible. 

Supported token minting strategies: 

- Continuous minting to reward network participation (ex: rewarding validator nodes that participate in consensus)
- State-triggered minting (ex: minting rewards to wallets based on data fetched on a schedule)
- One-off minting (ex: an airdrop or one-time creation of a wallet).

See the [Reward API metagraph example](https://github.com/Constellation-Labs/metagraph-examples/tree/main/examples/reward-api) repo for an example of how to use the rewards function. 

## Setting Metagraph Fees

Fees charged by the metagraph fall into two categories: Token transaction fees, and fee transactions charged for custom data updates. These perform similar actions on different kinds of transactions but have unique ways that they need to be configured and managed. 

:::note
All fees collected on a metagraph are denominated in the metagraph’s token as the currency. Fees are not collected or managed in DAG. 
:::

### Token Transaction Fees

By default, L0 tokens share the fee characteristics of DAG. DAG has zero required fee for transfers, but adding a minimal fee (1+ datum) will prioritize the processing of a transaction above non-fee transactions on the network. Priority processing also allows many more transactions to be processed from the same address in a single snapshot: 100 per snapshot for priority vs 1 per snapshot for non-priority transactions. This default configuration allows senders to pay for increased throughput if needed, for example in airdrop or bulk sending use cases, while otherwise supporting a feeless network.

L0 tokens share these default attributes of DAG but can customize the minimum required fee for a specific transaction (default zero). This behavior can be managed with the `transactionValidator` function on the `CurrencyL1App` object. The `transactionValidator` function can either accept or reject a transaction based on any attributes of transaction, but is most commonly used to reject if the fee below a particular threshold.

[Tessellation v2.9.0+] An additional function, `transactionEstimator` returns the expected fee for a given transaction. This function is exposed over the `/estimate-fee` Currency L1 endpoint and is used by wallets and other 3rd party integrations to understand the fee required to send a successful transaction. 

See the [Custom Transaction Validation](https://github.com/Constellation-Labs/metagraph-examples/tree/main/examples/custom-transaction-validation) repo for an example implementation.

:::note
Fees collected by the network are currently removed from circulation (in other words burned). While custom transaction fee behavior and especially destination wallets will likely be added in the future, it is possible to deposit fees into a specific wallet with current feature through a mint/burn mechanism. The `rewards` function can be used to mint the equivalent of the burned fees into a particular wallet by monitoring transactions in each snapshot.  
:::

### Data Update Fees

:::warning V2.9.0+
FeeTransactions and associated functionality are currently set to be included in Tessellation v2.9.0. The description of functionality below applies only to that future version or later.
:::

Metagraphs have the ability to require custom fees for data payloads submitted through the `/data` endpoint on a DataApplication. These fees allow the application to charge fees for certain actions such as creating or updating resources (minting) or based on the resources required to handle the request. By default, fees are set to zero. 

Much like currency transactions, data transaction fees must be explicitly approved and signed by the private key representing the address of the requester. Since data updates are fully custom data types defined within the metagraph codebase, there is no inherently included fee structure or predefined destination wallet for the fee to be transferred to within the data update that can be referenced. 

Both the amount and destination wallet of the DataUpdate must be set through a `FeeTransaction` object nested in the DataUpdate request body. This object is signed independently of the DataUpdate and then included in the DataUpdate body, and then the entire DataUpdate body including the FeeTransaction is signed. This format allows the metagraph to validate the signature of the DataUpdate as whole, as well as the FeeTransaction independently. All FeeTransactions must be included in the metagraph on-chain data and shared with the gL0. Requiring a separate signature on the FeeTransaction itself preserves the metagraph developer’s ability to exclude parts or all of the DataUpdate contents from the on-chain data. 

FeeTransaction has the following format:

```json
// FeeTransaction
{
  value: {
    destination: 'DAG...', // metagraph-defined fee wallet
    amount: 1 // amount of fee in datum
  },
  proofs: [] // signature of only FeeTransaction value
}
```

FeeTransaction included in an example data update: 

```json
// CustomDataUpdate
{
  value: {
    customField1: 42,
    customField2: "custom-value",  // any fields of the DataUpdate
    FeeTransaction: {
      value: {
        destination: 'DAG...', // metagraph-defined fee wallet
        amount: 1 // amount of fee in datum
      },
      proofs: [] // signature of only FeeTransaction value
    }
  },
  proofs: [] // signature of CustomDataUpdate value
}
```

In order to support wallets and other 3rd party services that need to know the cost of processing a DataUpdate before sending it, the `/data/estimate-fee` endpoint is provided. This endpoint accepts an unsigned DataUpdate and returns the expected fee and metagraph destination wallet for the fee. 

For example:

```json
**Request:**
POST /data/estimate-fee
{
  customField1: 42,
  customField2: "custom-value",  // any fields of the DataUpdate
}

**Response:**
{
  fee: 100,  // minimum required fee
  address: "DAG..." // metagraph-defined fee wallet
}
```
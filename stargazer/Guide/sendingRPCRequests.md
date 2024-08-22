---
title: Sending RPC Requests
sidebar_label: Sending RPC Requests
hide_table_of_contents: false
---

<head>
  <meta
    name="description"
    content="Communication with the wallet is sent via RPC requests. This guide will show you how to send a RPC request and how to interpret responses."
  />
</head>

<intro-end />

Communication with the wallet is sent via RPC requests. This guide will show you how to send an RPC request and how to interpret responses.

:::info Obtain a chain provider

With the steps mentioned in _[Provider Activation](./providerActivation.md#obtain-a-chainprovider)_, get a chain provider for the networks you want to interact with. In the following examples we will use both ethereum and constellation providers.

```typescript title="TypeScript"
const dagProvider = window.stargazer.getProvider("constellation");
const ethProvider = window.stargazer.getProvider("ethereum");
```

:::

## List active account

For listing the active accounts in the wallet you can send the following calls to [`dag_accounts`](../APIReference/constellationRPCAPI/dag_accounts.md) RPC method and [`eth_accounts`](../APIReference/ethereumRPCAPI/eth_accounts.md) RPC method.

:::info Important
The account returned will always be the active account in Stargazer. Both for Constellation and Ethereum providers.
:::

```typescript title="TypeScript"
const dagAccounts = await dagProvider.request({ method: "dag_accounts" });
console.log(dagAccounts);
// ["DAG88C9WDSKH451sisyEP3hAkgCKn5DN72fuwjfX"]

const ethAccounts = await ethProvider.request({ method: "eth_accounts" });
console.log(eth_accounts);
// ["0x567d0382442c5178105fC03bd52b8Db6Afb4fE40"]
```

_Read more about [`dag_accounts` RPC method](../APIReference/constellationRPCAPI/dag_accounts.md) and [`eth_accounts` RPC method](../APIReference/ethereumRPCAPI/eth_accounts.md)._

## Send an ETH contract call

For interaction with ethereum smart contracts you can use the [`eth_call`](../APIReference/ethereumRPCAPI/eth_call.md) RPC method and the [`eth_sendTransaction`](../APIReference/ethereumRPCAPI/eth_sendTransaction.md) RPC method, respectively for read and write operations. In the following example we will be using the [ethers](https://www.npmjs.com/package/ethers) package, and a [demo conract](https://sepolia.etherscan.io/address/0x74299a718b2c44483a27325d7725f0b2646de3b1#code) from the [Stargazer Demos](https://github.com/StardustCollective/stargazer-wallet-demos). The [ethers](https://www.npmjs.com/package/ethers) package will help us encode method parameters based on the contract's ABI. It is encouraged to use external libraries to encode contract call parameters.

:::info Important
Interaction with smart contracts is done through an ABI (Application Binary Interface), you can read more about it in the [Contract ABI Specification](https://docs.soliditylang.org/en/v0.6.0/abi-spec.html) article from the [solidity docs](https://docs.soliditylang.org/en/v0.6.0/index.html).

You can think about an ABI as any other programming interface, where you have defined method signatures and interaction abstractions without the actual implementation.
:::

### Send an ETH read call

In the next example we will use the `greet` method from the [StargazerGreeter](https://sepolia.etherscan.io/address/0x74299a718b2c44483a27325d7725f0b2646de3b1#code) contract. It reads a greet string saved in the network state. For interacting with the contract we will create an ethers [`Contract`](https://docs.ethers.io/v5/api/contract/contract/#Contract--creating) instance, and therefore an ethers [`Web3Provider`](https://docs.ethers.io/v5/api/providers/other/#Web3Provider). In the background the [ethers](https://www.npmjs.com/package/ethers) package will call [`eth_call`](../APIReference/ethereumRPCAPI/eth_call.md) for us.

```typescript title="TypeScript"
import * as ethers from "ethers";

const ethersProvider = new ethers.providers.Web3Provider(ethProvider);

const StargazerGreeterAddress = "0x74299a718b2c44483a27325d7725f0b2646de3b1";
const StargazerGreeterABI = [...[]]; // You can get StargazerGreeter's ABI from https://sepolia.etherscan.io/address/0x74299a718b2c44483a27325d7725f0b2646de3b1#code;

const contract = new ethers.Contract(
  StargazerGreeterAddress,
  StargazerGreeterABI,
  ethersProvider
);

await contract.greet();
// "Bon Matin!"
```

### Send an ETH contract write call

In the next example we will use the `setGreeting` method from the [StargazerGreeter](https://sepolia.etherscan.io/address/0x74299a718b2c44483a27325d7725f0b2646de3b1#code) contract. It sets a greet string in the network state. For interacting with the contract we will create an ethers [`Contract`](https://docs.ethers.io/v5/api/contract/contract/#Contract--creating) instance, and therefore an ethers [`Web3Provider`](https://docs.ethers.io/v5/api/providers/other/#Web3Provider). In the background the [ethers](https://www.npmjs.com/package/ethers) package will call [`eth_sendTransaction`](../APIReference/ethereumRPCAPI/eth_sendTransaction.md) for us.

:::note Important
Write calls need to be confirmed by the user. Read more [here](#send-transactions).
:::

```typescript title="TypeScript"
import * as ethers from "ethers";

const ethersProvider = new ethers.providers.Web3Provider(ethProvider);

const signer = ethersProvider.getSigner();

const StargazerGreeterAddress = "0x74299a718b2c44483a27325d7725f0b2646de3b1";
const StargazerGreeterABI = [...[]]; // You can get StargazerGreeter's ABI from https://sepolia.etherscan.io/address/0x74299a718b2c44483a27325d7725f0b2646de3b1#code;

const contract = new ethers.Contract(
  StargazerGreeterAddress,
  StargazerGreeterABI,
  signer
);

const greetingId = 1; // Bon Matin!

// We send a transaction to the network
const trxResponse = await contract.setGreeting(greetingId);

// We wait for confirmation
const trxReceipt = await library.waitForTransaction(trxResponse.hash);

console.log(trxReceipt.blockNumber);
// 12415408
```

## Send ETH Transactions

As the ethereum chain reveals the [`eth_sendTransaction`](../APIReference/ethereumRPCAPI/eth_sendTransaction.md) RPC method you can send any kind of transaction you need (Token Transfer, Contract Interaction, ETH Transfers, etc.).

### Transfer ERC20 Tokens

You can send ERC20 tokens using the `transfer` method from any ERC20 contract. For interacting with the contract we will create an ethers [`Contract`](https://docs.ethers.io/v5/api/contract/contract/#Contract--creating) instance, and therefore an ethers [`Web3Provider`](https://docs.ethers.io/v5/api/providers/other/#Web3Provider). In the background the [ethers](https://www.npmjs.com/package/ethers) package will call [`eth_sendTransaction`](../APIReference/ethereumRPCAPI/eth_sendTransaction.md) for us.

```typescript title="TypeScript"
import * as ethers from "ethers";

const ethersProvider = new ethers.providers.Web3Provider(ethProvider);

const signer = ethersProvider.getSigner();

const StargazerSampleTokenAddress =
  "0xfe9885baff18074846aaa2d5541581adf068731d";
const StargazerSampleTokenABI = [...[]]; // You can get StargazerSampleToken's ABI from https://sepolia.etherscan.io/address/0xfe9885baff18074846aaa2d5541581adf068731d#code;

const contract = new ethers.Contract(
  StargazerSampleTokenAddress,
  StargazerSampleTokenABI,
  signer
);

const receiverAddress = "0x....";
const receiveValue = ethers.utils.parseUnits("10", 18).toHexString(); // 10 SST

// We send a transaction to the network
const trxResponse = await contract.transfer(receiverAddress, receiveValue);

// We wait for confirmation
const trxReceipt = await library.waitForTransaction(trxResponse.hash);

console.log(trxReceipt.blockNumber);
// 12415408
```

### Approve ERC20 token Spend

You can approve spend of ERC20 tokens to external contracts using the `approve` method from any ERC20 contract. For interacting with the contract we will create an ethers [`Contract`](https://docs.ethers.io/v5/api/contract/contract/#Contract--creating) instance, and therefore an ethers [`Web3Provider`](https://docs.ethers.io/v5/api/providers/other/#Web3Provider). In the background the [ethers](https://www.npmjs.com/package/ethers) package will call [`eth_sendTransaction`](../APIReference/ethereumRPCAPI/eth_sendTransaction.md) for us.

```typescript title="TypeScript"
import * as ethers from "ethers";

const ethersProvider = new ethers.providers.Web3Provider(ethProvider);

const signer = ethersProvider.getSigner();

const StargazerSampleTokenAddress =
  "0xfe9885baff18074846aaa2d5541581adf068731d";
const StargazerSampleTokenABI = [...[]]; // You can get StargazerSampleToken's ABI from https://sepolia.etherscan.io/address/0xfe9885baff18074846aaa2d5541581adf068731d#code;

const contract = new ethers.Contract(
  StargazerSampleTokenAddress,
  StargazerSampleTokenABI,
  signer
);

const spenderAddress = "0x....";
const spendValue = ethers.utils.parseUnits("10", 18).toHexString(); // 10 SST

// We send a transaction to the network
const trxResponse = await contract.approve(spenderAddress, spendValue);

// We wait for confirmation
const trxReceipt = await library.waitForTransaction(trxResponse.hash);

console.log(trxReceipt.blockNumber);
// 12415408
```

### Send ETH

You can send ETH (The ethereum's native currency) sending a simple transaction to the network. For interacting with the network we will create an ethers [`Web3Provider`](https://docs.ethers.io/v5/api/providers/other/#Web3Provider) and an ethers [`Signer`](https://docs.ethers.io/v5/api/signer/#Signer). In the background the [ethers](https://www.npmjs.com/package/ethers) package will call [`eth_sendTransaction`](../APIReference/ethereumRPCAPI/eth_sendTransaction.md) for us.

```typescript title="TypeScript"
import * as ethers from "ethers";

const ethersProvider = new ethers.providers.Web3Provider(ethProvider);

const oneGwei = ethers.BigNumber.from(1 * 1e9).toHexString();

const signer = ethersProvider.getSigner();

// We send a transaction to the network
const trxResponse = await signer.sendTransaction({
  to: "0x....",
  value: oneGwei,
});

// We wait for confirmation
const trxReceipt = await library.waitForTransaction(trxResponse.hash);

console.log(trxReceipt.blockNumber);
// 12415408
```

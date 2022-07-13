---
hide_table_of_contents: true
---

<head>
  <meta
    name="description"
    content="Returns information about a block by hash."
  />
</head>

<intro-end />

Returns information about a block by hash.

##### Parameters

| Name                   | Type              | Description                                                                             |
| ---------------------- | ----------------- | --------------------------------------------------------------------------------------- |
| BlockHash              | `HexString<Hash>` | Hash of the selected block.                                                             |
| ShowTransactionDetails | `Boolean`         | If true returns the full transaction objects, otherwise the hashes of the transactions. |

##### Return Type

`Block` | `null` - The block data or null if not found.

```typescript title="Block"
type Block = {
  number: HexString<Number> | null; // Block number or null if block is pending.
  hash: HexString<Hash> | null; // Block hash or null if block is pending.
  parentHash: HexString<Hash>; // Hash of the parent block.
  nonce: HexString<Hash> | null; // Hash of the proof-of-work or null if block is pending.

  sha3Uncles: HexString<Hash>; // SHA3 hash of the uncles data in the block.
  logsBloom: HexString<FilterBloom> | null; // Bloom filter of the logs in the block or null if block is pending.
  transactionsRoot: HexString<Hash>; // Root hash of the transaction trie of the block.
  stateRoot: HexString<Hash>; // Root hash of the final state trie of the block.
  receiptsRoot: HexString<Hash>; // Root hash of the receipts trie of the block.

  miner: Address; // Miner's address for rewards.
  difficulty: HexString<Number>; // Difficulty for this block.
  totalDifficulty: HexString<Number>; // Total difficulty for the chain until this block.

  extraData: HexString; // 32-byte long space to preserve for the ethernity :]
  gasLimit: HexString<Number>; // Maximum gas allowed for this block.
  gasUsed: HexString<Number>; // Total gas used for all transactions in this block.

  size: HexString<Number>; // Size of this block in bytes.
  timestamp: HexString<Number>; // The unix timestamp for when the block was collated.

  transactions: Transaction[] | HexString<Hash>[]; // Array of transaction objects or transaction hashes.

  uncles: HexString<Hash>[]; // Array of uncle hashes.
};
```

```typescript title="Transaction"
type Transaction = {
  hash: HexString<Hash>; // Hash of the transaction.
  from: Address; // Address of the sender.
  to: Address | null; // Address of the receiver or null for contract creations.
  value: HexString<Number>; // Value sent in WEI.

  blockHash: HexString<Hash> | null; // Block hash of transaction or null if transaction is pending.
  blockNumber: HexString<Number> | null; // Block number of transaction or null if transaction is pending.
  nonce: HexString<Number>; // Number of transactions made by the sender before.

  gas: HexString<Number>; // Gas units provider by the sender.
  gasPrice: HexString<Number>; // Gas price provider by the sender in WEI.
  maxFeePerGas?: HexString<Number>; // Maximum fee in WEI per gas unit. EIP-1559.
  maxPriorityFeePerGas?: HexString<Number>; // Maximum fee in WEI per gas unit above the base fee. EIP-1559.

  input: HexString; // Data sent with the transaction.

  r: HexString; // ECDSA signature r.
  s: HexString; // ECDSA signature s.
  v: HexString; // ECDSA recovery ID.

  transactionIndex: HexString<Number> | null; // Transaction index in block or null if transaction is pending.
  type: HexString<Number>; // Transaction type
};
```

##### Example

```typescript title="TypeScript"
await provider.request({
  method: "eth_getBlockByHash",
  params: ["0xb3b20624f8f0f86eb50dd04688409e5cea4bd02d700bf6e79e9384d47d6a5a35"],
});
/* {
  difficulty: "0xbfabcdbd93dda",
  extraData: "0x737061726b706f6f6c2d636e2d6e6f64652d3132",
  gasLimit: "0x79f39e",
  gasUsed: "0x79ccd3",
  hash: "0xb3b20624f8f0f86eb50dd04688409e5cea4bd02d700bf6e79e9384d47d6a5a35",
  logsBloom:
    "0x4848112002a2020aaa081218004584...",
  miner: "0x5a0b54d5dc17e0aadc383d2db43b0a0d3e029c4c",
  nonce: "0x4db7a1c01d8a8072",
  number: "0x5bad55",
  parentHash:
    "0x61a8ad530a8a43e3583f8ec163f773ad370329b2375d66433eb82f005e1d6202",
  receiptsRoot:
    "0x5eced534b3d84d3d732ddbc714f5fd51d98a941b28182b6efe6df3a0fe90004b",
  sha3Uncles:
    "0x8a562e7634774d3e3a36698ac4915e37fc84a2cd0044cb84fa5d80263d2af4f6",
  size: "0x41c7",
  stateRoot:
    "0xf5208fffa2ba5a3f3a2f64ebd5ca3d098978bedd75f335f56b705d8715ee2305",
  timestamp: "0x5b541449",
  totalDifficulty: "0x12ac11391a2f3872fcd",
  transactions: [
    "0x8784d99762bccd03b2086eabccee0d77f14d05463281e121a62abfebcf0d2d5f",
    "0x311be6a9b58748717ac0f70eb801d29973661aaf1365960d159e4ec4f4aa2d7f",
    "0xe42b0256058b7cad8a14b136a0364acda0b4c36f5b02dea7e69bfd82cef252a2",
    "0x4eb05376055c6456ed883fc843bc43df1dcf739c321ba431d518aecd7f98ca11",
    "0x994dd9e72b212b7dc5fd0466ab75adf7d391cf4f206a65b7ad2a1fd032bb06d7",
    ...
  ],
  transactionsRoot:
    "0xf98631e290e88f58a46b7032f025969039aa9b5696498efc76baf436fa69b262",
  uncles: [
    "0x824cce7c7c2ec6874b9fa9a9a898eb5f27cbaf3991dfa81084c3af60d1db618c",
  ],
} */
```

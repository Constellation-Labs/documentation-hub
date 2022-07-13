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
  logsBloom: HexString<Filter> | null; // Bloom filter of the logs in the block or null if block is pending.
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

```typescript title="Block"
type Transaction = {};
```

##### Example

```typescript title="TypeScript"
await provider.request({
  method: "web3_sha3",
  params: ["0x68656c6c6f20776f726c64"],
});
// "0x47173285a8d7341e5e972fc677286384f802f8ef42a5ec5f03bbfa254cb01fad"
```

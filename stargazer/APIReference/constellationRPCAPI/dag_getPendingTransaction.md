---
hide_table_of_contents: true
---

<head>
  <meta
    name="description"
    content="Fetches the network mempool for unprocessed transactions, returns a pending transaction or null if transaction was not found or confirmed already."
  />
</head>

<intro-end />

Fetches the network mempool for unprocessed transactions, returns a pending transaction or null if transaction was not found or confirmed already.

##### Parameters

| Name | Type              | Description                            |
| ---- | ----------------- | -------------------------------------- |
| Hash | `HexString<Hash>` | Hash of the transaction to search for. |

##### Return Type

`PendingTransaction` | `null` - Pending transaction or null when not found or already processed.

```typescript title="TransactionRef"
type TransactionRef = {
  prevHash: HexString<Hash>;
  ordinal: Number<Integer>;
};
```

```typescript title="TransactionDetail"
type TransactionDetail = {
  edge: {
    observationEdge: {
      parents: [
        {
          hashReference: DAGAddress;
          hashType: "AddressHash";
          baseHash: null;
        },
        {
          hashReference: DAGAddress;
          hashType: "AddressHash";
          baseHash: null;
        }
      ];
      data: {
        hashReference: HexString<Hash>;
        hashType: "TransactionDataHash";
        baseHash: null;
      };
    };
    signedObservationEdge: {
      signatureBatch: {
        hash: HexString<Hash>;
        signatures: [
          {
            signature: HexString<TransactionSignature>;
            id: {
              hex: HexString<SignerPublicKey>;
            };
          }
        ];
      };
    };
    data: {
      amount: Number<Integer>;
      lastTxRef: TransactionRef;
      fee: Number<Integer> | null;
      salt: Number<Integer>;
    };
  };
  lastTxRef: TransactionRef;
  isDummy: boolean;
  isTest: boolean;
};
```

```typescript title="PendingTransaction"
type PendingTransaction = {
  transaction: TransactionDetail;
  inDAGByAncestor: Record<HexString, Boolean>;
  cbBaseHash: HexString<Hash> | null;
  cbForkBaseHashes: [];
  signatureForks: [];
  knownPeers: [];
  rxTime: Number<UnixTimestamp>;
  path: [];
};
```

##### Example

```typescript title="TypeScript"
await provider.request({
  method: "dag_getPendingTransaction",
  params: ["49fa33900fcb5423241f814ec33f587fa39a2c2702686995b389cba399163eb4"],
});
/*{
  transaction: {
    edge: {
      observationEdge: {
        parents: [
          {
            hashReference: "DAG5pvyL8wQVEACYjEph9jouKQeH4J71Dn5HS25w",
            hashType: "AddressHash",
            baseHash: null,
          },
          {
            hashReference: "DAG88C9WDSKH451sisyEP3hAkgCKn5DN72fuwjfX",
            hashType: "AddressHash",
            baseHash: null,
          },
        ],
        data: {
          hashReference:
            "83b9aca00646c625bbc4a07858dd03d3a49c8cda5aeee3aa854e54eabaa36a787a251de99e11710141fd8a24f3be29b",
          hashType: "TransactionDataHash",
          baseHash: null,
        },
      },
      signedObservationEdge: {
        signatureBatch: {
          hash: "49fa33900fcb5423241f814ec33f587fa39a2c2702686995b389cba399163eb4",
          signatures: [
            {
              signature:
                "3046022100e3f7c78265835ef3ad60d1a4815eb85e9b23aca25e52ad2bb370c0621744f4d5022100aefc16c7cf1d21f98fddbf9ac765d1892edf4e5bafa11366ea9d890a0440df84",
              id: {
                hex: "d51b95c74faa50f18bea38c7d5f2d0a84dc781cff4ca9898be640bed7b53f0db0885885914cee84a4d8f2eb70c80d17fefcbbd14baf07b9057cddcc8dbde43a3",
              },
            },
          ],
        },
      },
      data: {
        amount: 1000000000,
        lastTxRef: {
          prevHash:
            "6c625bbc4a07858dd03d3a49c8cda5aeee3aa854e54eabaa36a787a251de99e1",
          ordinal: 7,
        },
        fee: null,
        salt: 8963915903656603,
      },
    },
    lastTxRef: {
      prevHash:
        "6c625bbc4a07858dd03d3a49c8cda5aeee3aa854e54eabaa36a787a251de99e1",
      ordinal: 7,
    },
    isDummy: false,
    isTest: false,
  },
  inDAGByAncestor: {
    "6693ce4b80b513506960102af9c14e7118a75af7291ca3c81c186f9e90d1be56": true,
  },
  cbBaseHash:
    "6693ce4b80b513506960102af9c14e7118a75af7291ca3c81c186f9e90d1be56",
  cbForkBaseHashes: [],
  signatureForks: [],
  knownPeers: [],
  rxTime: 1660231695634,
  path: [],
};*/
```

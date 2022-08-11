---
hide_table_of_contents: true
---

<head>
  <meta
    name="description"
    content="Fetches the block explorer for confirmed transactions, returns a confirmed transaction or null if not found."
  />
</head>

<intro-end />

Fetches the block explorer for confirmed transactions, returns a confirmed transaction or null if not found.

##### Parameters

| Name | Type              | Description                            |
| ---- | ----------------- | -------------------------------------- |
| Hash | `HexString<Hash>` | Hash of the transaction to search for. |

##### Return Type

`Transaction` | `null` - Confirmed transaction or null when not found.

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

```typescript title="Transaction"
type Transaction = {
  hash: HexString<Hash>;
  amount: Number<Integer>;
  receiver: DAGAddress;
  sender: DAGAddress;
  fee: Number<Integer>;
  isDummy: Boolean;
  lastTransactionRef: TransactionRef;
  snapshotHash: HexString<Hash>;
  checkpointBlock: HexString<Hash>;
  transactionOriginal: TransactionDetail;
  timestamp: ISOTimestamp;
};
```

##### Example

```typescript title="TypeScript"
await provider.request({
  method: "dag_getTransaction",
  params: ["05e646fcba4d337619841ef995606b197b1452b18526e6d0224d3d2734b0c239"],
});
/*{
  hash: "05e646fcba4d337619841ef995606b197b1452b18526e6d0224d3d2734b0c239",
  amount: 1500000000000,
  receiver: "DAG6aMfaBL3ceUUKSWxFMKb9W51sRXVrywXx9Qc6",
  sender: "DAG3Jqp55rKoNbZxhY52ADrW1T3qu1TsxrDkaB8U",
  fee: 0,
  isDummy: false,
  lastTransactionRef: {
    prevHash:
      "a6036ad45dd84ffb0eaa3ca2a8ab30097cb4cacc68007647c59d1a0875e9f722",
    ordinal: 2,
  },
  snapshotHash:
    "93dcc47989fae36d7a48fe5186b33dfe0fa8ee746029f5468510b4ba5ab3f9b9",
  checkpointBlock:
    "dd22de7e9c51ee7e05d47dfe8c942d62ea93c23c93854331aea31a0c3c3dbc34",
  transactionOriginal: {
    edge: {
      observationEdge: {
        parents: [
          {
            hashReference: "DAG3Jqp55rKoNbZxhY52ADrW1T3qu1TsxrDkaB8U",
            hashType: "AddressHash",
            baseHash: null,
          },
          {
            hashReference: "DAG6aMfaBL3ceUUKSWxFMKb9W51sRXVrywXx9Qc6",
            hashType: "AddressHash",
            baseHash: null,
          },
        ],
        data: {
          hashReference:
            "1115d3ef7980064a6036ad45dd84ffb0eaa3ca2a8ab30097cb4cacc68007647c59d1a0875e9f7221210141f9bada1906d5e",
          hashType: "TransactionDataHash",
          baseHash: null,
        },
      },
      signedObservationEdge: {
        signatureBatch: {
          hash: "05e646fcba4d337619841ef995606b197b1452b18526e6d0224d3d2734b0c239",
          signatures: [
            {
              signature:
                "304402203a7a97789fb7a5645506158e97ee1f4c393ee1686f43ee6c280fec60256f1385022052d5b48bdcf956a47e9887189f74d5180d2d3f1dbf8093181e79154b28bf175f",
              id: {
                hex: "4f6068a2a32f316eb89ddc85a1385c234ba663a309834028fe152a0e934cdfdae7343b10ae423bdb732be22d79d8d22b2108f39a8e58ca21fc0a880825772405",
              },
            },
          ],
        },
      },
      data: {
        amount: 1500000000000,
        lastTxRef: {
          prevHash:
            "a6036ad45dd84ffb0eaa3ca2a8ab30097cb4cacc68007647c59d1a0875e9f722",
          ordinal: 2,
        },
        fee: null,
        salt: 8896894320274782,
      },
    },
    lastTxRef: {
      prevHash:
        "a6036ad45dd84ffb0eaa3ca2a8ab30097cb4cacc68007647c59d1a0875e9f722",
      ordinal: 2,
    },
    isDummy: false,
    isTest: false,
  },
  timestamp: "2022-08-04T20:12:52Z",
};*/
```

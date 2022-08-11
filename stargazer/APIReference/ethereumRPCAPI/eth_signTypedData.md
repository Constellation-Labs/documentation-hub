---
hide_table_of_contents: true
---

<head>
  <meta
    name="description"
    content="Calculates an ethereum signature of the given typed structured data from the selected account."
  />
</head>

<intro-end />

Calculates an ethereum signature of the given typed structured data from the selected account.

:::caution Warning
This method requires explicit user authorization.
:::

:::info Important
This method complies with the latest specification of [EIP-712](https://eips.ethereum.org/EIPS/eip-712).

The document version used is commit [9e393a7](https://github.com/ethereum/EIPs/blob/e951b6017f4dd3aa70295fd4f1ae42334b24327b/EIPS/eip-712.md).
:::

##### Parameters

| Name    | Type                                             | Description              |
| ------- | ------------------------------------------------ | ------------------------ |
| Account | `Address`                                        | Account to sign from.    |
| Data    | `MessagePayload` \| `JSONString<MessagePayload>` | Structured data to sign. |

```typescript title="MessagePayload"
// https://eips.ethereum.org/EIPS/eip-712#parameters
type MessagePayload = {
  domain: EIP712Domain;
  types: { EIP712Domain: EIP712Domain } & Record<string, TypedProperty[]>;
  primaryType: string;
  message: any;
};

// https://eips.ethereum.org/EIPS/eip-712#definition-of-domainseparator
type EIP712Domain = {
  name?: string;
  version?: string;
  chainId?: Number<uint256>;
  verifyingContract?: Address;
  salt?: HexString<bytes32>;
};

// https://eips.ethereum.org/EIPS/eip-712#definition-of-typed-structured-data-%F0%9D%95%8A
type TypedProperty = {
  name: string;
  type: string;
};
```

##### Return Type

`HexString<Signature>` - The ethereum ecdsa signature.

##### Example

```typescript title="TypeScript"
await provider.request({
  method: "eth_signTypedData",
  params: [
    "0x567d0382442c5178105fC03bd52b8Db6Afb4fE40",
    {
      types: {
        DeviceControl: [
          {
            name: "principal",
            type: "AuthorizedEntity",
          },
          {
            name: "emergency",
            type: "AuthorizedEntity",
          },
        ],
        AuthorizedEntity: [
          {
            name: "address",
            type: "address",
          },
          {
            name: "validUntil",
            type: "uint256",
          },
        ],
        EIP712Domain: [
          {
            name: "name",
            type: "string",
          },
          {
            name: "version",
            type: "string",
          },
          {
            name: "chainId",
            type: "uint256",
          },
          {
            name: "verifyingContract",
            type: "address",
          },
        ],
      },
      domain: {
        name: "Stargazer Demo",
        version: "1.0.0",
        chainId: "3",
        verifyingContract: "0xeb14c9bb6c2dec2ecb9b278c9fa1ec763b04d545",
      },
      primaryType: "DeviceControl",
      message: {
        principal: {
          address: "0xeb14c9bb6c2dec2ecb9b278c9fa1ec763b04d545",
          validUntil: "1657823568",
        },
        emergency: {
          address: "0xcac3da343670abb46bc6e8e6d375b66217519093",
          validUntil: "1752517998",
        },
      },
    },
  ],
});
// "0xa3f20717a250c2b0b729b7e5becbff67fdaef7e0699da4de7ca5895b02a170a12d887fd3b17bfdce3481f10bea41f45ba9f709d39ce8325427b57afcfc994cee1b"
```

---
title: Constellation RPC API
sidebar_label: Constellation RPC API
sidebar_position: 3
hide_table_of_contents: true
---

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';
import TOCInline from '@theme/TOCInline';

<head>
  <meta
    name="description"
    content="This page describes the different RPC methods available for the user. Some of this methods trigger a popup for the user to accept like dag_signMessage."
  />
  <style>{`
    :root {
      --doc-item-container-width: 60rem;
    }
  `}</style>
</head>

<intro-end />

This page describes the different RPC methods available for the user. Some of this methods trigger a popup for the user to accept like [`dag_signMessage`](#personalsign).

## RPC Methods and Events

<TOCInline toc={toc} minHeadingLevel={3} maxHeadingLevel={3} />

## Detailed Documentation

### `dag_chainId`

Returns the current network id.

##### Parameters

None

##### Return Type

`ChainId` - The current network id.

```typescript title="ChainId"
type ChainId =
  | "1" // Constellation Mainnet
  | "3"; // Ceres Testnet (fka. Exchanges Network)
```

##### Example

```typescript title="TypeScript"
await provider.request({ method: "dag_chainId", params: [] });
// "3"
```

### `dag_accounts`

Retrieve available accounts granted by the user.

##### Parameters

None

##### Return Type

`DAGAddress[]` - User accounts available.

##### Example

```typescript title="TypeScript"
await provider.request({ method: "dag_accounts", params: [] });
// ["DAG88C9WDSKH451sisyEP3hAkgCKn5DN72fuwjfX"]
```

### `dag_signMessage`

Calculates a constellation signature of the given signature request from the selected account.

##### Parameters

| Name    | Type                                    | Description           |
| ------- | --------------------------------------- | --------------------- |
| Account | `Address`                               | Account to sign from. |
| Request | `Base64<JSONEncoded<SignatureRequest>>` | Signature Request.    |

##### Return Type

`HexString` - The constellation ecdsa signature.

```typescript title="Base64"
/**
 * A base64 encoded string
 * */
type Base64 = string;
```

```typescript title="JSONEncoded"
/**
 * A JSON encoded string
 * */
type JSONEncoded = string;
```

```typescript title="JSONScalarValue"
type JSONScalarValue = null | string | number | boolean;
```

```typescript title="SignatureRequest"
type SignatureRequest = {
  content: string;
  metadata: Record<string, JSONScalarValue>;
};
```

##### Example

```typescript title="TypeScript"
// Build the signature request
const signatureRequest: SignatureRequest = {
  content: "Sign this message to confirm your address",
  metadata: {
    user: "3feb69d6-d3f0-4812-9c93-384bee08afe8",
  },
};

// Encode the signature request - Base64 < JSON < Request
const signatureRequestEnconded = window.btoa(JSON.stringify(signatureRequest));

await provider.request({
  method: "dag_signMessage",
  params: ["DAG88C9WDSKH451sisyEP3hAkgCKn5DN72fuwjfX", signatureRequestEnconded],
});
// "3045022100b35798008516373fcc6eef75fe8e322ce8fe0dccc4802b052f3ddc7c6b5dc2900220154cac1e4f3e7d9a64f4ed9d2a518221b273fe782f037a5842725054f1c62280"
```

### `dag_getPublicKey`

Returns the public key of the selected account.

##### Parameters

| Name    | Type         | Description                         |
| ------- | ------------ | ----------------------------------- |
| address | `DAGAddress` | Account to get the public key from. |

##### Return Type

`HexString` - Public key of the selected account.

##### Example

```typescript title="TypeScript"
await provider.request({
  method: "dag_getPublicKey",
  params: ["DAG88C9WDSKH451sisyEP3hAkgCKn5DN72fuwjfX"],
});
// "0482c4566a9c4cbb6f23b9a31c96876501c71f5c04b35f416e0b2243113cce8fb386a2db0b3881d1c908d33465748b948649165a6705904120238999eed6eed1f4"
```

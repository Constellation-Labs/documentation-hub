---
hide_table_of_contents: true
---

<head>
  <meta
    name="description"
    content="Calculates a constellation signature of the given signature request from the selected account."
  />
</head>

<intro-end />

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

<div id="tst-signaturerequest"></div>

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
  params: [
    "DAG88C9WDSKH451sisyEP3hAkgCKn5DN72fuwjfX",
    signatureRequestEnconded,
  ],
});
// "3045022100b35798008516373fcc6eef75fe8e322ce8fe0dccc4802b052f3ddc7c6b5dc2900220154cac1e4f3e7d9a64f4ed9d2a518221b273fe782f037a5842725054f1c62280"
```

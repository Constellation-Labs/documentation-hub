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

Creates a request to generate a safe signature of typed message data from the selected wallet. This method is intended to be used for general message signing use cases such as verifying the ownership of a wallet.

This method adds a standard `"\u0019Constellation Signed Message:\n" + len(message) + "\n"` prefix when calculating the signature hash. The addition of the prefix prevents users from being tricked into signing a valid token transaction with this method.

The final string looks like this: `"\u0019Constellation Signed Message:\n" + len(message) + "\n" + message`

:::caution Warning
Please be sure you use the correct prefix for the correct method when verifying signatures, `dag_signMessage` uses "Constellation Signed Message:" while `dag_signData` uses "Constellation Signed Data:"
:::

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
const signatureRequestEncoded = window.btoa(JSON.stringify(signatureRequest));

await provider.request({
  method: "dag_signMessage",
  params: ["DAG88C9WDSKH451sisyEP3hAkgCKn5DN72fuwjfX", signatureRequestEncoded],
});
// "3045022100b35798008516373fcc6eef75fe8e322ce8fe0dccc4802b052f3ddc7c6b5dc2900220154cac1e4f3e7d9a64f4ed9d2a518221b273fe782f037a5842725054f1c62280"
```

##### Verify

In order to verify the signature you can use the `verify()` method from `dag4.js`:

```typescript title="TypeScript"
// Build the same signature request
const signatureRequest: SignatureRequest = {
  content: "Sign this message to confirm your address",
  metadata: {
    user: "3feb69d6-d3f0-4812-9c93-384bee08afe8",
  },
};

// get the public key
const publicKey = await provider.request({
  method: "dag_getPublicKey",
  params: [
    "DAG88C9WDSKH451sisyEP3hAkgCKn5DN72fuwjfX", // Your DAG address
  ],
});

// same request used in dag_signMessage
const signatureRequestEncoded = window.btoa(JSON.stringify(signatureRequest));

// hash returned by dag_signMessage in the pevious example
const signature =
  "3045022100b35798008516373fcc6eef75fe8e322ce8fe0dccc4802b052f3ddc7c6b5dc2900220154cac1e4f3e7d9a64f4ed9d2a518221b273fe782f037a5842725054f1c62280";

const message = `\u0019Constellation Signed Message:\n${signatureRequestEncoded.length}\n${signatureRequestEncoded}`;

const result = await dag4.keyStore.verify(publicKey, message, signature);
// true -> verification succeeded
// false -> verification failed
```

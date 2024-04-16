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

Creates a request to generate a safe signature of arbitrary data from the selected wallet. This method is intended to be used for interaction with custom data requests to metagraphs and other similar use cases.

This method adds a standard `"\u0019Constellation Signed Data:\n" + len(message) + "\n"` prefix when calculating the signature hash. The addition of the prefix prevents users from being tricked into signing a valid token transaction with this method.

The final string looks like this: `"\u0019Constellation Signed Data:\n" + len(message) + "\n" + message`

:::caution Warning
Please be sure you use the correct prefix for the correct method when verifying signatures, `dag_signData` uses "Constellation Signed Data:" while `dag_signMessage` uses "Constellation Signed Message:"
:::

##### Parameters

| Name    | Type                                             | Description           |
| ------- | ------------------------------------------------ | --------------------- |
| Account | `Address`                                        | Account to sign from. |
| Request | `Base64<JSONEncoded>` \| `Base64<StringEncoded>` | Signature Request.    |

##### Return Type

`HexString` - The prefixed ECDSA signature.

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

```typescript title="StringEncoded"
/**
 * A String encoded
 * */
type StringEncoded = string;
```

##### Example

```typescript title="TypeScript"
// Build the signature request
const signatureRequest: any = {
  field1: "content_field_1",
  field2: {
    field2_1: true,
    field2_2: 12332435,
    field2_3: {
      field2_3_1: "content_field2_3_1",
    },
  },
  field3: [1, 2, 3, 4],
  field4: null,
};

// Encode the signature request - Base64 < JSON < Request
const signatureRequestEncoded = window.btoa(JSON.stringify(signatureRequest));

// Encode the string directly if "signatureRequest" is a string:
// const signatureRequest = "This is a custom string.";
//
//                                      Base64 < String
// const signatureRequestEncoded = window.btoa(signatureRequest);

await provider.request({
  method: "dag_signData",
  params: ["DAG88C9WDSKH451sisyEP3hAkgCKn5DN72fuwjfX", signatureRequestEncoded],
});
// "3045022100b35798008516373fcc6eef75fe8e322ce8fe0dccc4802b052f3ddc7c6b5dc2900220154cac1e4f3e7d9a64f4ed9d2a518221b273fe782f037a5842725054f1c62280"
```

##### Verify

In order to verify the signature you can use the `verifyData()` method from `dag4.js`:

```typescript title="TypeScript"
// Build the same signature request
const signatureRequest: any = {
  field1: "content_field_1",
  field2: {
    field2_1: true,
    field2_2: 12332435,
    field2_3: {
      field2_3_1: "content_field2_3_1",
    },
  },
  field3: [1, 2, 3, 4],
  field4: null,
};

// get the public key
const publicKey = await provider.request({
  method: "dag_getPublicKey",
  params: [
    "DAG88C9WDSKH451sisyEP3hAkgCKn5DN72fuwjfX", // Your DAG address
  ],
});

// same request used in dag_signData
const signatureRequestEncoded = window.btoa(JSON.stringify(signatureRequest));

// hash returned by dag_signData in the pevious example
const signature =
  "3045022100b35798008516373fcc6eef75fe8e322ce8fe0dccc4802b052f3ddc7c6b5dc2900220154cac1e4f3e7d9a64f4ed9d2a518221b273fe782f037a5842725054f1c62280";

const message = `\u0019Constellation Signed Data:\n${signatureRequestEncoded.length}\n${signatureRequestEncoded}`;

const result = await dag4.keyStore.verifyData(publicKey, message, signature);
// true -> verification succeeded
// false -> verification failed
```

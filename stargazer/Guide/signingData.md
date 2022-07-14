---
title: Signing Data
sidebar_label: Signing Data
hide_table_of_contents: false
---

<head>
  <meta
    name="description"
    content="Signing arbitrary data enables you to verify the user's possession of an account. This guide will walk you through the signing process and verification."
  />
</head>

<intro-end />

Signing arbitrary data enables you to verify the user's possession of an account. This guide will walk you through the signing process and verification.

:::info Obtain a chain provider

As covered in [Provider Activation](./providerActivation.md#obtain-a-chainprovider), obtain a chain provider for the networks you want to interact with. In the following examples, we will use both Ethereum and Constellation providers.

```typescript title="TypeScript"
const dagProvider = window.stargazer.getProvider("constellation");
const ethProvider = window.stargazer.getProvider("ethereum");
```

:::

## Constellation Message Signing

### Build a signature request

Constellation signatures for messages are done through a [signature request object](../APIReference/constellationRPCAPI/dag_signMessage.md#tst-signaturerequest). The signature request object is sent for the user to accept. Uppon approval, a signature of the whole object is returned.

```typescript title="TypeScript"
// Build the signature request
const signatureRequest: SignatureRequest = {
  content: "Sign this message to confirm your address",
  metadata: {
    user: "3feb69d6-d3f0-4812-9c93-384bee08afe8",
  },
};
```

### Encode the signature request

Requests need to be a `Base64 < JSON` encoded string to sign. The wallet will then generate the signature from the same characters that compose this encoded request.

```typescript title="TypeScript"
// Encode the signature request - Base64 < JSON < Request
const signatureRequestEnconded = window.btoa(JSON.stringify(signatureRequest));
```

### Send the signature request

Once built and encoded, you can send the encoded signature request using the [`dag_signMessage`](../APIReference/constellationRPCAPI/dag_signMessage.md) RPC method.

:::note Important
When the signature request is sent, the wallet will verify compliance with the schema of the [signature request object](../APIReference/constellationRPCAPI/dag_signMessage.md#tst-signaturerequest). If it does not comply, the wallet will throw an error.
:::

```typescript title="TypeScript"
// Send the request and wait for the signature
await dagProvider.request({
  method: "dag_signMessage",
  params: [
    "DAG88C9WDSKH451sisyEP3hAkgCKn5DN72fuwjfX",
    signatureRequestEnconded,
  ],
});
// "3045022100b35798008516373fcc6eef75fe8e322ce8fe0dccc4802b052f3ddc7c6b5dc2900220154cac1e4f3e7d9a64f4ed9d2a518221b273fe782f037a5842725054f1c62280"
```

The returned signature corresponds to the SHA512 hash of the encoded signature request and the private key of the user.
`ECDSA.sign(privateKey, sha512(signatureRequestEnconded))`.

_Read more about [Constellation signature verification](#constellation-signature-verification)_

### Get the account public key

After you generate a signature from your encoded request, you need to retrieve the public key from the signer's account for future verification. This is due to the fact that Constellation signatures are not recoverable (i.e. do not contain the `v` parameter like in Ethereum).

```typescript title="TypeScript"
// Send the request and wait for the signature
await dagProvider.request({
  method: "dag_getPublicKey",
  params: ["DAG88C9WDSKH451sisyEP3hAkgCKn5DN72fuwjfX"],
});
// "0482c4566a9c4cbb6f23b9a31c96876501c71f5c04b35f416e0b2243113cce8fb386a2db0b3881d1c908d33465748b948649165a6705904120238999eed6eed1f4"
```

## Ethereum Message Signing

The Ethereum RPC API provided reveals the [`personal_sign`](../APIReference/ethereumRPCAPI/personal_sign.md) RPC method for message signing. In this case, the message signed is an arbitrary hex string prefixed by the `"\x19Ethereum Signed Message:\n"` string and the length of the message in bytes from [EIP-191](https://eips.ethereum.org/EIPS/eip-191#specification).

```typescript title="TypeScript"
// Send the request and wait for the signature
await dagProvider.request({
  method: "personal_sign",
  params: [
    "0x5369676e2074686973206d65737361676520746f20636f6e6669726d20796f7572206164647265737320616e64207573657249642033666562363964362d643366302d343831322d396339332d333834626565303861666538",
    "0x9b2055d370f73ec7d8a03e965129118dc8f5bf83",
  ],
});
// "0xa3f20717a250c2b0b729b7e5becbff67fdaef7e0699da4de7ca5895b02a170a12d887fd3b17bfdce3481f10bea41f45ba9f709d39ce8325427b57afcfc994cee1b"

// Can also be a valid UTF-8 string
await dagProvider.request({
  method: "personal_sign",
  params: [
    "Sign this message to confirm your address and userId 3feb69d6-d3f0-4812-9c93-384bee08afe8",
    "0x9b2055d370f73ec7d8a03e965129118dc8f5bf83",
  ],
});
// "0xa3f20717a250c2b0b729b7e5becbff67fdaef7e0699da4de7ca5895b02a170a12d887fd3b17bfdce3481f10bea41f45ba9f709d39ce8325427b57afcfc994cee1b"
```

The returned signature corresponds to the keccak256 hash of the prefix + message string and the private key of the user.
`ECDSA.sign(privateKey, keccak256("\x19Ethereum Signed Message:\n" + len(message) + message))`.

_Read more about [Ethereum signature verification](#ethereum-signature-verification)_

## Constellation Signature Verification

For signature verification, we will be using the [@stardust-collective/dag4](https://www.npmjs.com/package/@stardust-collective/dag4) package. The following snippet illustrates how you can verify an encoded request signature.

```typescript title="TypeScript"
import { dag4 } from "@stardust-collective/dag4";

const publicKey = "account-public-key";
const signatureRequestEnconded = "the-base64-encoded-signature-request";
const signatureHex = "some-hex-encoded-signature";

const valid: boolean = dag4.keyStore.verify(
  publicKey,
  signatureRequestEnconded,
  signatureHex
);

const publicKeyAddress = dag4.keyStore.getDagAddressFromPublicKey(publicKey);
```

## Ethereum Signature Verification

For signature verification, we will be using the [ethers](https://www.npmjs.com/package/ethers) package. The following snippet illustrates how you can verify message signature.

```typescript title="TypeScript"
import * as ethers from "ethers";

const accountWhichSigned = "0x9b2055d370f73ec7d8a03e965129118dc8f5bf83";
const messageSigned = "some-message-the-user-signed";
const signatureHex = "some-hex-encoded-signature";

const messageHash = ethers.utils.hashMessage(messageSigned);
const recoveredAddress = ethers.utils.recoverAddress(messageHash, signatureHex);

if (recoveredAddress !== accountWhichSigned) {
  throw new Error("Signature is not valid");
}
```

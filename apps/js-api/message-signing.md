---
title: Message Signing
sidebar_label: Message Signing
slug: /dag4-message-signing
hide_table_of_contents: false
---

### Sign an arbitrary message
The dag4-keystore package can be used to sign messages using a private key. Messages are signed using secp256k1 which generates a deterministic and canonical ECDSA signature that can be verified with a public key. This example code is not intended to be used to sign transactions. 

```js
const privKey = dag4.keyStore.generatePrivateKey();
const pubKey = dag4.keyStore.getPublicKeyFromPrivate(privateKey);

const signature = await dag4.keyStore.sign(privKey, message);

const verified = dag4.keyStore.verify(pubKey, message, signature);

if (verified) {
  console.log('Signature verified');
} else {
  console.log('Signature invalid');
}
```
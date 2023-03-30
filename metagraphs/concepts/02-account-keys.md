---
title: Accounts and Keys
slug: /accounts
sidebar_label: Accounts and Keys
hide_table_of_contents: false
---
<intro-end />

This document covers the basics of Constellation accounts. 

### The Key Trio

In the Constellation Network, accounts are composed of a key trio consisting of the private key, public key, and an address. 

- **Private key:** The private key is a highly confidential piece of information that plays a crucial role in authenticating an address to the network. With the private key, you can execute sensitive actions like signing messages or sending transactions.
- **Public key:** The public key serves as a unique identifier for nodes on the network and is derived from the private key. It is crucial for establishing trust relationships between nodes, enabling secure communication, and verifying digital signatures.
- **Address:** The address is the public-facing component of the Key Trio and represents a public wallet address for receiving payments or other digital transactions. It can be derived from either the private or public key and is widely used for peer-to-peer transactions. Sharing your address with others enables them to send you payments while keeping your private key confidential.

### Address Format

:::info

📢 Constellation addresses are case sensitive!

:::

Addresses consist of 40 characters divided into three parts. 

- **Prefix:** the characters “DAG”.
- **Check digit:** A single decimal calculated from the digits in the Hash.
- **Hash:** The [base58 encoded](https://en.bitcoin.it/Base58Check_encoding) hash of the first 36 characters of an account public key.

The **Check Digit** is computed by taking the sum of all digit characters in the **Hash**. If the sum is greater than 9, the sum is reduced to a single digit by taking the remainder of the sum divided by 9.  

For example, in the address `DAG5poQ31KFjikEgLoqnf9CQR2KVYv3pfxV5NQZY` the **Check Digit** can be calculated in the following way:

```jsx
3+1+9+2+3+5 = 23
23 % 9 = 5
```

The **Hash** can be derived from the public key in hex format in the following way:

```tsx
const PKCS_PREFIX = '3056301006072a8648ce3d020106052b8104000a03420004';

function deriveHash (publicKeyHex: string) {
	const prefixed = PKCS_PREFIX + publicKeyHex;

	const sha256String = sha256(publicKeyHex);
  const hash = bs58.encode(sha256String);
  
  return hash.slice(hash.length - 36, hash.length);
}
```

The address is constructed of the three components concatenated together: 

```tsx
address = "DAG" + checkDigit + hash
```

## Signing Messages

Constellation Network supports ECDSA signatures on secp256k1. 

To sign messages, a sha512 hash of the message is signed with the private key

```tsx
function sign (privateKey: string, msg: string) {
  const sha512Hash = sha512(msg);
  
  const signature = secp.sign(sha512Hash, privateKey);

  return Buffer.from(signature).toString('hex'); 
}
```
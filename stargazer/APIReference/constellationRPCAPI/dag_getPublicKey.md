---
hide_table_of_contents: true
---

<head>
  <meta
    name="description"
    content="Returns the public key of the selected account."
  />
</head>

<intro-end />

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

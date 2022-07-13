---
title: "async request()"
hide_table_of_contents: true
---

<head>
  <meta
    name="description"
    content="Invokes the selected RPC method. Depeding on the provider chain it will invoke a Constellation RPC method or an Ethereum RPC method."
  />
</head>

<intro-end />

**[EIP-1193 request()](https://eips.ethereum.org/EIPS/eip-1193#request)**

Invokes the selected RPC method. Depeding on the provider chain it will invoke a [Constellation RPC method](./constellationRPCAPI.md) or an [Ethereum RPC method](./ethereumRPCAPI.md).

##### Type

`async request(request): any`

##### Parameters

| Name    | Type      | Description                    |
| ------- | --------- | ------------------------------ |
| request | `Request` | Request method and parameters. |

```typescript title="Request"
type Request = {
  readonly method: string;
  readonly params?: any[];
};
```

##### Return Type

`Any` - Data returned from the request, depends on the invoked RPC method.

##### Example

```typescript title="TypeScript"
await provider.request({ method: "dag_accounts", params: [] });
// ["DAG88C9WDSKH451sisyEP3hAkgCKn5DN72fuwjfX"]
```

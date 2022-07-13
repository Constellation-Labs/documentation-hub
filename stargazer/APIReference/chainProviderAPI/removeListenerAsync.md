---
title: "async removeListenerAsync()"
hide_table_of_contents: true
---

<head>
  <meta
    name="description"
    content="Removes the listener function as callback of the selected RPC event."
  />
</head>

<intro-end />

Removes the listener function as callback of the selected RPC event.

##### Type

`async removeListenerAsync(eventName, listener): void`

##### Parameters

| Name      | Type      | Description                                                                                                                                                |
| --------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| eventName | `String`  | Event listened. Depeding on the provider chain one of [Constellation RPC event](./constellationRPCAPI.md) or an [Ethereum RPC event](./ethereumRPCAPI.md). |
| listener  | `()=>any` | Callback function.                                                                                                                                         |

##### Return Type

`void`

##### Example

```typescript title="TypeScript"
await provider.removeListenerAsync("accountsChanged", listener);
```

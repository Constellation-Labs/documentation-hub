---
title: "removeListener()"
hide_table_of_contents: true
sidebar_position: 3
---

<head>
  <meta
    name="description"
    content="Removes the listener function as callback of the selected RPC event."
  />
</head>

<intro-end />

**[EIP-1193 events](https://eips.ethereum.org/EIPS/eip-1193#events)**

Removes the listener function as callback of the selected RPC event.

:::caution Warning
This method will always return, even if there are errors while removing the listener, for controlling errors generated during the deregistration process use [async removeListenerAsync(eventName, listener)](#async-removelistenerasynceventname-listener-void).
:::

##### Type

`removeListener(eventName, listener): void`

##### Parameters

| Name      | Type      | Description                                                                                                                                                |
| --------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| eventName | `String`  | Event listened. Depeding on the provider chain one of [Constellation RPC event](./constellationRPCAPI.md) or an [Ethereum RPC event](./ethereumRPCAPI.md). |
| listener  | `()=>any` | Callback function.                                                                                                                                         |

##### Return Type

`void`

##### Example

```typescript title="TypeScript"
provider.removeListener("accountsChanged", listener);
```

---
title: "async onAsync()"
hide_table_of_contents: true
---

<head>
  <meta
    name="description"
    content="Registers the listener function as callback of the selected RPC event."
  />
</head>

<intro-end />

Registers the listener function as callback of the selected RPC event.

##### Type

`async onAsync(eventName, listener): void`

##### Parameters

| Name      | Type      | Description                                                                                                                                               |
| --------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| eventName | `String`  | Event to listen. Depeding on the provider chain one of [Constellation RPC event](../constellationRPCAPI/) or an [Ethereum RPC event](../ethereumRPCAPI/). |
| listener  | `()=>any` | Callback function.                                                                                                                                        |

##### Return Type

`void`

##### Example

```typescript title="TypeScript"
await provider.onAsync("accountsChanged", () => {
  // Do something when accounts changed
});
```

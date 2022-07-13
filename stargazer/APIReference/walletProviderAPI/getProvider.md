---
title: "getProvider()"
hide_table_of_contents: true
---

<head>
  <meta
    name="description"
    content="Returns a chain provider for the selected chain."
  />
</head>

<intro-end />

Returns a chain provider for the selected chain.

:::info Info
Each provider instance is created once per network, thus 2 chain providers from the same network on the same page share the same underlying reference.
:::

##### Type

`getProvider(chain): ChainProvider`

##### Parameters

| Name  | Type                              | Description |
| ----- | --------------------------------- | ----------- |
| chain | `"constellation"` \| `"ethereum"` | Chain name. |

##### Return Type

`ChainProvider` - The selected chain provider. An error is thrown if `chain` is invalid.

##### Example

```typescript title="TypeScript"
window.stargazer.getProvider("constellation");
// ChainProvider
```

---
hide_table_of_contents: true
---

<head>
  <meta
    name="description"
    content="Uninstalls a filter with given ID. Should always be called when watching is no longer needed. Additionally filters time out when they aren't requested with eth_getFilterChanges for a period of time."
  />
</head>

<intro-end />

Uninstalls a filter with given ID. Should always be called when watching is no longer needed. Additionally filters time out when they aren't requested with [`eth_getFilterChanges`](./eth_getFilterChanges.md) for a period of time.

##### Parameters

| Name     | Type        | Description                |
| -------- | ----------- | -------------------------- |
| FilterId | `HexString` | Filter to uninstall by id. |

##### Return Type

`Boolean` - True if the filter was uninstalled successfully.

##### Example

```typescript title="TypeScript"
await provider.request({
  method: "eth_uninstallFilter",
  params: ["0x10ff0bfba9472c87932c56632eef8f5cc70910e8e71d"],
});
// true
```

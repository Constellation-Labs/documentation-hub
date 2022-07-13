---
hide_table_of_contents: true
---

<head>
  <meta
    name="description"
    content="Retrieve available accounts granted by the user."
  />
</head>

<intro-end />

Retrieve available accounts granted by the user.

##### Parameters

None

##### Return Type

`Address[]` - User accounts available.

##### Example

```typescript title="TypeScript"
await provider.request({ method: "eth_accounts", params: [] });
// ["0x407d73d8a49eeb85d32cf465507dd71d507100c1"]
```

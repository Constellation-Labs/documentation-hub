---
hide_table_of_contents: true
---

<head>
  <meta
    name="description"
    content="Returns the current DAG balance."
  />
</head>

<intro-end />

Returns the current DAG balance.

##### Parameters

None

##### Return Type

`String` - The amount of DAG.

##### Example

```typescript title="TypeScript"
await provider.request({ method: "dag_getBalance" });
// "1000"
```

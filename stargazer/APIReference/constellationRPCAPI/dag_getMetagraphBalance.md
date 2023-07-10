---
hide_table_of_contents: true
---

<head>
  <meta
    name="description"
    content="Returns the balance of the selected metagraph token."
  />
</head>

<intro-end />

Returns the balance of the selected metagraph token.

##### Parameters

| Name             | Type         | Description                        |
| ---------------- | ------------ | ---------------------------------- |
| metagraphAddress | `DAGAddress` | The address of the metagraph token |

##### Return Type

`String` - Balance of the selected metagraph token

##### Example

```typescript title="TypeScript"
await provider.request({
  method: "dag_getMetagraphBalance",
  params: ["DAG0KheCYqEmFoQEWdFwrZGaXabJsWJyUvjpsLjE"],
});
// "1000"
```

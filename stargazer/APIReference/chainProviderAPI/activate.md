---
title: "async activate()"
hide_table_of_contents: true
---

<head>
  <meta
    name="description"
    content="Sends an activation request for the user to accept. If the user has already given authorization for the current origin this method just configures the underlying communication channel."
  />
</head>

<intro-end />

Sends an [activation](../Guide/providerActivation.md) request for the user to accept. If the user has already given authorization for the current [origin](https://datatracker.ietf.org/doc/html/rfc6454) this method just configures the underlying communication channel.

##### Type

`async activate(title?): boolean`

##### Parameters

| Name   | Type     | Description |
| ------ | -------- | ----------- |
| title? | `String` | App name.   |

##### Return Type

`Boolean` - Indicating the result of the activation request.

##### Example

```typescript title="TypeScript"
await provider.activate();
// true
```

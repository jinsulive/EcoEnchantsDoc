---
title: collection_complete
titleZh: collection_complete
category: conditions
subcategory: player_state
tags:
  - libreforge
outline: deep
---

# collection_complete <Badge type="info" text="libreforge" />

> Requires a player to have fully completed (maxed) a collection

## Overview

| Property | Value |
|----------|-------|
| Type ID | `collection_complete` |
| Module | libreforge |
| Category | Player State |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## Parameters

| Parameter | Description |
|-----------|-------------|
| `collection` | The collection ID |

## Configuration Example

```yaml
- id: collection_complete
  args:
    collection: diamond # The collection ID
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)

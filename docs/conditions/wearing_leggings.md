---
title: wearing_leggings
titleZh: wearing_leggings
category: conditions
subcategory: items
tags:
  - libreforge
outline: deep
---

# wearing_leggings <Badge type="info" text="libreforge" />

> Requires a player to have an item as their leggings

## Overview

| Property | Value |
|----------|-------|
| Type ID | `wearing_leggings` |
| Module | libreforge |
| Category | Items & Equipment |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## Parameters

| Parameter | Description |
|-----------|-------------|
| `items` | The list of allowed items |

## Configuration Example

```yaml
- id: wearing_leggings
  args:
    items: # The list of allowed items
      - diamond_leggings protection:4
      - netherite_leggings protection:3
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)

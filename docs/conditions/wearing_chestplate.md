---
title: wearing_chestplate
titleZh: wearing_chestplate
category: conditions
subcategory: items
tags:
  - libreforge
outline: deep
---

# wearing_chestplate <Badge type="info" text="libreforge" />

> Requires a player to have an item as their chestplate

## Overview

| Property | Value |
|----------|-------|
| Type ID | `wearing_chestplate` |
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
- id: wearing_chestplate
  args:
    items: # The list of allowed items
      - diamond_chestplate protection:4
      - netherite_chestplate protection:3
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)

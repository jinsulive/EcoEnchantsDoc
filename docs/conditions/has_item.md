---
title: has_item
titleZh: has_item
category: conditions
subcategory: items
tags:
  - libreforge
outline: deep
---

# has_item <Badge type="info" text="libreforge" />

> Requires a player to have an item in their inventory

## Overview

| Property | Value |
|----------|-------|
| Type ID | `has_item` |
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
- id: has_item
  args:
    items: # The list of allowed items
      - talismans:archery_2 sparkly
      - netherite_ingot
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)

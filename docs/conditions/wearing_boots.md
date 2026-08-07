---
title: wearing_boots
titleZh: wearing_boots
category: conditions
subcategory: items
tags:
  - libreforge
outline: deep
---

# wearing_boots <Badge type="info" text="libreforge" />

> Requires a player to have an item as their boots

## Overview

| Property | Value |
|----------|-------|
| Type ID | `wearing_boots` |
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
- id: wearing_boots
  args:
    items: # The list of allowed items
      - diamond_boots protection:4
      - netherite_boots protection:3
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)

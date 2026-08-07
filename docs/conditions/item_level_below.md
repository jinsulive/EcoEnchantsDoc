---
title: item_level_below
titleZh: item_level_below
category: conditions
subcategory: items
tags:
  - libreforge
outline: deep
---

# item_level_below <Badge type="info" text="libreforge" />

> Requires an item to be below a certain level

## Overview

| Property | Value |
|----------|-------|
| Type ID | `item_level_below` |
| Module | libreforge |
| Category | Items & Equipment |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## Parameters

| Parameter | Description |
|-----------|-------------|
| `id` | The level ID |
| `level` | The maximum level |

## Configuration Example

```yaml
- id: item_level_below
  args:
    id: mining_progress # The level ID
    level: 5 # The maximum level
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)

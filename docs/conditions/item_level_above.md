---
title: item_level_above
titleZh: item_level_above
category: conditions
subcategory: items
tags:
  - libreforge
outline: deep
---

# item_level_above <Badge type="info" text="libreforge" />

> Requires an item to be above a certain level

## Overview

| Property | Value |
|----------|-------|
| Type ID | `item_level_above` |
| Module | libreforge |
| Category | Items & Equipment |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## Parameters

| Parameter | Description |
|-----------|-------------|
| `id` | The level ID |
| `level` | The minimum level |

## Configuration Example

```yaml
- id: item_level_above
  args:
    id: mining_progress # The level ID
    level: 2 # The minimum level
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)

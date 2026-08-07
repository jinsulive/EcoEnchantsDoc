---
title: item_level_equals
titleZh: item_level_equals
category: conditions
subcategory: items
tags:
  - libreforge
outline: deep
---

# item_level_equals <Badge type="info" text="libreforge" />

> Requires an item to be on a certain level

## Overview

| Property | Value |
|----------|-------|
| Type ID | `item_level_equals` |
| Module | libreforge |
| Category | Items & Equipment |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## Parameters

| Parameter | Description |
|-----------|-------------|
| `id` | The level ID |
| `level` | The level |

## Configuration Example

```yaml
- id: item_level_equals
  args:
    id: mining_progress # The level ID
    level: 3 # The level
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)

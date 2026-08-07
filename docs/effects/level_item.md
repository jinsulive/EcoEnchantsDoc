---
title: level_item
titleZh: level_item
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# level_item <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Gain item XP for a certain level

## Overview

| Property | Value |
|----------|-------|
| Type ID | `level_item` |
| Module | libreforge |
| Category | Item |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `id` | The level ID |
| `xp` | The amount of xp to gain |

## Configuration Example

```yaml
- id: level_item
  args:
    id: mining_progress # The level ID
    xp: "%v% * 2" # The amount of xp to gain
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

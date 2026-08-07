---
title: give_global_points
titleZh: give_global_points
category: effects
subcategory: economy
tags:
  - libreforge
outline: deep
---

# give_global_points <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Add / subtract global points (check the points wiki page if you don't know what these are)

## Overview

| Property | Value |
|----------|-------|
| Type ID | `give_global_points` |
| Module | libreforge |
| Category | Economy |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `type` | The point to add/subtract |
| `amount` | The amount to add/subtract |

## Configuration Example

```yaml
- id: give_global_points
  args:
    type: item_stock # The point to add/subtract
    amount: 1 # The amount to add/subtract
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

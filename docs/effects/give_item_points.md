---
title: give_item_points
titleZh: give_item_points
category: effects
subcategory: economy
tags:
  - libreforge
outline: deep
---

# give_item_points <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Add / subtract item points (check the points wiki page if you don't know what these are)

## Overview

| Property | Value |
|----------|-------|
| Type ID | `give_item_points` |
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
- id: give_item_points
  args:
    type: point_name # The point to add/subtract
    amount: 1 # The amount to add/subtract
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

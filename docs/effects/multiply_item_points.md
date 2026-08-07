---
title: multiply_item_points
titleZh: multiply_item_points
category: effects
subcategory: economy
tags:
  - libreforge
outline: deep
---

# multiply_item_points <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Multiply item points (check the points wiki page if you don't know what these are)

## Overview

| Property | Value |
|----------|-------|
| Type ID | `multiply_item_points` |
| Module | libreforge |
| Category | Economy |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `type` | The point to multiply |
| `multiplier` | The multiplier |

## Configuration Example

```yaml
- id: multiply_item_points
  args:
    type: point_name # The point to multiply
    multiplier: 2.5 # The multiplier
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

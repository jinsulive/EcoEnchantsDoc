---
title: give_points
titleZh: give_points
category: effects
subcategory: economy
tags:
  - libreforge
outline: deep
---

# give_points <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Add / subtract points (check the points wiki page if you don't know what these are)

## Overview

| Property | Value |
|----------|-------|
| Type ID | `give_points` |
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
- id: give_points
  args:
    type: g_souls # The point to add/subtract
    amount: 1 # The amount to add/subtract
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

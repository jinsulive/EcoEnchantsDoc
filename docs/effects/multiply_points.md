---
title: multiply_points
titleZh: multiply_points
category: effects
subcategory: economy
tags:
  - libreforge
outline: deep
---

# multiply_points <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Multiply points (check the points wiki page if you don't know what these are)

## Overview

| Property | Value |
|----------|-------|
| Type ID | `multiply_points` |
| Module | libreforge |
| Category | Economy |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `type` | The point to multiply |
| `multiplier` | The amount to multiply it by |

## Configuration Example

```yaml
- id: multiply_points
  args:
    type: g_souls # The point to multiply
    multiplier: 2 # The amount to multiply it by
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

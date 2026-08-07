---
title: add_points
titleZh: add_points
category: effects
subcategory: economy
tags:
  - libreforge
outline: deep
---

# add_points <Badge type="info" text="libreforge" /> <Badge type="info" text="Permanent" />

> Add / subtract points (check the points wiki page if you don't know what these are)

## Overview

| Property | Value |
|----------|-------|
| Type ID | `add_points` |
| Module | libreforge |
| Category | Economy |
| Effect Type | Permanent |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `type` | The point to add/subtract |
| `amount` | The amount to add/subtract |

## Configuration Example

```yaml
- id: add_points
  args:
    type: g_souls # The point to add/subtract
    amount: 1 # The amount to add/subtract
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

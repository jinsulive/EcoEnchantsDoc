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

> Multiplies a point value stored on the found item by the specified amount.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `multiply_item_points` |
| Module | libreforge |
| Category | Economy |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `type` | String | ✅ | — | — | The item point type to multiply. |
| `multiplier` | Expression | ✅ | — | — | The multiplier to apply to the item's point value. Supports expressions. Example: `1 + %level% * 0.1` |
| `amount` | Expression | — | — | — |  |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectMultiplyItemPoints.kt`).

- **Source Description**: Multiplies a point value stored on the found item by the specified amount.
- **Categories**: `economy`, `points`

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

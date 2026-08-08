---
title: multiply_global_points
titleZh: multiply_global_points
category: effects
subcategory: economy
tags:
  - libreforge
outline: deep
---

# multiply_global_points <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Multiply global points (check the points wiki page if you don't know what these are)

## Overview

| Property | Value |
|----------|-------|
| Type ID | `multiply_global_points` |
| Module | libreforge |
| Category | Economy |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `type` | String | ✅ | — | — | The global point type to multiply. |
| `multiplier` | Expression(数学表达式) | ✅ | — | — | The multiplier to apply to the global point counter. Supports expressions. Example: `1 + %level% * 0.1` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectMultiplyGlobalPoints.kt`).

- **Source Description**: Multiplies a global point counter by the specified amount.
- **Categories**: `economy`, `points`

## Configuration Example

```yaml
- id: multiply_global_points
  args:
    type: item_stock # The point to multiply
    multiplier: 2 # The amount to multiply it by
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

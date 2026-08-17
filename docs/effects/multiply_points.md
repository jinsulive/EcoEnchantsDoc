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

> Multiplies a player's point value for the specified point type by the given amount.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `multiply_points` |
| Module | libreforge |
| Category | Economy |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `type` | String | ✅ | — | — | The player point type to multiply. |
| `multiplier` | Expression | ✅ | — | — | The multiplier to apply to the player's point value. Supports expressions. Example: `1 + %level% * 0.1` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectMultiplyPoints.kt`).

- **Source Description**: Multiplies a player's point value for the specified point type by the given amount.
- **Categories**: `economy`, `points`
- **Requires Trigger Data**: `PLAYER`

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

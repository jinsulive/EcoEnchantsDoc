---
title: multiply_velocity
titleZh: multiply_velocity
category: effects
subcategory: movement
tags:
  - libreforge
outline: deep
---

# multiply_velocity <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Multiplies a players velocity

## Overview

| Property | Value |
|----------|-------|
| Type ID | `multiply_velocity` |
| Module | libreforge |
| Category | Movement |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `multiplier` | Expression(数学表达式) | ✅ | — | — | The multiplier \| Source: The factor to multiply all velocity components by (e.g. 2 = double speed). Supports expressions. Example: `1 + %level% * 0.1` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectMultiplyVelocity.kt`).

- **Source Description**: Multiplies the player's current velocity vector by the specified factor.
- **Categories**: `movement`
- **Requires Trigger Data**: `PLAYER`

## Configuration Example

```yaml
- id: multiply_velocity
  args:
    multiplier: 1.3 # The multiplier
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

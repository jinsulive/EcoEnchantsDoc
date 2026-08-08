---
title: explosion_knockback_resistance_multiplier
titleZh: explosion_knockback_resistance_multiplier
category: effects
subcategory: combat
tags:
  - libreforge
outline: deep
---

# explosion_knockback_resistance_multiplier <Badge type="info" text="libreforge" /> <Badge type="warning" text="Permanent" />

> Multiplies explosion resistance

## Overview

| Property | Value |
|----------|-------|
| Type ID | `explosion_knockback_resistance_multiplier` |
| Module | libreforge |
| Category | Combat |
| Effect Type | Permanent |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `multiplier` | Expression(数学表达式) | ✅ | — | — | The multiplier for explosion knockback resistance \| Source: The value to add to the explosion knockback resistance attribute. Supports expressions. Example: `%level% * 0.1` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectExplosionKnockbackResistanceMultiplier.kt`).

- **Source Description**: Adds a flat value to the player's explosion knockback resistance attribute.
- **Categories**: `combat`, `player`, `attribute`

## Configuration Example

```yaml
- id: explosion_knockback_resistance_multiplier
  args:
    multiplier: 2 # The multiplier for explosion knockback resistance
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

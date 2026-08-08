---
title: attack_speed_multiplier
titleZh: attack_speed_multiplier
category: effects
subcategory: movement
tags:
  - libreforge
outline: deep
---

# attack_speed_multiplier <Badge type="info" text="libreforge" /> <Badge type="warning" text="Permanent" />

> Multiplies attack speed

## Overview

| Property | Value |
|----------|-------|
| Type ID | `attack_speed_multiplier` |
| Module | libreforge |
| Category | Movement |
| Effect Type | Permanent |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `multiplier` | Expression(数学表达式) | ✅ | — | — | The multiplier for the attack speed \| Source: The attack speed multiplier. 1.5 = 50% faster. Supports expressions. Example: `1 + %level% * 0.05` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectAttackSpeedMultiplier.kt`).

- **Source Description**: Multiplies the player's attack speed while the holder is active.
- **Categories**: `combat`, `player`, `attribute`

## Configuration Example

```yaml
- id: attack_speed_multiplier
  args:
    multiplier: 1.5 # The multiplier for the attack speed
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

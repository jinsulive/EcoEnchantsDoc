---
title: underwater_mining_speed_multiplier
titleZh: underwater_mining_speed_multiplier
category: effects
subcategory: movement
tags:
  - libreforge
outline: deep
---

# underwater_mining_speed_multiplier <Badge type="info" text="libreforge" /> <Badge type="warning" text="Permanent" />

> Multiplies underwater mining speed

## Overview

| Property | Value |
|----------|-------|
| Type ID | `underwater_mining_speed_multiplier` |
| Module | libreforge |
| Category | Movement |
| Effect Type | Permanent |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `multiplier` | Expression(数学表达式) | ✅ | — | — | The multiplier for underwater mining speed \| Source: The multiplier to apply to underwater mining speed. Supports expressions. Example: `1 + %level% * 0.02` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectUnderwaterMiningSpeedMultiplier.kt`).

- **Source Description**: Multiplies the player's mining speed while submerged underwater.
- **Categories**: `world`, `player`, `attribute`

## Configuration Example

```yaml
- id: underwater_mining_speed_multiplier
  args:
    multiplier: 2 # The multiplier for underwater mining speed
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

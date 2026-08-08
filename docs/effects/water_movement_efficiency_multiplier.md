---
title: water_movement_efficiency_multiplier
titleZh: water_movement_efficiency_multiplier
category: effects
subcategory: movement
tags:
  - libreforge
outline: deep
---

# water_movement_efficiency_multiplier <Badge type="info" text="libreforge" /> <Badge type="warning" text="Permanent" />

> Multiplies water movement efficiency

## Overview

| Property | Value |
|----------|-------|
| Type ID | `water_movement_efficiency_multiplier` |
| Module | libreforge |
| Category | Movement |
| Effect Type | Permanent |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `multiplier` | Expression(数学表达式) | ✅ | — | — | The multiplier for water movement efficiency \| Source: The multiplier to apply to water movement efficiency. Supports expressions. Example: `1 + %level% * 0.05` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectWaterMovementEfficiencyMultiplier.kt`).

- **Source Description**: Multiplies the player's movement efficiency while in water.
- **Categories**: `movement`, `player`, `attribute`

## Configuration Example

```yaml
- id: water_movement_efficiency_multiplier
  args:
    multiplier: 2 # The multiplier for water movement efficiency
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

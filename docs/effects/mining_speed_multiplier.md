---
title: mining_speed_multiplier
titleZh: mining_speed_multiplier
category: effects
subcategory: movement
tags:
  - libreforge
outline: deep
---

# mining_speed_multiplier <Badge type="info" text="libreforge" /> <Badge type="warning" text="Permanent" />

> Multiplies mining speed

## Overview

| Property | Value |
|----------|-------|
| Type ID | `mining_speed_multiplier` |
| Module | libreforge |
| Category | Movement |
| Effect Type | Permanent |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `multiplier` | Expression(数学表达式) | ✅ | — | — | The multiplier for mining speed \| Source: The mining speed multiplier to apply (e.g. 2 = double speed). Supports expressions. Example: `1 + %level% * 0.02` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectMiningSpeedMultiplier.kt`).

- **Source Description**: Multiplies the player's overall block-break speed while the holder is active.
- **Categories**: `world`, `player`, `attribute`

## Configuration Example

```yaml
- id: mining_speed_multiplier
  args:
    multiplier: 1.1 # The multiplier for mining speed
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

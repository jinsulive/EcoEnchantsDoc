---
title: movement_speed_multiplier
titleZh: movement_speed_multiplier
category: effects
subcategory: movement
tags:
  - libreforge
outline: deep
---

# movement_speed_multiplier <Badge type="info" text="libreforge" /> <Badge type="warning" text="Permanent" />

> Multiplies movement speed

## Overview

| Property | Value |
|----------|-------|
| Type ID | `movement_speed_multiplier` |
| Module | libreforge |
| Category | Movement |
| Effect Type | Permanent |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `multiplier` | Expression(数学表达式) | ✅ | — | — | The movement speed multiplier to apply (e.g. 1.5 = 50% faster). Supports expressions. Example: `1 + %level% * 0.05` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectMovementSpeedMultiplier.kt`).

- **Source Description**: Multiplies the player's movement speed while the holder is active.
- **Categories**: `movement`, `player`, `attribute`

## Configuration Example

```yaml
- id: movement_speed_multiplier
  args:
    multiplier: 1.5 # The multiplier for movement speed
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

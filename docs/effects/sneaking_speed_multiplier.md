---
title: sneaking_speed_multiplier
titleZh: sneaking_speed_multiplier
category: effects
subcategory: movement
tags:
  - libreforge
outline: deep
---

# sneaking_speed_multiplier <Badge type="info" text="libreforge" /> <Badge type="warning" text="Permanent" />

> Multiplies sneaking speed

## Overview

| Property | Value |
|----------|-------|
| Type ID | `sneaking_speed_multiplier` |
| Module | libreforge |
| Category | Movement |
| Effect Type | Permanent |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `multiplier` | Expression(数学表达式) | ✅ | — | — | The multiplier for sneaking speed \| Source: The multiplier applied to sneaking speed. Supports expressions. Example: `1 + %level% * 0.05` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectSneakingSpeedMultiplier.kt`).

- **Source Description**: Multiplies the player's movement speed while they are sneaking.
- **Categories**: `movement`, `player`, `attribute`

## Configuration Example

```yaml
- id: sneaking_speed_multiplier
  args:
    multiplier: 2 # The multiplier for sneaking speed
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

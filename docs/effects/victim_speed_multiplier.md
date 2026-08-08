---
title: victim_speed_multiplier
titleZh: victim_speed_multiplier
category: effects
subcategory: movement
tags:
  - libreforge
outline: deep
---

# victim_speed_multiplier <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Temporarily multiplies victim movement speed

## Overview

| Property | Value |
|----------|-------|
| Type ID | `victim_speed_multiplier` |
| Module | libreforge |
| Category | Movement |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `multiplier` | Expression(数学表达式) | ✅ | — | — | The multiplier for movement speed \| Source: The value to multiply the victim's movement speed by. Supports expressions. Example: `1 - %level% * 0.02` |
| `duration` | Expression(数学表达式) | ✅ | — | — | The duration (in ticks) \| Source: How many ticks the speed change lasts. Supports expressions. Example: `20 * %level%` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectVictimSpeedMultiplier.kt`).

- **Source Description**: Temporarily multiplies the victim's movement speed for a given duration.
- **Categories**: `movement`, `combat`, `attribute`
- **Requires Trigger Data**: `VICTIM`

## Configuration Example

```yaml
- id: victim_speed_multiplier
  args:
    multiplier: 1.5 # The multiplier for movement speed
    duration: 50 # The duration (in ticks)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

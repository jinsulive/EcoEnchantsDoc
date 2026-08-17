---
title: shockwave
titleZh: shockwave
category: effects
subcategory: world
tags:
  - libreforge
outline: deep
---

# shockwave <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Creates an expanding shockwave that knocks back and damages nearby entities.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `shockwave` |
| Module | libreforge |
| Category | World |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `radius` | Expression | ✅ | — | — | The maximum radius the shockwave expands to. Supports expressions. Example: `5 + %level% * 0.5` |
| `pulses` | Expression | ✅ | — | — | How many pulses the shockwave expands over before reaching its full radius. Supports expressions. |
| `damage` | Expression | ✅ | — | — | The amount of damage dealt to each entity caught in the shockwave. Supports expressions. Example: `%level% * 2` |
| `knockback` | Expression | ✅ | — | — | The knockback force applied to each entity hit. Supports expressions. Example: `1 + %level% * 0.1` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectShockwave.kt`).

- **Source Description**: Creates an expanding shockwave that knocks back and damages nearby entities.
- **Categories**: `combat`, `movement`
- **Requires Trigger Data**: `PLAYER`

## Configuration Example

```yaml
- id: shockwave
  args:
    radius: 5 # The final radius of the shockwave in blocks
    pulses: 5 # The number of expansion pulses
    damage: 3.0 # The damage dealt to each entity hit
    knockback: 1.5 # The knockback force applied to hit entities
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

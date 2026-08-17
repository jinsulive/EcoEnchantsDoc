---
title: shoot_firework
titleZh: shoot_firework
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# shoot_firework <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Launches a firework projectile from the player with configurable visual effects.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `shoot_firework` |
| Module | libreforge |
| Category | Utility |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `effects` | Dynamic | — | — | — | List of firework effect subsections defining the firework's appearance. |
| `power` | Integer | — | `0` | — | The flight duration power of the firework (0-255). |
| `inherit_velocity` | Boolean | — | `false` | — | Whether the firework should inherit the player's current velocity. |
| `launch-at-location` | Boolean | — | `false` | — | Whether the firework should be teleported to the trigger location after launch. |
| `no_source` | Boolean | — | `false` | — | Whether the firework should have no shooter, preventing attribution to the player. |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectShootFirework.kt`).

- **Source Description**: Launches a firework projectile from the player with configurable visual effects.
- **Categories**: `visual`, `combat`
- **Requires Trigger Data**: `PLAYER`
- **Inherits Config**: Yes — this effect inherits its sub-configuration; see the corresponding sub-config page.

## Configuration Example

```yaml
- id: shoot_firework
  args:
    inherit_velocity: true # If velocity should be inherited from the trigger
    no_source: false # If the player should not be marked as the source, leaving this option out defaults to false
    launch-at-location: false # If the firework should be launched at the location of the trigger rather than the player (Default: false)
    power: 1 # The power of the firework, which affects how far it flies before exploding. (0-255, 0 is instant explosion)
    effects: # You can specify multiply effects for the firework.
      - type: CREEPER # The firework shape: BALL, BALL_LARGE, STAR, CREEPER, BURST
        colors: # The firework colors, in hex format
          - "#e5006d"
          - "#ff0000"
        fade_colors:
          - "#ffffff"
        trail: true # If the firework should have a trail
        flicker: true # If the firework should flicker
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

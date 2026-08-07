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

> Shoots a firework

## Overview

| Property | Value |
|----------|-------|
| Type ID | `shoot_firework` |
| Module | libreforge |
| Category | Utility |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `inherit_velocity` | If velocity should be inherited from the trigger |
| `no_source` | If the player should not be marked as the source, leaving this option out defaults to false |
| `launch-at-location` | If the firework should be launched at the location of the trigger rather than the player |
| `power` | The power of the firework, which affects how far it flies before exploding. (0-255, 0 is instant explosion) |
| `effects` | You can specify multiply effects for the firework. |

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

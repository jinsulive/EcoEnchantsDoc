---
title: firework
titleZh: firework
category: effects
subcategory: visual
tags:
  - libreforge
outline: deep
---

# firework <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Launches a firework at the trigger location with configurable colors, shape, and effects.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `firework` |
| Module | libreforge |
| Category | Visual |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `power` | Integer | — | `0` | — | The flight duration of the firework (0–255). Defaults to 0. |
| `effects` | Dynamic | — | — | — | A list of firework effect subsections, each with type, colors, fade-colors, trail, and flicker. |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectFirework.kt`).

- **Source Description**: Launches a firework at the trigger location with configurable colors, shape, and effects.
- **Categories**: `visual`
- **Requires Trigger Data**: `LOCATION`

## Configuration Example

```yaml
- id: firework
  args:
    power: 1 # The power of the firework, which affects how high it flies before exploding. (0-255, 0 is instant explosion)
    effects: # You can specify multiply for the firework.
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

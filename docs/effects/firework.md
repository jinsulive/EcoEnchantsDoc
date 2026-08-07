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

> Launches a firework from the trigger location

## Overview

| Property | Value |
|----------|-------|
| Type ID | `firework` |
| Module | libreforge |
| Category | Visual |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `power` | The power of the firework, which affects how high it flies before exploding. (0-255, 0 is instant explosion) |
| `effects` | You can specify multiple firework effects |

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

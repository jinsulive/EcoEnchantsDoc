---
title: animation
titleZh: animation
category: effects
subcategory: visual
tags:
  - libreforge
outline: deep
---

# animation <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Plays an animation

## Overview

| Property | Value |
|----------|-------|
| Type ID | `animation` |
| Module | libreforge |
| Category | Visual |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `animation` | String | ✅ | — | `spin_item` | The animation to play. |
| `animation_args` | Custom | — | — | — | Arguments for the animation |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectAnimation.kt`).

- **Source Description**: Plays a named animation at the trigger location.
- **Categories**: `visual`
- **Requires Trigger Data**: `LOCATION`
- **Inherits Config**: Yes — this effect inherits its sub-configuration; see the corresponding sub-config page.

## Configuration Example

```yaml
- id: animation
  args:
    animation: spin_item # The ID of the animation
    animation_args: # Arguments for the animation
      item: "ecoitems:hardened_diamond_sword finishing:5"
      amount: 4
      duration: 100
      radius: 2
      speed: 1
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

---
title: permanent_potion_effect
titleZh: permanent_potion_effect
category: effects
subcategory: potion
tags:
  - libreforge
outline: deep
---

# permanent_potion_effect <Badge type="info" text="libreforge" /> <Badge type="warning" text="Permanent" />

> Gives a permanent potion effect

## Overview

| Property | Value |
|----------|-------|
| Type ID | `permanent_potion_effect` |
| Module | libreforge |
| Category | Potion |
| Effect Type | Permanent |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `effect` | Any/Custom | ✅ | — | — | The effect to give |
| `level` | Custom | — | — | — | The effect level to give |
| `particles` | Custom | — | — | — | (Optional) If the effect should show particles |
| `icon` | Custom | — | — | — | (Optional) If the effect should show the icon in the top corner |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectPermanentPotionEffect.kt`).

- **Source Description**: Permanently applies a potion effect to the player for as long as the holder is active, surviving respawns.
- **Categories**: `potion`, `player`

## Configuration Example

```yaml
- id: permanent_potion_effect
  args:
    effect: blindness # The effect to give
    level: 2 # The effect level to give
    particles: true # (Optional) If the effect should show particles
    icon: false # (Optional) If the effect should show the icon in the top corner
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

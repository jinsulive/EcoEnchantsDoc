---
title: potion_effect
titleZh: potion_effect
category: effects
subcategory: potion
tags:
  - libreforge
outline: deep
---

# potion_effect <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Applies a potion effect to the player or victim for a configurable duration and level.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `potion_effect` |
| Module | libreforge |
| Category | Potion |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `effect` | Potion Effect | ✅ | — | — | The potion effect type to apply. |
| `level` | Expression | ✅ | — | — | The level of the potion effect (1 = level I). Supports expressions. Example: `1 + %level% / 10` |
| `duration` | Expression | ✅ | — | — | How long the effect lasts in ticks. Supports expressions. Example: `20 * %level%` |
| `apply_to_player` | Boolean | — | `false` | — | If true, applies the effect to the player instead of the victim. |
| `particles` | Boolean | — | `true` | — | Whether to show potion effect particles. |
| `icon` | Boolean | — | `true` | — | Whether to show the effect icon in the HUD. |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectPotionEffect.kt`).

- **Source Description**: Applies a potion effect to the player or victim for a configurable duration and level.
- **Categories**: `potion`
- **Requires Trigger Data**: `PLAYER`

## Configuration Example

```yaml
- id: potion_effect
  args:
    effect: blindness # The effect to give (https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/potion/PotionEffectType.html)
    level: 1 # The level to give
    duration: 40 # The duration of the effect (in ticks)
    particles: true # (Optional) If the effect should show particles
    icon: false # (Optional) If the effect should show the icon in the top corner
    apply_to_player: false # True to apply to the player, false to apply to the victim
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

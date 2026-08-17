---
title: remove_potion_effect
titleZh: remove_potion_effect
category: effects
subcategory: potion
tags:
  - libreforge
outline: deep
---

# remove_potion_effect <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Removes a specified potion effect from the player or victim.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `remove_potion_effect` |
| Module | libreforge |
| Category | Potion |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `effect` | Potion Effect | ✅ | — | — | The potion effect type to remove. |
| `apply_to_player` | Boolean | — | `false` | — | If true, removes the effect from the player instead of the victim. |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectRemovePotionEffect.kt`).

- **Source Description**: Removes a specified potion effect from the player or victim.
- **Categories**: `potion`
- **Requires Trigger Data**: `PLAYER`

## Configuration Example

```yaml
- id: remove_potion_effect
  args:
    effect: hunger # The effect to remove (https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/potion/PotionEffectType.html)
    apply_to_player: true # True to remove the effect from the player, false to remove it from the victim
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

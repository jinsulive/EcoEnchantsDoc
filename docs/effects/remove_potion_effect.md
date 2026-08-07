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

> Removes a potion effect

## Overview

| Property | Value |
|----------|-------|
| Type ID | `remove_potion_effect` |
| Module | libreforge |
| Category | Potion |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `effect` | The effect to remove (https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/potion/PotionEffectType.html) |
| `apply_to_player` | True to remove the effect from the player, false to remove it from the victim |

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

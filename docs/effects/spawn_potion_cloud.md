---
title: spawn_potion_cloud
titleZh: spawn_potion_cloud
category: effects
subcategory: potion
tags:
  - libreforge
outline: deep
---

# spawn_potion_cloud <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Spawns a potion cloud

## Overview

| Property | Value |
|----------|-------|
| Type ID | `spawn_potion_cloud` |
| Module | libreforge |
| Category | Potion |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `effect` | The effect to give (https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/potion/PotionEffectType.html) |
| `level` | The level to give |
| `duration` | The duration of the effect (in ticks) |

## Configuration Example

```yaml
- id: spawn_potion_cloud
  args:
    effect: blindness # The effect to give (https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/potion/PotionEffectType.html)
    level: 1 # The level to give
    duration: 80 # The duration of the effect (in ticks)
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

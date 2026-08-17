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

> Spawns a lingering potion cloud at the trigger location that applies a potion effect.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `spawn_potion_cloud` |
| Module | libreforge |
| Category | Potion |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `effect` | Potion Effect | ✅ | — | — | The potion effect to apply to entities in the cloud. |
| `level` | Expression | ✅ | — | — | The amplifier level of the potion effect. Supports expressions. Example: `1 + %level% / 10` |
| `duration` | Expression | ✅ | — | — | How long the cloud and its applied effect last, in ticks. Supports expressions. Example: `20 * %level%` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectSpawnPotionCloud.kt`).

- **Source Description**: Spawns a lingering potion cloud at the trigger location that applies a potion effect.
- **Categories**: `potion`, `visual`
- **Requires Trigger Data**: `LOCATION`

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

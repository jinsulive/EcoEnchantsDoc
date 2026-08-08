---
title: spawn_mobs
titleZh: spawn_mobs
category: effects
subcategory: world
tags:
  - libreforge
outline: deep
---

# spawn_mobs <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Spawns mobs to help you

## Overview

| Property | Value |
|----------|-------|
| Type ID | `spawn_mobs` |
| Module | libreforge |
| Category | World |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `amount` | Expression(数学表达式) | ✅ | — | — | The number of mobs to spawn. Supports expressions. Example: `1 + %level% / 5` |
| `ticks_to_live` | Expression(数学表达式) | ✅ | — | — | How many ticks the mobs will live before being removed. Supports expressions. Example: `20 * %level%` |
| `health` | Expression(数学表达式) | — | `20` | — | The max health (and starting health) to set on each spawned mob. Supports expressions. Example: `20 + %level% * 5` |
| `range` | Expression(数学表达式) | ✅ | — | — | The radius around the trigger location in which mobs can spawn. Supports expressions. Example: `5 + %level% * 0.5` |
| `entity` | Entity | ✅ | — | — | The entity type to spawn. |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectSpawnMobs.kt`).

- **Source Description**: Spawns multiple mobs near the trigger location that target the victim.
- **Categories**: `entity`
- **Requires Trigger Data**: `PLAYER`, `LOCATION`

## Configuration Example

```yaml
- id: spawn_mobs
  args:
    amount: 4 # The amount of mobs to spawn
    ticks_to_live: 120 # The amount of ticks the mobs should live for
    health: 5 # The mob health
    range: 10 # The range around the location for mobs to spawn
    entity: cave_spider speed:0.8 # The mob to spawn, takes a lookup string
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

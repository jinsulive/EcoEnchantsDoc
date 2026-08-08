---
title: spawn_particle
titleZh: spawn_particle
category: effects
subcategory: visual
tags:
  - libreforge
outline: deep
---

# spawn_particle <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Spawns a particle

## Overview

| Property | Value |
|----------|-------|
| Type ID | `spawn_particle` |
| Module | libreforge |
| Category | Visual |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `particle` | Any/Custom | ✅ | — | — | The particle to spawn (https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Particle.html) \| Source: The particle to spawn, as an eco particle string. Example: `flame` |
| `amount` | Expression(数学表达式) | — | `1` | — | The amount of particles to spawn \| Source: The number of particles to spawn. Supports expressions. |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectSpawnParticle.kt`).

- **Source Description**: Spawns particles at the trigger location.
- **Categories**: `visual`
- **Requires Trigger Data**: `LOCATION`

## Configuration Example

```yaml
- id: spawn_particle
  args:
    particle: heart # The particle to spawn (https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Particle.html)
    amount: 10 # The amount of particles to spawn
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

---
title: particle_line
titleZh: particle_line
category: effects
subcategory: visual
tags:
  - libreforge
outline: deep
---

# particle_line <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Spawns a line of particles between you and the target location

## Overview

| Property | Value |
|----------|-------|
| Type ID | `particle_line` |
| Module | libreforge |
| Category | Visual |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `particle` | String | ✅ | — | — | The particle type to spawn along the line. Example: `flame` |
| `amount` | Expression(数学表达式) | ✅ | — | — | The number of particles to spawn at each point along the line. Supports expressions. |
| `spacing` | Expression(数学表达式) | ✅ | — | — | The distance between each particle point along the line. Supports expressions. |

> 💡 See [Particle Types](../guide/particles) for the full list of 115 built-in particles.

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectParticleLine.kt`).

- **Source Description**: Spawns a line of particles between the player's eye and the trigger location.
- **Categories**: `visual`
- **Requires Trigger Data**: `PLAYER`, `LOCATION`

## Configuration Example

```yaml
- id: particle_line
  args:
    particle: heart # The particle to spawn (https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Particle.html)
    amount: 10 # The amount of particles to spawn on each point
    spacing: 1.5 # The spacing between each particle in the line
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

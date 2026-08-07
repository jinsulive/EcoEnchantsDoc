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

| Parameter | Description |
|-----------|-------------|
| `particle` | The particle to spawn (https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Particle.html) |
| `amount` | The amount of particles to spawn |

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

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

| Parameter | Description |
|-----------|-------------|
| `particle` | The particle to spawn (https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Particle.html) |
| `amount` | The amount of particles to spawn on each point |
| `spacing` | The spacing between each particle in the line |

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

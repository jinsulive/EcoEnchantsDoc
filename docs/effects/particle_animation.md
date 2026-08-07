---
title: particle_animation
titleZh: particle_animation
category: effects
subcategory: visual
tags:
  - libreforge
outline: deep
---

# particle_animation <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Plays a particle animation

## Overview

| Property | Value |
|----------|-------|
| Type ID | `particle_animation` |
| Module | libreforge |
| Category | Visual |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `particle` | The particle to spawn (https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Particle.html) |
| `particle-amount` | The amount of particles to spawn on each point |
| `animation` | The ID of the animation |
| `tick-multiplier` | (Optional) increases the speed of the animation by some multiplier |
| `entity` | (Optional) specifies the entity to have the animation activate around (player, victim, projectile) |
| `use-eye-location` | (Optional) Sets the entity location to be at eye level rather than ground level |
| `particle_args` | Arguments for the animation |

## Configuration Example

```yaml
- id: particle_animation
  args:
      particle: soul # The particle to spawn (https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Particle.html)
      particle-amount: 1 # The amount of particles to spawn on each point
      animation: ground_spiral # The ID of the animation
      tick-multiplier: 1 # (Optional) increases the speed of the animation by some multiplier
      entity: player # (Optional) specifies the entity to have the animation activate around (player, victim, projectile)
      use-eye-location: true # (Optional) Sets the entity location to be at eye level rather than ground level
      particle_args: # Arguments for the animation
          scalar: 1.618
          distance-scalar: 0.5
          duration: 20
    ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

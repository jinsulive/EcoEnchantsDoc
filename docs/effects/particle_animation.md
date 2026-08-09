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

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `particle` | String | ✅ | — | — | The particle type to spawn during the animation. Example: `flame` |
| `particle-amount` | Expression(数学表达式) | — | `1` | — | The number of particles to spawn per animation point per tick. Supports expressions. |
| `animation` | String | ✅ | — | `circle`, `double_helix`, `ground_spiral`, `helix`, `trace`, `twirl`, `wing_tips`, `projectile_trail` | The animation pattern to use (e.g. circle, helix). |
| `tick-multiplier` | Custom | — | — | — | (Optional) increases the speed of the animation by some multiplier |
| `entity` | String | — | `player` | `player`, `victim`, `projectile` | The entity to anchor the animation to (player, victim, projectile). |
| `use-eye-location` | Boolean | — | `false` | — | Whether to use the entity's eye location instead of their feet. |
| `particle_args` | Custom | — | — | — | Arguments for the animation |

> 💡 See [Particle Types](../guide/particles) for the full list of 115 built-in particles.

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectParticleAnimation.kt`).

- **Source Description**: Plays a particle animation at the trigger location over time using a named animation pattern.
- **Categories**: `visual`
- **Requires Trigger Data**: `PLAYER`, `LOCATION`
- **Inherits Config**: Yes — this effect inherits its sub-configuration; see the corresponding sub-config page.

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

---
title: shoot
titleZh: shoot
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# shoot <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Launches a projectile of the specified entity type from the player.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `shoot` |
| Module | libreforge |
| Category | Utility |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `projectile` | Entity | ✅ | — | — | The entity type to launch as a projectile, e.g. ARROW or SNOWBALL. |
| `inherit_velocity` | Boolean | — | `false` | — | Whether the projectile should inherit the player's current velocity. |
| `launch-at-location` | Boolean | — | `false` | — | Whether the projectile should be teleported to the trigger location after launch. |
| `allow_pickup` | Boolean | — | `false` | — | Whether the projectile can be picked up by players (applies to arrows). |
| `no_source` | Boolean | — | `false` | — | Whether the projectile should have no shooter, preventing attribution to the player. |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectShoot.kt`).

- **Source Description**: Launches a projectile of the specified entity type from the player.
- **Categories**: `combat`
- **Requires Trigger Data**: `PLAYER`
- **Inherits Config**: Yes — this effect inherits its sub-configuration; see the corresponding sub-config page.

## Configuration Example

```yaml
- id: shoot
  args:
    inherit_velocity: true # If velocity should be inherited from the trigger (ie if you want to make a tripleshot effect)
    no_source: false # If the player should not be marked as the source, leaving this option out defaults to false
    projectile: arrow # The name of the projectile
    launch-at-location: false # If the projectile should be launched at the location of the trigger rather than the player (Default: false)
    allow_pickup: false # If the arrow should be able to be picked up by players (Default: false)
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

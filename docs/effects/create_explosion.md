---
title: create_explosion
titleZh: create_explosion
category: effects
subcategory: world
tags:
  - libreforge
outline: deep
---

# create_explosion <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Creates one or more explosions at the trigger location.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `create_explosion` |
| Module | libreforge |
| Category | World |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `amount` | Expression | ✅ | — | — | The number of explosions to create (one per tick). Supports expressions. |
| `power` | Expression | ✅ | — | — | The explosion power. Vanilla TNT is 4. Supports expressions. |
| `player_as_damager` | Boolean | — | `false` | — | If true, the player is attributed as the source of explosion damage. |
| `create_fire` | Boolean | — | `true` | — | Whether the explosion creates fire. |
| `break_blocks` | Boolean | — | `true` | — | Whether the explosion breaks blocks. |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectCreateExplosion.kt`).

- **Source Description**: Creates one or more explosions at the trigger location.
- **Categories**: `world`, `combat`
- **Requires Trigger Data**: `LOCATION`

## Configuration Example

```yaml
- id: create_explosion
  args:
    power: 1 # The power of the explosion
    amount: 1 # The amount of explosions
    create_fire: true # If the explosion should create fire
    break_blocks: true # If the explosion should break blocks
    player_as_damager: false # If the player should be the source of the explosion
    
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

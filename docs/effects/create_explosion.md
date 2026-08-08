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

> Creates an explosion

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
| `power` | Expression(数学表达式) | ✅ | — | — | The power of the explosion \| Source: The explosion power. Vanilla TNT is 4. Supports expressions. |
| `amount` | Expression(数学表达式) | ✅ | — | — | The amount of explosions \| Source: The number of explosions to create (one per tick). Supports expressions. |
| `create_fire` | Boolean | — | `true` | — | If the explosion should create fire \| Source: Whether the explosion creates fire. |
| `break_blocks` | Boolean | — | `true` | — | If the explosion should break blocks \| Source: Whether the explosion breaks blocks. |
| `player_as_damager` | Boolean | — | `false` | — | If the player should be the source of the explosion \| Source: If true, the player is attributed as the source of explosion damage. |

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

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

| Parameter | Description |
|-----------|-------------|
| `power` | The power of the explosion |
| `amount` | The amount of explosions |
| `create_fire` | If the explosion should create fire |
| `break_blocks` | If the explosion should break blocks |
| `player_as_damager` | If the player should be the source of the explosion |

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

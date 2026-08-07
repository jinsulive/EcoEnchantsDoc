---
title: damage_nearby_entities
titleZh: damage_nearby_entities
category: effects
subcategory: combat
tags:
  - libreforge
outline: deep
---

# damage_nearby_entities <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Damage entities near a location

## Overview

| Property | Value |
|----------|-------|
| Type ID | `damage_nearby_entities` |
| Module | libreforge |
| Category | Combat |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `damage` | The amount of damage to deal |
| `radius` | The radius to scan for entities |
| `entities` | The whitelist of entities to damage |
| `damage_as_player` | If the player should be marked as the damager |
| `damage_self` | If the effect can damage the player |

## Configuration Example

```yaml
- id: damage_nearby_entities
  args:
    damage: 2 # The amount of damage to deal
    radius: 5 # The radius to scan for entities
    entities: # The whitelist of entities to damage
      - spider
      - cave_spider
    damage_as_player: false # If the player should be marked as the damager
    damage_self: false # If the effect can damage the player
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

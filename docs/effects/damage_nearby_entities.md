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

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `damage` | Expression(数学表达式) | ✅ | — | — | The amount of damage to deal \| Source: The amount of damage to deal to each entity. Supports expressions. Example: `%level% * 2` |
| `radius` | Expression(数学表达式) | ✅ | — | — | The radius to scan for entities \| Source: The radius to damage entities within. Supports expressions. Example: `5 + %level% * 0.5` |
| `entities` | Entity List | — | — | — | The whitelist of entities to damage \| Source: If specified, only these entity types will be damaged. |
| `damage_as_player` | Boolean | ✅ | — | — | If the player should be marked as the damager \| Source: Whether the player is attributed as the source of damage. |
| `damage_self` | Boolean | — | `true` | — | If the effect can damage the player \| Source: Whether the player can damage themselves with this effect. |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectDamageNearbyEntities.kt`).

- **Source Description**: Deals damage to all nearby entities within a radius.
- **Categories**: `combat`
- **Requires Trigger Data**: `LOCATION`, `PLAYER`

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

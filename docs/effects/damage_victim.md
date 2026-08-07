---
title: damage_victim
titleZh: damage_victim
category: effects
subcategory: combat
tags:
  - libreforge
outline: deep
---

# damage_victim <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Damage the victim

## Overview

| Property | Value |
|----------|-------|
| Type ID | `damage_victim` |
| Module | libreforge |
| Category | Combat |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `damage` | The damage to deal |
| `use-source` | If the player should be marked as the damager, will trigger melee_damage and run listeners (set to false if you don't know what this means) |
| `true-damage` | If the damage should ignore armor, defense, etc |

## Configuration Example

```yaml
- id: damage_victim
  args:
    damage: 10.4 # The damage to deal
    use-source: false # If the player should be marked as the damager, will trigger melee_damage and run listeners: set to false if you don't know what this means
    true-damage: true # (Optional) if the damage should ignore armor, defense, etc
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

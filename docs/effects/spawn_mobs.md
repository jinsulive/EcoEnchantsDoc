---
title: spawn_mobs
titleZh: spawn_mobs
category: effects
subcategory: world
tags:
  - libreforge
outline: deep
---

# spawn_mobs <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Spawns mobs to help you

## Overview

| Property | Value |
|----------|-------|
| Type ID | `spawn_mobs` |
| Module | libreforge |
| Category | World |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `amount` | The amount of mobs to spawn |
| `ticks_to_live` | The amount of ticks the mobs should live for |
| `health` | The mob health |
| `range` | The range around the location for mobs to spawn |
| `entity` | The mob to spawn, takes a lookup string |

## Configuration Example

```yaml
- id: spawn_mobs
  args:
    amount: 4 # The amount of mobs to spawn
    ticks_to_live: 120 # The amount of ticks the mobs should live for
    health: 5 # The mob health
    range: 10 # The range around the location for mobs to spawn
    entity: cave_spider speed:0.8 # The mob to spawn, takes a lookup string
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

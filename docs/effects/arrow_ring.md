---
title: arrow_ring
titleZh: arrow_ring
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# arrow_ring <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Spawns a ring of arrows around a location

## Overview

| Property | Value |
|----------|-------|
| Type ID | `arrow_ring` |
| Module | libreforge |
| Category | Item |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `amount` | The amount of arrows to spawn |
| `height` | The height at which to spawn the arrows |
| `radius` | The radius of the ring |
| `arrow_damage` | The amount of damage for the arrows to deal |
| `fire_ticks` | The fire ticks for the arrows to have |

## Configuration Example

```yaml
- id: arrow_ring
  args:
    amount: 12 # The amount of arrows to spawn
    height: 3 # The height at which to spawn the arrows
    radius: 1.5 # The radius of the ring
    arrow_damage: 10 # The amount of damage for the arrows to deal
    fire_ticks: 30 # The fire ticks for the arrows to have
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

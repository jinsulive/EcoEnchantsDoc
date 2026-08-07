---
title: add_holder_in_radius
titleZh: add_holder_in_radius
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# add_holder_in_radius <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Gives a custom holder temporarily for a given period of time. A holder is anything with effects and conditions, in plugins typically a Talisman, Armor Set, etc. You can create custom holders temporarily and give them on a trigger, for example to give permanent effects for a period of time to people around you.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `add_holder_in_radius` |
| Module | libreforge |
| Category | Utility |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `effects` | The effects to apply in the temporary holder |
| `conditions` | The conditions for the holder |
| `duration` | The duration, in ticks |
| `radius` | The radius, in blocks |
| `apply-to-self` | If the player should also get the holder |

## Configuration Example

```yaml
- id: add_holder_in_radius
  args:
    effects: 
      - id: movement_speed_multiplier
        args:
          multiplier: 1.25
    conditions: []
    duration: 300 # The duration, in ticks
    radius: 5.3 # The radius, in blocks
    apply-to-self: false # If the player should also get the holder (Defaults to false)
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

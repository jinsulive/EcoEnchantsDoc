---
title: add_permanent_holder_in_radius
titleZh: add_permanent_holder_in_radius
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# add_permanent_holder_in_radius <Badge type="info" text="libreforge" /> <Badge type="warning" text="Permanent" />

> Gives a custom holder to people within a certain radius of you. A holder is anything with effects and conditions, in plugins typically a Talisman, Armor Set, etc.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `add_permanent_holder_in_radius` |
| Module | libreforge |
| Category | Utility |
| Effect Type | Permanent |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `effects` | The effects to apply in the temporary holder |
| `conditions` | The conditions for the holder |
| `radius` | The radius, in blocks |
| `apply-to-self` | If the player should also get the holder |

## Configuration Example

```yaml
- id: add_permanent_holder_in_radius
  args:
    effects: 
      - id: multiply_all_stats
        args:
          multiplier: 1.05
    conditions: []
    radius: 5.3 # The radius, in blocks
    apply-to-self: false # If the player should also get the holder (Defaults to false)
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

---
title: aoe
titleZh: aoe
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# aoe <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Runs effects for all entities within an area of effect (aoe)

## Overview

| Property | Value |
|----------|-------|
| Type ID | `aoe` |
| Module | libreforge |
| Category | Utility |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `effects` | The effects to run for each entity |
| `shape` | The shape of the AOE area (see above) |
| `radius` | The radius of the cone (see above) |
| `angle` | The angle of the cone (see above) |

## Configuration Example

```yaml
- id: aoe
  args:
      effects: # The effects to run for each entity
          - id: damage_victim
            args:
                damage: 2
                true-damage: true
      shape: cone # The shape of the AOE area (see above)
      radius: 3 # The radius of the cone (see above)
      angle: 120 # The angle of the cone (see above)
    ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

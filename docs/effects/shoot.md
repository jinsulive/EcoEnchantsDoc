---
title: shoot
titleZh: shoot
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# shoot <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Shoots a projectile

## Overview

| Property | Value |
|----------|-------|
| Type ID | `shoot` |
| Module | libreforge |
| Category | Utility |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `inherit_velocity` | If velocity should be inherited from the trigger (ie if you want to make a tripleshot effect) |
| `no_source` | If the player should not be marked as the source, leaving this option out defaults to false |
| `projectile` | The name of the projectile |
| `launch-at-location` | If the projectile should be launched at the location of the trigger rather than the player |
| `allow_pickup` | If the arrow should be able to be picked up by players |

## Configuration Example

```yaml
- id: shoot
  args:
    inherit_velocity: true # If velocity should be inherited from the trigger (ie if you want to make a tripleshot effect)
    no_source: false # If the player should not be marked as the source, leaving this option out defaults to false
    projectile: arrow # The name of the projectile
    launch-at-location: false # If the projectile should be launched at the location of the trigger rather than the player (Default: false)
    allow_pickup: false # If the arrow should be able to be picked up by players (Default: false)
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

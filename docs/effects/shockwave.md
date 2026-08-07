---
title: shockwave
titleZh: shockwave
category: effects
subcategory: world
tags:
  - libreforge
outline: deep
---

# shockwave <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Emits an expanding shockwave that knocks back and damages nearby entities

## Overview

| Property | Value |
|----------|-------|
| Type ID | `shockwave` |
| Module | libreforge |
| Category | World |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `radius` | The final radius of the shockwave in blocks |
| `pulses` | The number of expansion pulses |
| `damage` | The damage dealt to each entity hit |
| `knockback` | The knockback force applied to hit entities |

## Configuration Example

```yaml
- id: shockwave
  args:
    radius: 5 # The final radius of the shockwave in blocks
    pulses: 5 # The number of expansion pulses
    damage: 3.0 # The damage dealt to each entity hit
    knockback: 1.5 # The knockback force applied to hit entities
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

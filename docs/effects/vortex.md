---
title: vortex
titleZh: vortex
category: effects
subcategory: world
tags:
  - libreforge
outline: deep
---

# vortex <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Pulls nearby entities toward a location over a duration, then damages them

## Overview

| Property | Value |
|----------|-------|
| Type ID | `vortex` |
| Module | libreforge |
| Category | World |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `radius` | The radius in blocks to pull entities from |
| `duration` | The duration in ticks to pull entities |
| `damage` | The damage dealt to all affected entities at the end |
| `pull_strength` | (Optional) The strength of the pull each tick, defaults to 0.3 |
| `whitelist` | (Optional) A list of entity types to pull, if not specified all entities will be pulled |
| `blacklist` | (Optional) A list of entity types to ignore, if not specified no entities will be ignored |

## Configuration Example

```yaml
- id: vortex
  args:
    radius: 6 # The radius in blocks to pull entities from
    duration: 40 # The duration in ticks to pull entities
    damage: 5.0 # The damage dealt to all affected entities at the end
    pull_strength: 0.3 # (Optional) The strength of the pull each tick, defaults to 0.3
    whitelist: # (Optional) A list of entity types to pull, if not specified all entities will be pulled
      - zombie
      - skeleton
    blacklist: # (Optional) A list of entity types to ignore, if not specified no entities will be ignored
      - ender_dragon
      - wither
      - warden
      - elder_guardian
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

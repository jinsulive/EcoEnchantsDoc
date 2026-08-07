---
title: time_bomb
titleZh: time_bomb
category: effects
subcategory: world
tags:
  - libreforge
outline: deep
---

# time_bomb <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Plants a timed explosion on an entity that detonates after a fuse duration

## Overview

| Property | Value |
|----------|-------|
| Type ID | `time_bomb` |
| Module | libreforge |
| Category | World |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `fuse` | The delay in ticks before the explosion |
| `power` | The explosion power |
| `break_blocks` | (Optional) Whether the explosion breaks blocks, defaults to false |
| `glow` | (Optional) Whether the entity glows while the fuse is active, defaults to true |

## Configuration Example

```yaml
- id: time_bomb
  args:
    fuse: 60 # The delay in ticks before the explosion
    power: 3.0 # The explosion power
    break_blocks: false # (Optional) Whether the explosion breaks blocks, defaults to false
    glow: true # (Optional) Whether the entity glows while the fuse is active, defaults to true
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

---
title: teleport_to
titleZh: teleport_to
category: effects
subcategory: movement
tags:
  - libreforge
outline: deep
---

# teleport_to <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Teleport a player to a specific location

## Overview

| Property | Value |
|----------|-------|
| Type ID | `teleport_to` |
| Module | libreforge |
| Category | Movement |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `world` | The world name |
| `x` | The x-coordinate |
| `y` | The y-coordinate |
| `z` | The z-coordinate |

## Configuration Example

```yaml
- id: teleport_to
  args:
    world: world_nether # The world name
    x: 100 # The x-coordinate
    y: 50 # The y-coordinate
    z: -581.2 # The z-coordinate
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

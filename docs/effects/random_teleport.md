---
title: random_teleport
titleZh: random_teleport
category: effects
subcategory: movement
tags:
  - libreforge
outline: deep
---

# random_teleport <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Teleports the player to a random location within a radius

## Overview

| Property | Value |
|----------|-------|
| Type ID | `random_teleport` |
| Module | libreforge |
| Category | Movement |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `radius` | The maximum distance in blocks from the player |
| `min_radius` | (Optional) The minimum distance in blocks from the player |

## Configuration Example

```yaml
- id: random_teleport
  args:
    radius: 50 # The maximum distance in blocks from the player
    min_radius: 10 # (Optional) The minimum distance in blocks from the player
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

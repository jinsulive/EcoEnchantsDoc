---
title: arrow_storm
titleZh: arrow_storm
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# arrow_storm <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Rains arrows down onto a location

## Overview

| Property | Value |
|----------|-------|
| Type ID | `arrow_storm` |
| Module | libreforge |
| Category | Item |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `amount` | The number of arrows to spawn |
| `height` | The height above the target location to spawn arrows |
| `spread` | The horizontal spread radius of the arrow spawn positions |
| `damage` | The damage each arrow deals |

## Configuration Example

```yaml
- id: arrow_storm
  args:
    amount: 10 # The number of arrows to spawn
    height: 10 # The height above the target location to spawn arrows
    spread: 3 # The horizontal spread radius of the arrow spawn positions
    damage: 2.0 # (Optional) The damage each arrow deals
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

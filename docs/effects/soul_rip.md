---
title: soul_rip
titleZh: soul_rip
category: effects
subcategory: combat
tags:
  - libreforge
outline: deep
---

# soul_rip <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Damages nearby entities and heals the player for the damage dealt

## Overview

| Property | Value |
|----------|-------|
| Type ID | `soul_rip` |
| Module | libreforge |
| Category | Combat |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `radius` | The radius in blocks to affect entities |
| `damage` | The damage dealt to each nearby entity |
| `heal_multiplier` | (Optional) Multiplier applied to total healing, defaults to 1.0 |

## Configuration Example

```yaml
- id: soul_rip
  args:
    radius: 5 # The radius in blocks to affect entities
    damage: 4.0 # The damage dealt to each nearby entity
    heal_multiplier: 1.0 # (Optional) Multiplier applied to total healing, defaults to 1.0
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

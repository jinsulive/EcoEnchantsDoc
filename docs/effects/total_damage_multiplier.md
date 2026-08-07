---
title: total_damage_multiplier
titleZh: total_damage_multiplier
category: effects
subcategory: combat
tags:
  - libreforge
outline: deep
---

# total_damage_multiplier <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Multiplies all incoming or outgoing damage from any damage trigger

## Overview

| Property | Value |
|----------|-------|
| Type ID | `total_damage_multiplier` |
| Module | libreforge |
| Category | Combat |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `multiplier` | The multiplier |

## Configuration Example

```yaml
- id: total_damage_multiplier
  args:
    multiplier: 0.5 # The multiplier
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

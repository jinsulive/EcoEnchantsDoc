---
title: give_health
titleZh: give_health
category: effects
subcategory: healing
tags:
  - libreforge
outline: deep
---

# give_health <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Gives the player health

## Overview

| Property | Value |
|----------|-------|
| Type ID | `give_health` |
| Module | libreforge |
| Category | Healing |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `amount` | The amount of health to give/take (allows negative values) |
| `trigger_heal` | Whether to trigger the heal event ("heal" trigger) |

## Configuration Example

```yaml
- id: give_health
  args:
    amount: 2 # The amount of health to give/take (allows negative values)
    trigger_heal: true # (Optional) Whether to trigger the heal event ("heal" trigger)
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

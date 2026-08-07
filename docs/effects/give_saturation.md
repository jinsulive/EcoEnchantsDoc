---
title: give_saturation
titleZh: give_saturation
category: effects
subcategory: healing
tags:
  - libreforge
outline: deep
---

# give_saturation <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Gives the player saturation

## Overview

| Property | Value |
|----------|-------|
| Type ID | `give_saturation` |
| Module | libreforge |
| Category | Healing |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `amount` | The amount of saturation to give/take (allows negative values) |

## Configuration Example

```yaml
- id: give_saturation
  args:
    amount: 1.0 # The amount of saturation to give/take (allows negative values)
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

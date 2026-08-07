---
title: damage_armor
titleZh: damage_armor
category: effects
subcategory: combat
tags:
  - libreforge
outline: deep
---

# damage_armor <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Damage a victim's armor

## Overview

| Property | Value |
|----------|-------|
| Type ID | `damage_armor` |
| Module | libreforge |
| Category | Combat |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `damage` | The amount of damage to deal |

## Configuration Example

```yaml
- id: damage_armor
  args:
    damage: 1 # The amount of damage to deal
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

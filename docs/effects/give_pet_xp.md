---
title: give_pet_xp
titleZh: give_pet_xp
category: effects
subcategory: economy
tags:
  - libreforge
outline: deep
---

# give_pet_xp <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Gives experience points for a certain pet

> **Requires:** EcoPets

## Overview

| Property | Value |
|----------|-------|
| Type ID | `give_pet_xp` |
| Module | libreforge |
| Category | Economy |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `amount` | The amount of xp to give |
| `pet` | The pet to give the xp for |

## Configuration Example

```yaml
- id: give_pet_xp
  args:
    amount: 100 # The amount of xp to give
    pet: ghost_wolf # The pet to give the xp for
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

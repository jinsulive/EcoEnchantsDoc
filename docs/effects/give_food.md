---
title: give_food
titleZh: give_food
category: effects
subcategory: healing
tags:
  - libreforge
outline: deep
---

# give_food <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Gives the player food

## Overview

| Property | Value |
|----------|-------|
| Type ID | `give_food` |
| Module | libreforge |
| Category | Healing |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `amount` | The amount of food to give/take (allows negative values) |

## Configuration Example

```yaml
- id: give_food
  args:
    amount: 2 # The amount of food to give/take (allows negative values)
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

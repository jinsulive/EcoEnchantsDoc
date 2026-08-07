---
title: set_food
titleZh: set_food
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# set_food <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Sets the player's food

## Overview

| Property | Value |
|----------|-------|
| Type ID | `set_food` |
| Module | libreforge |
| Category | Utility |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `amount` | The food level to set |

## Configuration Example

```yaml
- id: set_food
  args:
    amount: 1 # The food level to set
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

---
title: food_multiplier
titleZh: food_multiplier
category: effects
subcategory: healing
tags:
  - libreforge
outline: deep
---

# food_multiplier <Badge type="info" text="libreforge" /> <Badge type="warning" text="Permanent" />

> Multiplies food gain from eating

## Overview

| Property | Value |
|----------|-------|
| Type ID | `food_multiplier` |
| Module | libreforge |
| Category | Healing |
| Effect Type | Permanent |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `multiplier` | The multiplier for food gained by eating |

## Configuration Example

```yaml
- id: food_multiplier
  args:
    multiplier: 2 # The multiplier for food gained by eating
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

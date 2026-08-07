---
title: explosion_knockback_resistance_multiplier
titleZh: explosion_knockback_resistance_multiplier
category: effects
subcategory: combat
tags:
  - libreforge
outline: deep
---

# explosion_knockback_resistance_multiplier <Badge type="info" text="libreforge" /> <Badge type="warning" text="Permanent" />

> Multiplies explosion resistance

## Overview

| Property | Value |
|----------|-------|
| Type ID | `explosion_knockback_resistance_multiplier` |
| Module | libreforge |
| Category | Combat |
| Effect Type | Permanent |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `multiplier` | The multiplier for explosion knockback resistance |

## Configuration Example

```yaml
- id: explosion_knockback_resistance_multiplier
  args:
    multiplier: 2 # The multiplier for explosion knockback resistance
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

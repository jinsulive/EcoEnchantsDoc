---
title: knockback_resistance_multiplier
titleZh: knockback_resistance_multiplier
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# knockback_resistance_multiplier <Badge type="info" text="libreforge" /> <Badge type="warning" text="Permanent" />

> Multiplies knockback resistance

## Overview

| Property | Value |
|----------|-------|
| Type ID | `knockback_resistance_multiplier` |
| Module | libreforge |
| Category | Utility |
| Effect Type | Permanent |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `multiplier` | The multiplier for knockback resistance |

## Configuration Example

```yaml
- id: knockback_resistance_multiplier
  args:
    multiplier: 2 # The multiplier for knockback resistance
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

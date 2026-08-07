---
title: multiply_velocity
titleZh: multiply_velocity
category: effects
subcategory: movement
tags:
  - libreforge
outline: deep
---

# multiply_velocity <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Multiplies a players velocity

## Overview

| Property | Value |
|----------|-------|
| Type ID | `multiply_velocity` |
| Module | libreforge |
| Category | Movement |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `multiplier` | The multiplier |

## Configuration Example

```yaml
- id: multiply_velocity
  args:
    multiplier: 1.3 # The multiplier
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

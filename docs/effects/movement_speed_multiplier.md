---
title: movement_speed_multiplier
titleZh: movement_speed_multiplier
category: effects
subcategory: movement
tags:
  - libreforge
outline: deep
---

# movement_speed_multiplier <Badge type="info" text="libreforge" /> <Badge type="warning" text="Permanent" />

> Multiplies movement speed

## Overview

| Property | Value |
|----------|-------|
| Type ID | `movement_speed_multiplier` |
| Module | libreforge |
| Category | Movement |
| Effect Type | Permanent |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `multiplier` | The multiplier for movement speed |

## Configuration Example

```yaml
- id: movement_speed_multiplier
  args:
    multiplier: 1.5 # The multiplier for movement speed
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

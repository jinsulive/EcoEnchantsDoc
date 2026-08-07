---
title: water_movement_efficiency_multiplier
titleZh: water_movement_efficiency_multiplier
category: effects
subcategory: movement
tags:
  - libreforge
outline: deep
---

# water_movement_efficiency_multiplier <Badge type="info" text="libreforge" /> <Badge type="warning" text="Permanent" />

> Multiplies water movement efficiency

## Overview

| Property | Value |
|----------|-------|
| Type ID | `water_movement_efficiency_multiplier` |
| Module | libreforge |
| Category | Movement |
| Effect Type | Permanent |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `multiplier` | The multiplier for water movement efficiency |

## Configuration Example

```yaml
- id: water_movement_efficiency_multiplier
  args:
    multiplier: 2 # The multiplier for water movement efficiency
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

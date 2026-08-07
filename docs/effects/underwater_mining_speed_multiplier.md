---
title: underwater_mining_speed_multiplier
titleZh: underwater_mining_speed_multiplier
category: effects
subcategory: movement
tags:
  - libreforge
outline: deep
---

# underwater_mining_speed_multiplier <Badge type="info" text="libreforge" /> <Badge type="warning" text="Permanent" />

> Multiplies underwater mining speed

## Overview

| Property | Value |
|----------|-------|
| Type ID | `underwater_mining_speed_multiplier` |
| Module | libreforge |
| Category | Movement |
| Effect Type | Permanent |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `multiplier` | The multiplier for underwater mining speed |

## Configuration Example

```yaml
- id: underwater_mining_speed_multiplier
  args:
    multiplier: 2 # The multiplier for underwater mining speed
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

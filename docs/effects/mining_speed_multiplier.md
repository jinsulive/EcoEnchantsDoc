---
title: mining_speed_multiplier
titleZh: mining_speed_multiplier
category: effects
subcategory: movement
tags:
  - libreforge
outline: deep
---

# mining_speed_multiplier <Badge type="info" text="libreforge" /> <Badge type="warning" text="Permanent" />

> Multiplies mining speed

## Overview

| Property | Value |
|----------|-------|
| Type ID | `mining_speed_multiplier` |
| Module | libreforge |
| Category | Movement |
| Effect Type | Permanent |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `multiplier` | The multiplier for mining speed |

## Configuration Example

```yaml
- id: mining_speed_multiplier
  args:
    multiplier: 1.1 # The multiplier for mining speed
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

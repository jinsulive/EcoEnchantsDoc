---
title: attack_speed_multiplier
titleZh: attack_speed_multiplier
category: effects
subcategory: movement
tags:
  - libreforge
outline: deep
---

# attack_speed_multiplier <Badge type="info" text="libreforge" /> <Badge type="warning" text="Permanent" />

> Multiplies attack speed

## Overview

| Property | Value |
|----------|-------|
| Type ID | `attack_speed_multiplier` |
| Module | libreforge |
| Category | Movement |
| Effect Type | Permanent |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `multiplier` | The multiplier for the attack speed |

## Configuration Example

```yaml
- id: attack_speed_multiplier
  args:
    multiplier: 1.5 # The multiplier for the attack speed
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

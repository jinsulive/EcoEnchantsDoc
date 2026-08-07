---
title: sneaking_speed_multiplier
titleZh: sneaking_speed_multiplier
category: effects
subcategory: movement
tags:
  - libreforge
outline: deep
---

# sneaking_speed_multiplier <Badge type="info" text="libreforge" /> <Badge type="warning" text="Permanent" />

> Multiplies sneaking speed

## Overview

| Property | Value |
|----------|-------|
| Type ID | `sneaking_speed_multiplier` |
| Module | libreforge |
| Category | Movement |
| Effect Type | Permanent |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `multiplier` | The multiplier for sneaking speed |

## Configuration Example

```yaml
- id: sneaking_speed_multiplier
  args:
    multiplier: 2 # The multiplier for sneaking speed
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

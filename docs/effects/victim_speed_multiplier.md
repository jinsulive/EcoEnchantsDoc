---
title: victim_speed_multiplier
titleZh: victim_speed_multiplier
category: effects
subcategory: movement
tags:
  - libreforge
outline: deep
---

# victim_speed_multiplier <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Temporarily multiplies victim movement speed

## Overview

| Property | Value |
|----------|-------|
| Type ID | `victim_speed_multiplier` |
| Module | libreforge |
| Category | Movement |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `multiplier` | The multiplier for movement speed |
| `duration` | The duration (in ticks) |

## Configuration Example

```yaml
- id: victim_speed_multiplier
  args:
    multiplier: 1.5 # The multiplier for movement speed
    duration: 50 # The duration (in ticks)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

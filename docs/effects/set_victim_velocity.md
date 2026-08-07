---
title: set_victim_velocity
titleZh: set_victim_velocity
category: effects
subcategory: movement
tags:
  - libreforge
outline: deep
---

# set_victim_velocity <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Sets the victim's velocity

## Overview

| Property | Value |
|----------|-------|
| Type ID | `set_victim_velocity` |
| Module | libreforge |
| Category | Movement |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `x` | The x velocity |
| `y` | The y velocity |
| `z` | The z velocity |

## Configuration Example

```yaml
- id: set_victim_velocity
  args:
    x: 0.2
    y: 0.33
    z: -0.2
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

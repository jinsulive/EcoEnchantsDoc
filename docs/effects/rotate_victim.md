---
title: rotate_victim
titleZh: rotate_victim
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# rotate_victim <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Spin the victim around

## Overview

| Property | Value |
|----------|-------|
| Type ID | `rotate_victim` |
| Module | libreforge |
| Category | Utility |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `angle` | The angle to rotate / spin (in degrees) |

## Configuration Example

```yaml
- id: rotate_victim
  args:
    angle: 180 # The angle to rotate / spin (in degrees)
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

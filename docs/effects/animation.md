---
title: animation
titleZh: animation
category: effects
subcategory: visual
tags:
  - libreforge
outline: deep
---

# animation <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Plays an animation

## Overview

| Property | Value |
|----------|-------|
| Type ID | `animation` |
| Module | libreforge |
| Category | Visual |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `animation` | The ID of the animation |
| `animation_args` | Arguments for the animation |

## Configuration Example

```yaml
- id: animation
  args:
    animation: spin_item # The ID of the animation
    animation_args: # Arguments for the animation
      item: "ecoitems:hardened_diamond_sword finishing:5"
      amount: 4
      duration: 100
      radius: 2
      speed: 1
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

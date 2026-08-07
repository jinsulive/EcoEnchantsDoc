---
title: play_animation
titleZh: play_animation
category: effects
subcategory: visual
tags:
  - libreforge
outline: deep
---

# play_animation <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Plays a Model Engine animation (The entity must have a custom model active)

> **Requires:** Model Engine

## Overview

| Property | Value |
|----------|-------|
| Type ID | `play_animation` |
| Module | libreforge |
| Category | Visual |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `animation` | The name of the animation |

## Configuration Example

```yaml
- id: play_animation
  args:
    animation: strike # The name of the animation
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

---
title: frost_nova
titleZh: frost_nova
category: effects
subcategory: world
tags:
  - libreforge
outline: deep
---

# frost_nova <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Freezes and slows nearby entities in a radius

## Overview

| Property | Value |
|----------|-------|
| Type ID | `frost_nova` |
| Module | libreforge |
| Category | World |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `radius` | The radius in blocks |
| `freeze_ticks` | The number of ticks to freeze entities |
| `slow_duration` | The duration in ticks to apply slowness |
| `slow_amplifier` | The amplifier of the slowness effect |

## Configuration Example

```yaml
- id: frost_nova
  args:
    radius: 5 # The radius in blocks
    freeze_ticks: 60 # The number of ticks to freeze entities
    slow_duration: 100 # (Optional) The duration in ticks to apply slowness
    slow_amplifier: 1 # (Optional) The amplifier of the slowness effect
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

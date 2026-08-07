---
title: ignite
titleZh: ignite
category: effects
subcategory: combat
tags:
  - libreforge
outline: deep
---

# ignite <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Lights the victim on fire

## Overview

| Property | Value |
|----------|-------|
| Type ID | `ignite` |
| Module | libreforge |
| Category | Combat |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `damage_per_tick` | The amount of damage to deal per fire tick |
| `ticks` | The amount of time the victim should be on fire for |

## Configuration Example

```yaml
- id: ignite
  args:
    damage_per_tick: 8 # The amount of damage to deal per fire tick
    ticks: 100 # The amount of time the victim should be on fire for
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

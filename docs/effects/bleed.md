---
title: bleed
titleZh: bleed
category: effects
subcategory: combat
tags:
  - libreforge
outline: deep
---

# bleed <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Makes your victim bleed, damaging them repeatedly

## Overview

| Property | Value |
|----------|-------|
| Type ID | `bleed` |
| Module | libreforge |
| Category | Combat |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `damage` | The damage to deal on each bleed tick |
| `interval` | The delay between bleed ticks |
| `amount` | The amount of bleed ticks |

## Configuration Example

```yaml
- id: bleed
  args:
    damage: 5 # The damage to deal on each bleed tick
    interval: 15 # The delay between bleed ticks
    amount: 10 # The amount of bleed ticks
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

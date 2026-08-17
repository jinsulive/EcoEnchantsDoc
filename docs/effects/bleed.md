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

> Deals damage to the victim repeatedly over a set number of ticks.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `bleed` |
| Module | libreforge |
| Category | Combat |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `amount` | Expression | ✅ | — | — | The number of times damage is dealt. Supports expressions. Example: `3 + %level%` |
| `damage` | Expression | ✅ | — | — | The damage dealt per interval. Supports expressions. Example: `%level% * 0.5` |
| `interval` | Expression | ✅ | — | — | The number of ticks between each damage application. Supports expressions. |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectBleed.kt`).

- **Source Description**: Deals damage to the victim repeatedly over a set number of ticks.
- **Categories**: `combat`
- **Requires Trigger Data**: `VICTIM`

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

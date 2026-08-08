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

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `damage_per_tick` | Expression(数学表达式) | ✅ | — | — | The amount of damage to deal per fire tick \| Source: The amount of damage dealt per fire tick. Supports expressions. Example: `%level%` |
| `ticks` | Expression(数学表达式) | ✅ | — | — | The amount of time the victim should be on fire for \| Source: The number of fire ticks to apply to the victim. Supports expressions. Example: `20 * %level%` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectIgnite.kt`).

- **Source Description**: Sets the victim on fire for a specified number of ticks with custom damage per tick.
- **Categories**: `combat`
- **Requires Trigger Data**: `VICTIM`, `PLAYER`

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

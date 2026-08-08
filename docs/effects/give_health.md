---
title: give_health
titleZh: give_health
category: effects
subcategory: healing
tags:
  - libreforge
outline: deep
---

# give_health <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Gives the player health

## Overview

| Property | Value |
|----------|-------|
| Type ID | `give_health` |
| Module | libreforge |
| Category | Healing |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `amount` | Expression(数学表达式) | ✅ | — | — | The amount of health to give/take (allows negative values) \| Source: The amount of health points to restore. Supports expressions. Example: `%level% * 2` |
| `trigger_heal` | Boolean | — | `false` | — | Whether to trigger the heal event ("heal" trigger) \| Source: If true, fires an EntityRegainHealthEvent and respects cancellation (e.g. for Mending). Defaults to false. |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectGiveHealth.kt`).

- **Source Description**: Heals the player by the specified amount, capped at their maximum health.
- **Categories**: `player`
- **Requires Trigger Data**: `PLAYER`

## Configuration Example

```yaml
- id: give_health
  args:
    amount: 2 # The amount of health to give/take (allows negative values)
    trigger_heal: true # (Optional) Whether to trigger the heal event ("heal" trigger)
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

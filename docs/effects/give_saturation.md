---
title: give_saturation
titleZh: give_saturation
category: effects
subcategory: healing
tags:
  - libreforge
outline: deep
---

# give_saturation <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Gives the player saturation

## Overview

| Property | Value |
|----------|-------|
| Type ID | `give_saturation` |
| Module | libreforge |
| Category | Healing |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `amount` | Expression(数学表达式) | ✅ | — | — | The amount of saturation points to add (allows negative values). Supports expressions. Example: `%level%` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectGiveSaturation.kt`).

- **Source Description**: Restores a set amount of saturation to the player, capped at 20.
- **Categories**: `player`
- **Requires Trigger Data**: `PLAYER`

## Configuration Example

```yaml
- id: give_saturation
  args:
    amount: 1.0 # The amount of saturation to give/take (allows negative values)
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

---
title: give_price
titleZh: give_price
category: effects
subcategory: economy
tags:
  - libreforge
outline: deep
---

# give_price <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Pay a price to a player

## Overview

| Property | Value |
|----------|-------|
| Type ID | `give_price` |
| Module | libreforge |
| Category | Economy |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `value` | Expression(数学表达式) | ✅ | — | — | The amount to give, as an expression string (may reference placeholders). Example: `%level% * 100` |
| `type` | String | ✅ | — | — | The eco price type identifier (e.g. coins, xp, points:mytype). Example: `points:mytype` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectGivePrice.kt`).

- **Source Description**: Gives the player a reward using the eco Price system, supporting any registered price type.
- **Categories**: `economy`
- **Requires Trigger Data**: `PLAYER`

## Configuration Example

```yaml
- id: give_price
  args:
    value: 1000 # The value of the price
    type: coins # The price type
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

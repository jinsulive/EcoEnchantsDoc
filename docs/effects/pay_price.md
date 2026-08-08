---
title: pay_price
titleZh: pay_price
category: effects
subcategory: economy
tags:
  - libreforge
outline: deep
---

# pay_price <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Pay a price

## Overview

| Property | Value |
|----------|-------|
| Type ID | `pay_price` |
| Module | libreforge |
| Category | Economy |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `value` | String | ✅ | — | — | The value of the price \| Source: The amount to deduct from the player. Supports expressions and placeholders. Example: `%level% * 10` |
| `type` | String | ✅ | — | — | The price type \| Source: The price type identifier (e.g. coins, xp, xpl, item). Example: `coins` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectPayPrice.kt`).

- **Source Description**: Deducts a price of the specified type from the player.
- **Categories**: `economy`
- **Requires Trigger Data**: `PLAYER`

## Configuration Example

```yaml
- id: pay_price
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

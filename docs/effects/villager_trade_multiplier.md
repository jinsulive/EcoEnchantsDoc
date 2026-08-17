---
title: villager_trade_multiplier
titleZh: villager_trade_multiplier
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# villager_trade_multiplier <Badge type="info" text="libreforge" /> <Badge type="warning" text="Permanent" />

> Multiplies the ingredient costs of villager trades when the player opens a merchant.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `villager_trade_multiplier` |
| Module | libreforge |
| Category | Utility |
| Effect Type | Permanent |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `multiplier` | Expression | ✅ | — | — | The multiplier to apply. Supports expressions. Inherited from the `MultiplierEffect` abstract template. |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectVillagerTradeMultiplier.kt`).

- **Source Description**: Multiplies the ingredient costs of villager trades when the player opens a merchant.
- **Categories**: `economy`

## Configuration Example

```yaml
- id: villager_trade_multiplier
  args:
    multiplier: 0.5 # The multiplier for villager trade costs
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

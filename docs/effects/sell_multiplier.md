---
title: sell_multiplier
titleZh: sell_multiplier
category: effects
subcategory: economy
tags:
  - libreforge
outline: deep
---

# sell_multiplier <Badge type="info" text="libreforge" /> <Badge type="warning" text="Permanent" />

> Multiplies the sell price of items when the player sells through a shop.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `sell_multiplier` |
| Module | libreforge |
| Category | Economy |
| Effect Type | Permanent |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `multiplier` | Expression | ✅ | — | — | The multiplier to apply. Supports expressions. Inherited from the `MultiplierEffect` abstract template. |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectSellMultiplier.kt`).

- **Source Description**: Multiplies the sell price of items when the player sells through a shop.
- **Categories**: `economy`

## Configuration Example

```yaml
- id: sell_multiplier
  args:
    multiplier: 1.05 # The sell multiplier
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

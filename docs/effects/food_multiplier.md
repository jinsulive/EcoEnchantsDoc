---
title: food_multiplier
titleZh: food_multiplier
category: effects
subcategory: healing
tags:
  - libreforge
outline: deep
---

# food_multiplier <Badge type="info" text="libreforge" /> <Badge type="warning" text="Permanent" />

> Multiplies the amount of food level gained when the player eats.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `food_multiplier` |
| Module | libreforge |
| Category | Healing |
| Effect Type | Permanent |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `multiplier` | Expression | ✅ | — | — | The multiplier to apply. Supports expressions. Inherited from the `MultiplierEffect` abstract template. |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectFoodMultiplier.kt`).

- **Source Description**: Multiplies the amount of food level gained when the player eats.
- **Categories**: `player`

## Configuration Example

```yaml
- id: food_multiplier
  args:
    multiplier: 2 # The multiplier for food gained by eating
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

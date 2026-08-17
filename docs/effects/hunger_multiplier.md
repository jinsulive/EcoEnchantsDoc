---
title: hunger_multiplier
titleZh: hunger_multiplier
category: effects
subcategory: healing
tags:
  - libreforge
outline: deep
---

# hunger_multiplier <Badge type="info" text="libreforge" /> <Badge type="warning" text="Permanent" />

> Multiplies the rate at which the player loses hunger.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `hunger_multiplier` |
| Module | libreforge |
| Category | Healing |
| Effect Type | Permanent |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `multiplier` | Expression | ✅ | — | — | The multiplier to apply. Supports expressions. Inherited from the `MultiplierEffect` abstract template. |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectHungerMultiplier.kt`).

- **Source Description**: Multiplies the rate at which the player loses hunger.
- **Categories**: `player`

## Configuration Example

```yaml
- id: hunger_multiplier
  args:
    multiplier: 0.5 # The multiplier for hunger loss, smaller means slower loss
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

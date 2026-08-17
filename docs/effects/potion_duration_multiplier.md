---
title: potion_duration_multiplier
titleZh: potion_duration_multiplier
category: effects
subcategory: potion
tags:
  - libreforge
outline: deep
---

# potion_duration_multiplier <Badge type="info" text="libreforge" /> <Badge type="warning" text="Permanent" />

> Multiplies the duration of potion effects brewed or consumed by the player.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `potion_duration_multiplier` |
| Module | libreforge |
| Category | Potion |
| Effect Type | Permanent |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `multiplier` | Expression | ✅ | — | — | The multiplier to apply. Supports expressions. Inherited from the `MultiplierEffect` abstract template. |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectPotionDurationMultiplier.kt`).

- **Source Description**: Multiplies the duration of potion effects brewed or consumed by the player.
- **Categories**: `potion`, `player`

## Configuration Example

```yaml
- id: potion_duration_multiplier
  args:
    multiplier: 1.2 # The multiplier
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

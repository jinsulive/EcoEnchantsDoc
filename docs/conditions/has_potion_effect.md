---
title: has_potion_effect
titleZh: has_potion_effect
category: conditions
subcategory: items
tags:
  - libreforge
outline: deep
---

# has_potion_effect <Badge type="info" text="libreforge" />

> Passes when the entity has the specified potion effect active.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `has_potion_effect` |
| Module | libreforge |
| Category | Items & Equipment |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `effect` / `effects` (either) | Potion Effect List | ✅ | — | — | The potion effect(s) to check for. Example: `speed, strength` |
| `level` | Integer | — | `1` | — | The minimum amplifier level required (1-based). |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/conditions/impl/ConditionHasPotionEffect.kt`).

- **Source Description**: Passes when the entity has the specified potion effect active.
- **Categories**: `player`

## Configuration Example

```yaml
- id: has_potion_effect
  args:
    effect: blindness # The potion effect
    effects: # You can also specify a list of potion effects
      - haste
      - speed
      - blindness
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)

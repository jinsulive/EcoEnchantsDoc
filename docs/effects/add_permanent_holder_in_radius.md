---
title: add_permanent_holder_in_radius
titleZh: add_permanent_holder_in_radius
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# add_permanent_holder_in_radius <Badge type="info" text="libreforge" /> <Badge type="warning" text="Permanent" />

> Permanently applies a set of effects and conditions to all nearby entities within a radius while the holder is active.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `add_permanent_holder_in_radius` |
| Module | libreforge |
| Category | Utility |
| Effect Type | Permanent |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `effects` | Effect List | ✅ | — | — | The effects to apply to nearby entities. |
| `radius` | Expression | ✅ | — | — | The radius to apply effects within. Supports expressions. Example: `5 + %level% * 0.5` |
| `apply-to-self` | Boolean | — | `false` | — | Whether to also apply the effects to the holder owner. |
| `conditions` | Condition List | — | — | — | The conditions the holder requires to be active. |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectAddPermanentHolderInRadius.kt`).

- **Source Description**: Permanently applies a set of effects and conditions to all nearby entities within a radius while the holder is active.
- **Categories**: `meta`

## Configuration Example

```yaml
- id: add_permanent_holder_in_radius
  args:
    effects: 
      - id: multiply_all_stats
        args:
          multiplier: 1.05
    conditions: []
    radius: 5.3 # The radius, in blocks
    apply-to-self: false # If the player should also get the holder (Defaults to false)
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

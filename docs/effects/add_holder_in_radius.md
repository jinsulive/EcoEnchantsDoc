---
title: add_holder_in_radius
titleZh: add_holder_in_radius
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# add_holder_in_radius <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Temporarily applies a set of effects and conditions to all nearby entities within a radius.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `add_holder_in_radius` |
| Module | libreforge |
| Category | Utility |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `effects` | Effect List | ✅ | — | — | The effects to apply temporarily to nearby entities. |
| `duration` | Expression | ✅ | — | — | How long to apply the holder, in ticks. Supports expressions. Example: `20 * %level%` |
| `radius` | Expression | ✅ | — | — | The radius to apply effects within. Supports expressions. Example: `5 + %level% * 0.5` |
| `apply-to-self` | Boolean | — | `false` | — | Whether to also apply the effects to the dispatcher. |
| `conditions` | Condition List | — | — | — | The conditions the holder requires to be active. |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectAddHolderInRadius.kt`).

- **Source Description**: Temporarily applies a set of effects and conditions to all nearby entities within a radius.
- **Categories**: `meta`

## Configuration Example

```yaml
- id: add_holder_in_radius
  args:
    effects: 
      - id: movement_speed_multiplier
        args:
          multiplier: 1.25
    conditions: []
    duration: 300 # The duration, in ticks
    radius: 5.3 # The radius, in blocks
    apply-to-self: false # If the player should also get the holder (Defaults to false)
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

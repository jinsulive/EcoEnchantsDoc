---
title: add_holder_to_victim
titleZh: add_holder_to_victim
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# add_holder_to_victim <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Temporarily applies a set of effects and conditions to the victim for a given duration.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `add_holder_to_victim` |
| Module | libreforge |
| Category | Utility |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `effects` | Effect List | ✅ | — | — | The effects to apply temporarily to the victim. |
| `duration` | Expression | ✅ | — | — | How long to apply the holder, in ticks. Supports expressions. Example: `20 * %level%` |
| `conditions` | Condition List | — | — | — | The conditions the holder requires to be active. |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectAddHolderToVictim.kt`).

- **Source Description**: Temporarily applies a set of effects and conditions to the victim for a given duration.
- **Categories**: `meta`
- **Requires Trigger Data**: `VICTIM`

## Configuration Example

```yaml
- id: add_holder_to_victim
  args:
    effects: 
      - id: movement_speed_multiplier
        args:
          multiplier: 1.25
    conditions: []
    duration: 300 # The duration, in ticks
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

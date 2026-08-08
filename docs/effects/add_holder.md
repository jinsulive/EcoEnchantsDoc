---
title: add_holder
titleZh: add_holder
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# add_holder <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Gives a custom holder temporarily for a given period of time. A holder is anything with effects and conditions, in plugins typically a Talisman, Armor Set, etc. You can create custom holders temporarily and give them on a trigger, for example to give permanent effects for a period of time.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `add_holder` |
| Module | libreforge |
| Category | Utility |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `effects` | Effect List | ✅ | — | — | The effects to apply temporarily in the holder. |
| `conditions` | Condition List | — | — | — | The conditions the holder requires to be active. |
| `duration` | Expression(数学表达式) | ✅ | — | — | How long to apply the holder, in ticks. Supports expressions. Example: `20 * %level%` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectAddHolder.kt`).

- **Source Description**: Temporarily applies a set of effects and conditions to the dispatcher for a given duration.
- **Categories**: `meta`

## Configuration Example

```yaml
- id: add_holder
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

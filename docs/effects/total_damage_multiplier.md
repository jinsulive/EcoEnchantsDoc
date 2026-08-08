---
title: total_damage_multiplier
titleZh: total_damage_multiplier
category: effects
subcategory: combat
tags:
  - libreforge
outline: deep
---

# total_damage_multiplier <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Multiplies all incoming or outgoing damage from any damage trigger

## Overview

| Property | Value |
|----------|-------|
| Type ID | `total_damage_multiplier` |
| Module | libreforge |
| Category | Combat |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `multiplier` | Expression(数学表达式) | ✅ | — | — | The multiplier \| Source: The value to multiply the event's damage by. Supports expressions. Example: `1 + %level% * 0.05` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectTotalDamageMultiplier.kt`).

- **Source Description**: Multiplies the total damage of the triggering damage event by a given amount.
- **Categories**: `combat`
- **Requires Trigger Data**: `EVENT`

## Configuration Example

```yaml
- id: total_damage_multiplier
  args:
    multiplier: 0.5 # The multiplier
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

---
title: damage_armor
titleZh: damage_armor
category: effects
subcategory: combat
tags:
  - libreforge
outline: deep
---

# damage_armor <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Damage a victim's armor

## Overview

| Property | Value |
|----------|-------|
| Type ID | `damage_armor` |
| Module | libreforge |
| Category | Combat |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `damage` | Expression(数学表达式) | ✅ | — | — | The amount of damage to deal \| Source: The durability damage to apply to each armor piece. Supports expressions. Example: `10 + %level%` |
| `slots` | String List | — | — | `HEAD`, `CHEST`, `LEGS`, `FEET` | Which armor slots to damage. If omitted, all armor slots are damaged. |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectDamageArmor.kt`).

- **Source Description**: Applies durability damage to the victim's equipped armor.
- **Categories**: `combat`, `inventory`
- **Requires Trigger Data**: `VICTIM`

## Configuration Example

```yaml
- id: damage_armor
  args:
    damage: 1 # The amount of damage to deal
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

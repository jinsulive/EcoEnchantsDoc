---
title: damage_victim
titleZh: damage_victim
category: effects
subcategory: combat
tags:
  - libreforge
outline: deep
---

# damage_victim <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Damage the victim

## Overview

| Property | Value |
|----------|-------|
| Type ID | `damage_victim` |
| Module | libreforge |
| Category | Combat |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `damage` | Expression(数学表达式) | ✅ | — | — | The damage to deal \| Source: The amount of damage to deal. Supports expressions. Example: `%level% * 2` |
| `use-source` | Boolean | — | `false` | — | If the player should be marked as the damager, will trigger melee_damage and run listeners (set to false if you don't know what this means) \| Source: If true, the player is attributed as the damage source. |
| `true-damage` | Boolean | — | `false` | — | If the damage should ignore armor, defense, etc \| Source: If true, damage bypasses armor and resistance effects. |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectDamageVictim.kt`).

- **Source Description**: Deals damage to the victim.
- **Categories**: `combat`
- **Requires Trigger Data**: `VICTIM`

## Configuration Example

```yaml
- id: damage_victim
  args:
    damage: 10.4 # The damage to deal
    use-source: false # If the player should be marked as the damager, will trigger melee_damage and run listeners: set to false if you don't know what this means
    true-damage: true # (Optional) if the damage should ignore armor, defense, etc
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

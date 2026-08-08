---
title: add_damage
titleZh: add_damage
category: effects
subcategory: combat
tags:
  - libreforge
outline: deep
---

# add_damage <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Adds incoming or outgoing damage from any damage trigger

## Overview

| Property | Value |
|----------|-------|
| Type ID | `add_damage` |
| Module | libreforge |
| Category | Combat |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `damage` | Expression(数学表达式) | ✅ | — | — | The amount of extra damage to add (or subtract). Supports expressions. Example: `%victim_max_health% * 0.1` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectAddDamage.kt`).

- **Source Description**: Adds extra damage to the triggering attack.
- **Categories**: `combat`
- **Requires Trigger Data**: `EVENT`

## Configuration Example

```yaml
- id: add_damage
  args:
    damage: 2 # The damage to add (or subtract)
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

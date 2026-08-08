---
title: soul_rip
titleZh: soul_rip
category: effects
subcategory: combat
tags:
  - libreforge
outline: deep
---

# soul_rip <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Damages nearby entities and heals the player for the damage dealt

## Overview

| Property | Value |
|----------|-------|
| Type ID | `soul_rip` |
| Module | libreforge |
| Category | Combat |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `radius` | Expression(数学表达式) | ✅ | — | — | The radius in blocks to affect entities \| Source: The radius around the player to search for targets. Supports expressions. Example: `5 + %level% * 0.5` |
| `damage` | Expression(数学表达式) | ✅ | — | — | The damage dealt to each nearby entity \| Source: The amount of damage dealt to each nearby entity. Supports expressions. Example: `%level% * 2` |
| `heal_multiplier` | Expression(数学表达式) | — | `1.0` | — | (Optional) Multiplier applied to total healing, defaults to 1.0 \| Source: A multiplier applied to the total damage dealt before it is converted to healing. Example: `0.5 + %level% * 0.02` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectSoulRip.kt`).

- **Source Description**: Damages nearby enemies within a radius and heals the player based on the damage dealt.
- **Categories**: `combat`, `player`
- **Requires Trigger Data**: `PLAYER`

## Configuration Example

```yaml
- id: soul_rip
  args:
    radius: 5 # The radius in blocks to affect entities
    damage: 4.0 # The damage dealt to each nearby entity
    heal_multiplier: 1.0 # (Optional) Multiplier applied to total healing, defaults to 1.0
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

---
title: give_xp
titleZh: give_xp
category: effects
subcategory: economy
tags:
  - libreforge
outline: deep
---

# give_xp <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Gives experience points

## Overview

| Property | Value |
|----------|-------|
| Type ID | `give_xp` |
| Module | libreforge |
| Category | Economy |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `amount` | Expression(数学表达式) | ✅ | — | — | The amount of experience points to give the player. Supports expressions. Example: `%level% * 10` |
| `apply_mending` | Boolean | — | `true` | — | Whether to apply Mending repair before adding XP to the bar (Paper only). Defaults to true. |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectGiveXp.kt`).

- **Source Description**: Gives the player experience points when triggered, with optional Mending repair support.
- **Categories**: `economy`
- **Requires Trigger Data**: `PLAYER`

## Configuration Example

```yaml
- id: give_xp
  args:
    amount: 100 # The amount of xp to give
    apply_mending: true # PAPER ONLY - If mending should be applied from the xp
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

---
title: give_food
titleZh: give_food
category: effects
subcategory: healing
tags:
  - libreforge
outline: deep
---

# give_food <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Gives the player food

## Overview

| Property | Value |
|----------|-------|
| Type ID | `give_food` |
| Module | libreforge |
| Category | Healing |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `amount` | Expression(数学表达式) | ✅ | — | — | The number of food points to add to the player's hunger bar (allows negative values). Supports expressions. Example: `%level%` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectGiveFood.kt`).

- **Source Description**: Restores a set amount of food level to the player, capped at 20.
- **Categories**: `player`
- **Requires Trigger Data**: `PLAYER`

## Configuration Example

```yaml
- id: give_food
  args:
    amount: 2 # The amount of food to give/take (allows negative values)
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

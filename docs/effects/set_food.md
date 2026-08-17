---
title: set_food
titleZh: set_food
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# set_food <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Sets the player's food level to a specified value.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `set_food` |
| Module | libreforge |
| Category | Utility |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `amount` | Expression | ✅ | — | — | The food level to set (0–20). Supports expressions. |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectSetFood.kt`).

- **Source Description**: Sets the player's food level to a specified value.
- **Categories**: `player`
- **Requires Trigger Data**: `PLAYER`

## Configuration Example

```yaml
- id: set_food
  args:
    amount: 1 # The food level to set
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

---
title: set_points
titleZh: set_points
category: effects
subcategory: economy
tags:
  - libreforge
outline: deep
---

# set_points <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Set points (check the points wiki page if you don't know what these are)

## Overview

| Property | Value |
|----------|-------|
| Type ID | `set_points` |
| Module | libreforge |
| Category | Economy |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `type` | String | ✅ | — | — | The point type to set. |
| `amount` | Expression(数学表达式) | ✅ | — | — | The value to set the player's point counter to. Supports expressions. Example: `%level% * 10` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectSetPoints.kt`).

- **Source Description**: Sets a player's point counter to a specific value.
- **Categories**: `economy`, `points`
- **Requires Trigger Data**: `PLAYER`

## Configuration Example

```yaml
- id: set_points
  args:
    type: g_souls # The point to set
    amount: 0 # The amount to set it to
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

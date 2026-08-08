---
title: give_global_points
titleZh: give_global_points
category: effects
subcategory: economy
tags:
  - libreforge
outline: deep
---

# give_global_points <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Add / subtract global points (check the points wiki page if you don't know what these are)

## Overview

| Property | Value |
|----------|-------|
| Type ID | `give_global_points` |
| Module | libreforge |
| Category | Economy |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `type` | String | ✅ | — | — | The global point type to add to. |
| `amount` | Expression(数学表达式) | — | `0` | — | The amount of global points to add. Supports expressions. Defaults to 0. Example: `%level% * 10` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectGiveGlobalPoints.kt`).

- **Source Description**: Adds points to a global (server-wide) point counter when triggered.
- **Categories**: `economy`, `points`

## Configuration Example

```yaml
- id: give_global_points
  args:
    type: item_stock # The point to add/subtract
    amount: 1 # The amount to add/subtract
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

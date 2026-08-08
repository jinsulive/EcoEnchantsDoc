---
title: set_global_points
titleZh: set_global_points
category: effects
subcategory: economy
tags:
  - libreforge
outline: deep
---

# set_global_points <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Set global points (check the points wiki page if you don't know what these are)

## Overview

| Property | Value |
|----------|-------|
| Type ID | `set_global_points` |
| Module | libreforge |
| Category | Economy |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `type` | String | ✅ | — | — | The global point type to set. |
| `amount` | Expression(数学表达式) | ✅ | — | — | The value to set the global point counter to. Supports expressions. Example: `%level% * 10` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectSetGlobalPoints.kt`).

- **Source Description**: Sets a global point counter to a specific value.
- **Categories**: `economy`, `points`

## Configuration Example

```yaml
- id: set_global_points
  args:
    type: global_stock # The point to set
    amount: 0 # The amount to set it to
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

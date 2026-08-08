---
title: add_global_points
titleZh: add_global_points
category: effects
subcategory: economy
tags:
  - libreforge
outline: deep
---

# add_global_points <Badge type="info" text="libreforge" /> <Badge type="warning" text="Permanent" />

> Add / subtract global points (check the points wiki page if you don't know what these are)

## Overview

| Property | Value |
|----------|-------|
| Type ID | `add_global_points` |
| Module | libreforge |
| Category | Economy |
| Effect Type | Permanent |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `type` | String | ✅ | — | — | The global point type to add to. |
| `amount` | Expression(数学表达式) | ✅ | — | — | The amount of global points to add. Supports expressions. Example: `%level% * 10` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectAddGlobalPoints.kt`).

- **Source Description**: Permanently increases a global point counter while the holder is active.
- **Categories**: `economy`, `points`

## Configuration Example

```yaml
- id: add_global_points
  args:
    type: g_souls # The point to add/subtract
    amount: 1 # The amount to add/subtract
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

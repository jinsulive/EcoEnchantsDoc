---
title: add_points
titleZh: add_points
category: effects
subcategory: economy
tags:
  - libreforge
outline: deep
---

# add_points <Badge type="info" text="libreforge" /> <Badge type="info" text="Permanent" />

> Permanently increases a player's point counter while the holder is active.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `add_points` |
| Module | libreforge |
| Category | Economy |
| Effect Type | Permanent |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `type` | String | ✅ | — | — | The player point type to add to. |
| `amount` | Expression | ✅ | — | — | The amount of points to add. Supports expressions. Example: `%level% * 5` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectAddPoints.kt`).

- **Source Description**: Permanently increases a player's point counter while the holder is active.
- **Categories**: `economy`, `points`

## Configuration Example

```yaml
- id: add_points
  args:
    type: g_souls # The point to add/subtract
    amount: 1 # The amount to add/subtract
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

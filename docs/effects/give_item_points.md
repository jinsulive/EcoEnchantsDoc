---
title: give_item_points
titleZh: give_item_points
category: effects
subcategory: economy
tags:
  - libreforge
outline: deep
---

# give_item_points <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Adds points to a specific point type on the triggering item.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `give_item_points` |
| Module | libreforge |
| Category | Economy |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `type` | String | ✅ | — | — | The item point type to add to. |
| `amount` | Expression | ✅ | — | — | The amount of points to add to the item. Supports expressions. Example: `%level% * 5` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectGiveItemPoints.kt`).

- **Source Description**: Adds points to a specific point type on the triggering item.
- **Categories**: `economy`, `points`

## Configuration Example

```yaml
- id: give_item_points
  args:
    type: point_name # The point to add/subtract
    amount: 1 # The amount to add/subtract
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

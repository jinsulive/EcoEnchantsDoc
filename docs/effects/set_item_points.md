---
title: set_item_points
titleZh: set_item_points
category: effects
subcategory: economy
tags:
  - libreforge
outline: deep
---

# set_item_points <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Sets a point value on the trigger item to a specific amount.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `set_item_points` |
| Module | libreforge |
| Category | Economy |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `type` | String | ✅ | — | — | The item point type to set. |
| `amount` | Expression | ✅ | — | — | The value to set the item point counter to. Supports expressions. Example: `%level% * 10` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectSetItemPoints.kt`).

- **Source Description**: Sets a point value on the trigger item to a specific amount.
- **Categories**: `economy`, `points`
- **Requires Trigger Data**: `ITEM`

## Configuration Example

```yaml
- id: set_item_points
  args:
    type: blocks_broken # The point to set
    amount: 0 # The amount to set it to
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

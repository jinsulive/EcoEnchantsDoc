---
title: item_points_below
titleZh: item_points_below
category: conditions
subcategory: economy
tags:
  - libreforge
outline: deep
---

# item_points_below <Badge type="info" text="libreforge" />

> Passes when the held item's points of a given type are at or below the specified amount.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `item_points_below` |
| Module | libreforge |
| Category | Economy & Points |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `type` | String | ✅ | — | — | The points type to read from the held item. |
| `amount` | Expression | ✅ | — | — | The maximum number of points the item may have. Example: `%level% * 10` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/conditions/impl/ConditionItemPointsBelow.kt`).

- **Source Description**: Passes when the held item's points of a given type are at or below the specified amount.
- **Categories**: `inventory`

## Configuration Example

```yaml
- id: item_points_below
  args:
    type: point_name # The type of point
    amount: 10 # The maximum amount of points
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)

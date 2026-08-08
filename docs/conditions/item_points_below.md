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

> Requires an item to have below a certain amount of points (check the points wiki page if you don't know what these are)

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
| `type` | String | ✅ | — | — | The type of point \| Source: The points type to read from the held item. |
| `amount` | Expression(数学表达式) | ✅ | — | — | The maximum amount of points \| Source: The maximum number of points the item may have. Example: `%level% * 10` |

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

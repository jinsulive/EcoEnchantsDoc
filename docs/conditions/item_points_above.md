---
title: item_points_above
titleZh: item_points_above
category: conditions
subcategory: economy
tags:
  - libreforge
outline: deep
---

# item_points_above <Badge type="info" text="libreforge" />

> Passes when the held item's points of a given type are at or above the specified amount.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `item_points_above` |
| Module | libreforge |
| Category | Economy & Points |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `type` | String | ✅ | — | — | The points type to read from the held item. |
| `amount` | Expression | ✅ | — | — | The minimum number of points the item must have. Example: `%level% * 10` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/conditions/impl/ConditionItemPointsAbove.kt`).

- **Source Description**: Passes when the held item's points of a given type are at or above the specified amount.
- **Categories**: `inventory`

## Configuration Example

```yaml
- id: item_points_above
  args:
    type: point_name # The type of point
    amount: 10 # The minimum amount of points
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)

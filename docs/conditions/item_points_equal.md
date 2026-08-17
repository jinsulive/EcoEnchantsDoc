---
title: item_points_equal
titleZh: item_points_equal
category: conditions
subcategory: economy
tags:
  - libreforge
outline: deep
---

# item_points_equal <Badge type="info" text="libreforge" />

> Passes when the held item's points of a given type exactly equal the specified amount.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `item_points_equal` |
| Module | libreforge |
| Category | Economy & Points |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `type` | String | ✅ | — | — | The points type to read from the held item. |
| `amount` | Expression | ✅ | — | — | The exact number of points the item must have. Example: `%level% * 10` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/conditions/impl/ConditionItemPointsEqual.kt`).

- **Source Description**: Passes when the held item's points of a given type exactly equal the specified amount.
- **Categories**: `inventory`

## Configuration Example

```yaml
- id: item_points_equal
  args:
    type: point_name # The type of point
    amount: 10 # The amount of points to equal
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)

---
title: global_points_equal
titleZh: global_points_equal
category: conditions
subcategory: economy
tags:
  - libreforge
outline: deep
---

# global_points_equal <Badge type="info" text="libreforge" />

> Requires the server to have a exactly a certain amount of points (check the points wiki page if you don't know what these are)

## Overview

| Property | Value |
|----------|-------|
| Type ID | `global_points_equal` |
| Module | libreforge |
| Category | Economy & Points |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `type` | String | ✅ | — | — | The type of point \| Source: The global points type identifier. |
| `amount` | Expression(数学表达式) | ✅ | — | — | The amount of points \| Source: The exact global points value required. Example: `%level% * 10` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/conditions/impl/ConditionGlobalPointsEqual.kt`).

- **Source Description**: Passes when the global points of the given type exactly equal the specified amount.
- **Categories**: `economy`

## Configuration Example

```yaml
- id: global_points_equal
  args:
    type: g_souls # The type of point
    amount: 10 # The amount of points
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)

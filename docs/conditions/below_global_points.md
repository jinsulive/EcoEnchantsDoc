---
title: below_global_points
titleZh: below_global_points
category: conditions
subcategory: economy
tags:
  - libreforge
outline: deep
---

# below_global_points <Badge type="info" text="libreforge" />

> Requires the server to have a below an amount of points

## Overview

| Property | Value |
|----------|-------|
| Type ID | `below_global_points` |
| Module | libreforge |
| Category | Economy & Points |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `type` | String | ✅ | — | — | The global points type identifier. |
| `amount` | Expression(数学表达式) | ✅ | — | — | The global points threshold; the value must be below this amount. Example: `%level% * 10` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/conditions/impl/ConditionBelowGlobalPoints.kt`).

- **Source Description**: Passes when the global points of the given type are below the specified amount.
- **Categories**: `economy`

## Configuration Example

```yaml
- id: below_global_points
  args:
    type: item_stock # The type of point
    amount: 10 # The maximum amount of points
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)

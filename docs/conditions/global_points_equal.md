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

> Passes when the global points of the given type exactly equal the specified amount.

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
| `type` | String | ✅ | — | — | The global points type identifier. |
| `amount` | Expression | ✅ | — | — | The exact global points value required. Example: `%level% * 10` |

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

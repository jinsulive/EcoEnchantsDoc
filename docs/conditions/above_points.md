---
title: above_points
titleZh: above_points
category: conditions
subcategory: economy
tags:
  - libreforge
outline: deep
---

# above_points <Badge type="info" text="libreforge" />

> Passes when the player's points of the given type are at or above the minimum.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `above_points` |
| Module | libreforge |
| Category | Economy & Points |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `type` | String | ✅ | — | — | The points type identifier. |
| `amount` | Expression | ✅ | — | — | The minimum number of points required. Example: `%level% * 10` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/conditions/impl/ConditionAbovePoints.kt`).

- **Source Description**: Passes when the player's points of the given type are at or above the minimum.
- **Categories**: `economy`

## Configuration Example

```yaml
- id: above_points
  args:
    type: g_souls # The type of point
    amount: 10 # The minimum amount of points
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)

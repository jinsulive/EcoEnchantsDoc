---
title: below_points
titleZh: below_points
category: conditions
subcategory: economy
tags:
  - libreforge
outline: deep
---

# below_points <Badge type="info" text="libreforge" />

> Requires a player to have a below amount of points (check the points wiki page if you don't know what these are)

## Overview

| Property | Value |
|----------|-------|
| Type ID | `below_points` |
| Module | libreforge |
| Category | Economy & Points |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `type` | String | ✅ | — | — | The type of point \| Source: The points type identifier. |
| `amount` | Expression(数学表达式) | ✅ | — | — | The maximum amount of points \| Source: The points threshold; the player must be below this amount. Example: `%level% * 10` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/conditions/impl/ConditionBelowPoints.kt`).

- **Source Description**: Passes when the player's points of the given type are below the specified amount.
- **Categories**: `economy`

## Configuration Example

```yaml
- id: below_points
  args:
    type: g_souls # The type of point
    amount: 10 # The maximum amount of points
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)

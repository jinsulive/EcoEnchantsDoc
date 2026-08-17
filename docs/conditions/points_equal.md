---
title: points_equal
titleZh: points_equal
category: conditions
subcategory: economy
tags:
  - libreforge
outline: deep
---

# points_equal <Badge type="info" text="libreforge" />

> Passes when the player's points of the specified type exactly equal the given amount.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `points_equal` |
| Module | libreforge |
| Category | Economy & Points |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `type` | String | ✅ | — | — | The points type identifier to check. |
| `amount` | Expression | ✅ | — | — | The exact points amount the player must have. Example: `%level% * 10` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/conditions/impl/ConditionPointsEqual.kt`).

- **Source Description**: Passes when the player's points of the specified type exactly equal the given amount.
- **Categories**: `economy`

## Configuration Example

```yaml
- id: points_equal
  args:
    type: g_souls # The type of point
    amount: 10 # The amount of points
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)

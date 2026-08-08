---
title: above_y
titleZh: above_y
category: conditions
subcategory: position
tags:
  - libreforge
outline: deep
---

# above_y <Badge type="info" text="libreforge" />

> Requires a player to be above a certain y level

## Overview

| Property | Value |
|----------|-------|
| Type ID | `above_y` |
| Module | libreforge |
| Category | Position & Movement |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `y` | Expression(数学表达式) | ✅ | — | — | The minimum Y coordinate. |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/conditions/impl/ConditionAboveY.kt`).

- **Source Description**: Passes when the entity's Y coordinate is at or above the specified value.
- **Categories**: `world`

## Configuration Example

```yaml
- id: above_y
  args:
    y: 64
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)

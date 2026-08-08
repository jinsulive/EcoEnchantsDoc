---
title: below_y
titleZh: below_y
category: conditions
subcategory: position
tags:
  - libreforge
outline: deep
---

# below_y <Badge type="info" text="libreforge" />

> Requires a player to be below a certain y level

## Overview

| Property | Value |
|----------|-------|
| Type ID | `below_y` |
| Module | libreforge |
| Category | Position & Movement |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `y` | Expression(数学表达式) | ✅ | — | — | The Y coordinate threshold; the entity must be below this value. |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/conditions/impl/ConditionBelowY.kt`).

- **Source Description**: Passes when the entity's Y coordinate is below the specified value.
- **Categories**: `world`

## Configuration Example

```yaml
- id: below_y
  args:
    y: 64
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)

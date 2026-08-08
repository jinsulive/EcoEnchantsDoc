---
title: light_level_below
titleZh: light_level_below
category: conditions
subcategory: world
tags:
  - libreforge
outline: deep
---

# light_level_below <Badge type="info" text="libreforge" />

> Requires the light level to be less than or equal to certain level

## Overview

| Property | Value |
|----------|-------|
| Type ID | `light_level_below` |
| Module | libreforge |
| Category | World & Environment |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `level` | Integer | ✅ | — | — | The maximum light level (0–15) allowed at the location. |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/conditions/impl/ConditionLightLevelBelow.kt`).

- **Source Description**: Passes when the light level at the dispatcher's location is at or below the specified value.
- **Categories**: `world`

## Configuration Example

```yaml
- id: light_level_below
  args:
    level: 7 # The level
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)

---
title: within_radius_of
titleZh: within_radius_of
category: conditions
subcategory: position
tags:
  - libreforge
outline: deep
---

# within_radius_of <Badge type="info" text="libreforge" />

> Passes when the entity is within the specified radius of a given coordinate.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `within_radius_of` |
| Module | libreforge |
| Category | Position & Movement |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `x` | Expression | ✅ | — | — | The X coordinate of the target location. |
| `y` | Expression | ✅ | — | — | The Y coordinate of the target location. |
| `z` | Expression | ✅ | — | — | The Z coordinate of the target location. |
| `radius` | Expression | ✅ | — | — | The maximum distance from the target location. Example: `15 + %level% * 0.5` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/conditions/impl/ConditionWithinRadiusOf.kt`).

- **Source Description**: Passes when the entity is within the specified radius of a given coordinate.
- **Categories**: `world`

## Configuration Example

```yaml
- id: within_radius_of
  args:
    x: 100 # The x coordinate
    y: 100 # The y coordinate
    z: 100 # The z coordinate
    radius: 25 # The radius
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)

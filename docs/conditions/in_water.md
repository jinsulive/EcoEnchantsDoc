---
title: in_water
titleZh: in_water
category: conditions
subcategory: world
tags:
  - libreforge
outline: deep
---

# in_water <Badge type="info" text="libreforge" />

> Requires a player to be in water

## Overview

| Property | Value |
|----------|-------|
| Type ID | `in_water` |
| Module | libreforge |
| Category | World & Environment |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/conditions/impl/ConditionInWater.kt`).

- **Source Description**: Passes when the entity is in contact with water.
- **Categories**: `player`, `world`

## Configuration Example

```yaml
- id: in_water
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)

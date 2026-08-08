---
title: is_night
titleZh: is_night
category: conditions
subcategory: world
tags:
  - libreforge
outline: deep
---

# is_night <Badge type="info" text="libreforge" />

> Requires night

## Overview

| Property | Value |
|----------|-------|
| Type ID | `is_night` |
| Module | libreforge |
| Category | World & Environment |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/conditions/impl/ConditionIsNight.kt`).

- **Source Description**: Passes when it is nighttime in the dispatcher's world.
- **Categories**: `world`

## Configuration Example

```yaml
- id: is_night
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)

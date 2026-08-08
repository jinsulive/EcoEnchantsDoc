---
title: in_world
titleZh: in_world
category: conditions
subcategory: world
tags:
  - libreforge
outline: deep
---

# in_world <Badge type="info" text="libreforge" />

> Requires a player to be in a certain world

## Overview

| Property | Value |
|----------|-------|
| Type ID | `in_world` |
| Module | libreforge |
| Category | World & Environment |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `world` | String | ✅ | — | — | The world name \| Source: The name of the world to check against. |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/conditions/impl/ConditionInWorld.kt`).

- **Source Description**: Passes when the dispatcher is located in the specified world.
- **Categories**: `world`

## Configuration Example

```yaml
- id: in_world
  args:
    world: the_end # The world name
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)

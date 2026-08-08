---
title: is_swimming
titleZh: is_swimming
category: conditions
subcategory: player_state
tags:
  - libreforge
outline: deep
---

# is_swimming <Badge type="info" text="libreforge" />

> Requires a player to be swimming

## Overview

| Property | Value |
|----------|-------|
| Type ID | `is_swimming` |
| Module | libreforge |
| Category | Player State |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/conditions/impl/ConditionIsSwimming.kt`).

- **Source Description**: Passes when the entity is actively in the swimming animation.
- **Categories**: `player`

## Configuration Example

```yaml
- id: is_swimming
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)

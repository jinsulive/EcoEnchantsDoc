---
title: is_sprinting
titleZh: is_sprinting
category: conditions
subcategory: player_state
tags:
  - libreforge
outline: deep
---

# is_sprinting <Badge type="info" text="libreforge" />

> Requires a player to be sprinting

## Overview

| Property | Value |
|----------|-------|
| Type ID | `is_sprinting` |
| Module | libreforge |
| Category | Player State |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/conditions/impl/ConditionIsSprinting.kt`).

- **Source Description**: Passes when the player is sprinting.
- **Categories**: `player`

## Configuration Example

```yaml
- id: is_sprinting
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)

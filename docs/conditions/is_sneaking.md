---
title: is_sneaking
titleZh: is_sneaking
category: conditions
subcategory: player_state
tags:
  - libreforge
outline: deep
---

# is_sneaking <Badge type="info" text="libreforge" />

> Requires a player to be sneaking

## Overview

| Property | Value |
|----------|-------|
| Type ID | `is_sneaking` |
| Module | libreforge |
| Category | Player State |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/conditions/impl/ConditionIsSneaking.kt`).

- **Source Description**: Passes when the player is sneaking.
- **Categories**: `player`

## Configuration Example

```yaml
- id: is_sneaking
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)

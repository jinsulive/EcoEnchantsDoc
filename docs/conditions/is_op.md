---
title: is_op
titleZh: is_op
category: conditions
subcategory: player_state
tags:
  - libreforge
outline: deep
---

# is_op <Badge type="info" text="libreforge" />

> Requires a player to be an operator

## Overview

| Property | Value |
|----------|-------|
| Type ID | `is_op` |
| Module | libreforge |
| Category | Player State |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/conditions/impl/ConditionIsOp.kt`).

- **Source Description**: Passes when the player has operator status on the server.
- **Categories**: `permission`

## Configuration Example

```yaml
- id: is_op
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)

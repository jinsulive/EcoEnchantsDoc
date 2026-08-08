---
title: is_alive
titleZh: is_alive
category: conditions
subcategory: player_state
tags:
  - libreforge
outline: deep
---

# is_alive <Badge type="info" text="libreforge" />

> Requires the player to be alive

## Overview

| Property | Value |
|----------|-------|
| Type ID | `is_alive` |
| Module | libreforge |
| Category | Player State |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/conditions/impl/ConditionIsAlive.kt`).

- **Source Description**: Passes when the entity is alive.
- **Categories**: `entity`

## Configuration Example

```yaml
- id: is_alive
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)

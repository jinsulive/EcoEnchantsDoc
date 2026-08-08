---
title: on_fire
titleZh: on_fire
category: conditions
subcategory: player_state
tags:
  - libreforge
outline: deep
---

# on_fire <Badge type="info" text="libreforge" />

> Requires a player to be on fire

## Overview

| Property | Value |
|----------|-------|
| Type ID | `on_fire` |
| Module | libreforge |
| Category | Player State |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/conditions/impl/ConditionOnFire.kt`).

- **Source Description**: Passes when the entity is currently on fire.
- **Categories**: `player`, `combat`

## Configuration Example

```yaml
- id: on_fire
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)

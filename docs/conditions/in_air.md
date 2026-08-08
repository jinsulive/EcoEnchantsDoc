---
title: in_air
titleZh: in_air
category: conditions
subcategory: player_state
tags:
  - libreforge
outline: deep
---

# in_air <Badge type="info" text="libreforge" />

> Requires a player to be in the air

## Overview

| Property | Value |
|----------|-------|
| Type ID | `in_air` |
| Module | libreforge |
| Category | Player State |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/conditions/impl/ConditionInAir.kt`).

- **Source Description**: Passes when the entity has no solid block directly below them.
- **Categories**: `player`

## Configuration Example

```yaml
- id: in_air
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)

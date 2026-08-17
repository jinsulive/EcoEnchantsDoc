---
title: on_ground
titleZh: on_ground
category: conditions
subcategory: player_state
tags:
  - libreforge
outline: deep
---

# on_ground <Badge type="info" text="libreforge" />

> Passes when the entity is standing on solid ground.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `on_ground` |
| Module | libreforge |
| Category | Player State |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| — | — | — | — | — | This component takes no parameters. |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/conditions/impl/ConditionOnGround.kt`).

- **Source Description**: Passes when the entity is standing on solid ground.
- **Categories**: `player`

## Configuration Example

```yaml
- id: on_ground
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)

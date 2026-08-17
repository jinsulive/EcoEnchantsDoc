---
title: is_flying
titleZh: is_flying
category: conditions
subcategory: player_state
tags:
  - libreforge
outline: deep
---

# is_flying <Badge type="info" text="libreforge" />

> Passes when the player is flying.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `is_flying` |
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

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/conditions/impl/ConditionIsFlying.kt`).

- **Source Description**: Passes when the player is flying.
- **Categories**: `player`

## Configuration Example

```yaml
- id: is_flying
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)

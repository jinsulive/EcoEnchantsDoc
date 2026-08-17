---
title: is_falling
titleZh: is_falling
category: conditions
subcategory: player_state
tags:
  - libreforge
outline: deep
---

# is_falling <Badge type="info" text="libreforge" />

> Passes when the entity has a significant downward velocity, indicating it is falling.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `is_falling` |
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

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/conditions/impl/ConditionIsFalling.kt`).

- **Source Description**: Passes when the entity has a significant downward velocity, indicating it is falling.
- **Categories**: `player`

## Configuration Example

```yaml
- id: is_falling
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)

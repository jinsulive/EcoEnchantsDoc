---
title: is_frozen
titleZh: is_frozen
category: conditions
subcategory: player_state
tags:
  - libreforge
outline: deep
---

# is_frozen <Badge type="info" text="libreforge" />

> Passes when the entity is fully frozen from standing in powdered snow.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `is_frozen` |
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

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/conditions/impl/ConditionIsFrozen.kt`).

- **Source Description**: Passes when the entity is fully frozen from standing in powdered snow.
- **Categories**: `player`

## Configuration Example

```yaml
- id: is_frozen
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)

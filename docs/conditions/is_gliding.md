---
title: is_gliding
titleZh: is_gliding
category: conditions
subcategory: player_state
tags:
  - libreforge
outline: deep
---

# is_gliding <Badge type="info" text="libreforge" />

> Passes when the entity is gliding with an elytra.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `is_gliding` |
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

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/conditions/impl/ConditionIsGliding.kt`).

- **Source Description**: Passes when the entity is gliding with an elytra.
- **Categories**: `player`

## Configuration Example

```yaml
- id: is_gliding
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)

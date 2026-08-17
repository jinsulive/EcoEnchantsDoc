---
title: is_storm
titleZh: is_storm
category: conditions
subcategory: world
tags:
  - libreforge
outline: deep
---

# is_storm <Badge type="info" text="libreforge" />

> Passes when the world is experiencing a storm.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `is_storm` |
| Module | libreforge |
| Category | World & Environment |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| — | — | — | — | — | This component takes no parameters. |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/conditions/impl/ConditionIsStorm.kt`).

- **Source Description**: Passes when the world is experiencing a storm.
- **Categories**: `world`

## Configuration Example

```yaml
- id: is_storm
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)

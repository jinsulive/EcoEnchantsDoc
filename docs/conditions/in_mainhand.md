---
title: in_mainhand
titleZh: in_mainhand
category: conditions
subcategory: items
tags:
  - libreforge
outline: deep
---

# in_mainhand <Badge type="info" text="libreforge" />

> Requires a player to have an item in their main hand

## Overview

| Property | Value |
|----------|-------|
| Type ID | `in_mainhand` |
| Module | libreforge |
| Category | Items & Equipment |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `items` | Custom | — | — | — | The list of allowed items |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/conditions/impl/ConditionInMainhand.kt`).

- **Source Description**: Passes when the entity is holding a matching item in their main hand.
- **Categories**: `inventory`

## Configuration Example

```yaml
- id: in_mainhand
  args:
    items: # The list of allowed items
      - diamond_sword sharpness:4
      - netherite_sword sharpness:3
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)

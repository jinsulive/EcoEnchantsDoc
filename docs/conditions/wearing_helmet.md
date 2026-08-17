---
title: wearing_helmet
titleZh: wearing_helmet
category: conditions
subcategory: items
tags:
  - libreforge
outline: deep
---

# wearing_helmet <Badge type="info" text="libreforge" />

> Passes when the entity is wearing the specified helmet.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `wearing_helmet` |
| Module | libreforge |
| Category | Items & Equipment |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `items` / `item` (either) | Item List | ✅ | — | — | The item(s) to check for. Inherited from the `ItemCondition` abstract template. |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/conditions/impl/ConditionWearingHelmet.kt`).

- **Source Description**: Passes when the entity is wearing the specified helmet.
- **Categories**: `inventory`

## Configuration Example

```yaml
- id: wearing_helmet
  args:
    items: # The list of allowed items
      - diamond_helmet protection:4
      - netherite_helmet protection:3
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)

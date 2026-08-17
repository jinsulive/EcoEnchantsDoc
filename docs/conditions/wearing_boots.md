---
title: wearing_boots
titleZh: wearing_boots
category: conditions
subcategory: items
tags:
  - libreforge
outline: deep
---

# wearing_boots <Badge type="info" text="libreforge" />

> Passes when the entity is wearing the specified boots.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `wearing_boots` |
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

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/conditions/impl/ConditionWearingBoots.kt`).

- **Source Description**: Passes when the entity is wearing the specified boots.
- **Categories**: `inventory`

## Configuration Example

```yaml
- id: wearing_boots
  args:
    items: # The list of allowed items
      - diamond_boots protection:4
      - netherite_boots protection:3
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)

---
title: in_offhand
titleZh: in_offhand
category: conditions
subcategory: items
tags:
  - libreforge
outline: deep
---

# in_offhand <Badge type="info" text="libreforge" />

> Passes when the entity is holding a matching item in their off hand.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `in_offhand` |
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

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/conditions/impl/ConditionInOffhand.kt`).

- **Source Description**: Passes when the entity is holding a matching item in their off hand.
- **Categories**: `inventory`

## Configuration Example

```yaml
- id: in_offhand
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

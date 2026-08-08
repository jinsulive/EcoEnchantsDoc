---
title: item_level_below
titleZh: item_level_below
category: conditions
subcategory: items
tags:
  - libreforge
outline: deep
---

# item_level_below <Badge type="info" text="libreforge" />

> Requires an item to be below a certain level

## Overview

| Property | Value |
|----------|-------|
| Type ID | `item_level_below` |
| Module | libreforge |
| Category | Items & Equipment |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `id` | String | ✅ | — | — | The level ID \| Source: The ID of the level type to check on the held item. |
| `level` | Expression(数学表达式) | ✅ | — | — | The maximum level \| Source: The maximum level the item must be below. Example: `5 + %level%` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/conditions/impl/ConditionItemLevelBelow.kt`).

- **Source Description**: Passes when the held item's level for a given level type is below the specified value.
- **Categories**: `inventory`

## Configuration Example

```yaml
- id: item_level_below
  args:
    id: mining_progress # The level ID
    level: 5 # The maximum level
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)

---
title: item_level_above
titleZh: item_level_above
category: conditions
subcategory: items
tags:
  - libreforge
outline: deep
---

# item_level_above <Badge type="info" text="libreforge" />

> Requires an item to be above a certain level

## Overview

| Property | Value |
|----------|-------|
| Type ID | `item_level_above` |
| Module | libreforge |
| Category | Items & Equipment |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `id` | String | ✅ | — | — | The level ID \| Source: The ID of the level type to check on the held item. |
| `level` | Expression(数学表达式) | ✅ | — | — | The minimum level \| Source: The minimum level the item must exceed. Example: `5 + %level%` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/conditions/impl/ConditionItemLevelAbove.kt`).

- **Source Description**: Passes when the held item's level for a given level type is above the specified value.
- **Categories**: `inventory`

## Configuration Example

```yaml
- id: item_level_above
  args:
    id: mining_progress # The level ID
    level: 2 # The minimum level
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)

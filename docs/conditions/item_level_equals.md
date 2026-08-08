---
title: item_level_equals
titleZh: item_level_equals
category: conditions
subcategory: items
tags:
  - libreforge
outline: deep
---

# item_level_equals <Badge type="info" text="libreforge" />

> Requires an item to be on a certain level

## Overview

| Property | Value |
|----------|-------|
| Type ID | `item_level_equals` |
| Module | libreforge |
| Category | Items & Equipment |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `id` | Custom | — | — | — | The level ID |
| `level` | Expression(数学表达式) | ✅ | — | — | The exact level the item must have. Example: `5 + %level%` |
| `name` | String | ✅ | — | — | The name of the level type to check on the held item. |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/conditions/impl/ConditionItemLevelEquals.kt`).

- **Source Description**: Passes when the held item's level for a given level type equals the specified value.
- **Categories**: `inventory`

## Configuration Example

```yaml
- id: item_level_equals
  args:
    id: mining_progress # The level ID
    level: 3 # The level
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)

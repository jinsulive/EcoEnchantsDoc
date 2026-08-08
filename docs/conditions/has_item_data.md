---
title: has_item_data
titleZh: has_item_data
category: conditions
subcategory: player_state
tags:
  - libreforge
outline: deep
---

# has_item_data <Badge type="info" text="libreforge" />

> Requires an item to have a certain data value present on it

## Overview

| Property | Value |
|----------|-------|
| Type ID | `has_item_data` |
| Module | libreforge |
| Category | Player State |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `key` | String | ✅ | — | — | The item data key to check for. |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/conditions/impl/ConditionHasItemData.kt`).

- **Source Description**: Passes when the held item has the specified custom item data key set.
- **Categories**: `inventory`

## Configuration Example

```yaml
- id: has_item_data
  args:
    key: owner # The data key
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)

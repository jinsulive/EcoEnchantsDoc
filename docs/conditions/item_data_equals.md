---
title: item_data_equals
titleZh: item_data_equals
category: conditions
subcategory: items
tags:
  - libreforge
outline: deep
---

# item_data_equals <Badge type="info" text="libreforge" />

> Passes when the held item's custom data value for a given key equals the specified value.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `item_data_equals` |
| Module | libreforge |
| Category | Items & Equipment |

::: tip Inverse Argument
Every condition supports the optional `inverse` argument, which negates the condition.
:::

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `key` | String | ✅ | — | — | The custom item data key to read from the item. |
| `value` | String | ✅ | — | — | The value that the data key must equal. |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/conditions/impl/ConditionItemDataEquals.kt`).

- **Source Description**: Passes when the held item's custom data value for a given key equals the specified value.
- **Categories**: `inventory`

## Configuration Example

```yaml
- id: item_data_equals
  args:
    key: owner # The data key
    value: "%player_uuid%" # The data value
```

## Related Pages

- [All Conditions](./)
- [Guide: Configuring a Condition](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)

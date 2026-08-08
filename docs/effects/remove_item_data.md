---
title: remove_item_data
titleZh: remove_item_data
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# remove_item_data <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Remove item data

## Overview

| Property | Value |
|----------|-------|
| Type ID | `remove_item_data` |
| Module | libreforge |
| Category | Item |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `key` | String | ✅ | — | — | The key to remove \| Source: The key of the custom item data entry to remove. Example: `custom_id` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectRemoveItemData.kt`).

- **Source Description**: Removes a custom persistent data entry from the triggering item by its key.
- **Categories**: `inventory`
- **Requires Trigger Data**: `ITEM`

## Configuration Example

```yaml
- id: remove_item_data
  args:
    key: owner # The key to remove
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

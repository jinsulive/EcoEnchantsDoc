---
title: set_item_data
titleZh: set_item_data
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# set_item_data <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Sets a custom data key on the trigger item to a given value.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `set_item_data` |
| Module | libreforge |
| Category | Item |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `key` | String | ✅ | — | — | The custom data key to set on the item. Example: `custom_id` |
| `value` | String | ✅ | — | — | The value to store under the given key. Example: `epic_sword_tier_3` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectSetItemData.kt`).

- **Source Description**: Sets a custom data key on the trigger item to a given value.
- **Categories**: `inventory`
- **Requires Trigger Data**: `ITEM`

## Configuration Example

```yaml
- id: set_item_data
  args:
    key: owner # The key to set
    value: "%player_uuid%" # The value to set it to
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

---
title: level_up_item
titleZh: level_up_item
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# level_up_item <Badge type="info" text="libreforge" /> 

> Triggered when levelling up an item

## Overview

| Property | Value |
|----------|-------|
| Type ID | `level_up_item` |
| Module | libreforge |
| Category | Internal |
| Value | The new item level |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerLevelUpItem.kt`).

- **Source Description**: Fires when a libreforge item levels up.
- **Categories**: `player`
- **Requires Trigger Data**: `PLAYER`, `ITEM`, `TEXT`, `VALUE`
- **Value**: The new level of the item.

## Configuration Example

```yaml
triggers:
  - level_up_item
```

## Placeholders

| Placeholder | Value |
|-------------|-------|
| `%trigger_value%` | The new item level |
| `%alt_trigger_value%` | The alt-value passed by the trigger (if any) |

## Related Pages

- [All Triggers](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Conditions](../conditions/)

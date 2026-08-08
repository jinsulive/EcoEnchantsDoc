---
title: move_item
titleZh: move_item
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# move_item <Badge type="info" text="libreforge" /> 

> Fires when a player clicks an item in an inventory.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `move_item` |
| Module | libreforge |
| Category | Internal |
| Value | The stack size of the clicked item |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerMoveItem.kt`).

- **Source Description**: Fires when a player clicks an item in an inventory.
- **Categories**: `inventory`
- **Requires Trigger Data**: `PLAYER`, `ITEM`, `VALUE`, `EVENT`
- **Value**: The stack size of the clicked item.

## Configuration Example

```yaml
triggers:
  - move_item
```

## Placeholders

| Placeholder | Value |
|-------------|-------|
| `%trigger_value%` | The stack size of the clicked item |
| `%alt_trigger_value%` | The alt-value passed by the trigger (if any) |

## Related Pages

- [All Triggers](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Conditions](../conditions/)

---
title: pick_up_item
titleZh: pick_up_item
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# pick_up_item <Badge type="info" text="libreforge" /> 

> Fires when an entity picks up an item from the ground.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `pick_up_item` |
| Module | libreforge |
| Category | Internal |
| Value | The amount of items |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerPickUpItem.kt`).

- **Source Description**: Fires when an entity picks up an item from the ground.
- **Categories**: `inventory`
- **Requires Trigger Data**: `PLAYER`, `VICTIM`, `ITEM`, `VALUE`
- **Value**: The stack size of the picked-up item.

## Configuration Example

```yaml
triggers:
  - pick_up_item
```

## Placeholders

| Placeholder | Value |
|-------------|-------|
| `%trigger_value%` | The amount of items |
| `%alt_trigger_value%` | The alt-value passed by the trigger (if any) |

## Related Pages

- [All Triggers](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Conditions](../conditions/)

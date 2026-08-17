---
title: drop_item
titleZh: drop_item
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# drop_item <Badge type="info" text="libreforge" /> 

> Fires when the player drops an item from their inventory.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `drop_item` |
| Module | libreforge |
| Category | Internal |
| Value | The amount of items |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerDropItem.kt`).

- **Source Description**: Fires when the player drops an item from their inventory.
- **Categories**: `inventory`
- **Requires Trigger Data**: `PLAYER`, `EVENT`, `LOCATION`, `ITEM`, `VALUE`
- **Value**: The number of items dropped.

## Configuration Example

```yaml
triggers:
  - drop_item
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

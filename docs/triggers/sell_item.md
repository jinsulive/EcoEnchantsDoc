---
title: sell_item
titleZh: sell_item
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# sell_item <Badge type="info" text="libreforge" /> 

> Fires when the player sells an item to a shop.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `sell_item` |
| Module | libreforge |
| Category | Internal |
| Value | The price |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerSellItem.kt`).

- **Source Description**: Fires when the player sells an item to a shop.
- **Categories**: `economy`
- **Requires Trigger Data**: `PLAYER`, `ITEM`, `VALUE`
- **Value**: The total sell value of the items.

## Configuration Example

```yaml
triggers:
  - sell_item
```

## Placeholders

| Placeholder | Value |
|-------------|-------|
| `%trigger_value%` | The price |
| `%alt_trigger_value%` | The alt-value passed by the trigger (if any) |

## Related Pages

- [All Triggers](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Conditions](../conditions/)

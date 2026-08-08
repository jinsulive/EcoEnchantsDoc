---
title: enchant_item
titleZh: enchant_item
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# enchant_item <Badge type="info" text="libreforge" /> 

> Triggered when enchanting an item in an enchanting table

## Overview

| Property | Value |
|----------|-------|
| Type ID | `enchant_item` |
| Module | libreforge |
| Category | Internal |
| Value | The xp cost |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerEnchantItem.kt`).

- **Source Description**: Fires when the player enchants an item at an enchanting table.
- **Categories**: `inventory`
- **Requires Trigger Data**: `PLAYER`, `EVENT`, `LOCATION`, `ITEM`, `VALUE`
- **Value**: The XP level cost of the enchantment.

## Configuration Example

```yaml
triggers:
  - enchant_item
```

## Placeholders

| Placeholder | Value |
|-------------|-------|
| `%trigger_value%` | The xp cost |
| `%alt_trigger_value%` | The alt-value passed by the trigger (if any) |

## Related Pages

- [All Triggers](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Conditions](../conditions/)

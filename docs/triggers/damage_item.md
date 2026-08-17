---
title: damage_item
titleZh: damage_item
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# damage_item <Badge type="info" text="libreforge" /> 

> Fires when the player's held item takes durability damage.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `damage_item` |
| Module | libreforge |
| Category | Internal |
| Value | The damage |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerDamageItem.kt`).

- **Source Description**: Fires when the player's held item takes durability damage.
- **Categories**: `inventory`
- **Requires Trigger Data**: `PLAYER`, `EVENT`, `LOCATION`, `ITEM`, `VALUE`
- **Value**: The amount of durability damage applied.

## Configuration Example

```yaml
triggers:
  - damage_item
```

## Placeholders

| Placeholder | Value |
|-------------|-------|
| `%trigger_value%` | The damage |
| `%alt_trigger_value%` | The alt-value passed by the trigger (if any) |

## Related Pages

- [All Triggers](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Conditions](../conditions/)

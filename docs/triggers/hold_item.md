---
title: hold_item
titleZh: hold_item
category: triggers
subcategory: internal
tags:
  - libreforge
outline: deep
---

# hold_item <Badge type="info" text="libreforge" /> 

> Triggered when changing your held item

## Overview

| Property | Value |
|----------|-------|
| Type ID | `hold_item` |
| Module | libreforge |
| Category | Internal |
| Value | 1 |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/triggers/impl/TriggerHoldItem.kt`).

- **Source Description**: Fires when the player switches to a different hotbar slot.
- **Categories**: `inventory`
- **Requires Trigger Data**: `PLAYER`, `EVENT`, `LOCATION`, `ITEM`

## Configuration Example

```yaml
triggers:
  - hold_item
```

## Placeholders

| Placeholder | Value |
|-------------|-------|
| `%trigger_value%` | 1 |
| `%alt_trigger_value%` | The alt-value passed by the trigger (if any) |

## Related Pages

- [All Triggers](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Conditions](../conditions/)

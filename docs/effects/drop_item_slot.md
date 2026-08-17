---
title: drop_item_slot
titleZh: drop_item_slot
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# drop_item_slot <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Drops items from a specific inventory slot.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `drop_item_slot` |
| Module | libreforge |
| Category | Item |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `slot` | String | ✅ | — | — | The inventory slot to drop items from, e.g. mainhand or slot_0. Example: `mainhand` |
| `amount` | Expression | — | — | — | How many items to drop. If omitted, drops the entire stack. |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectDropItemSlot.kt`).

- **Source Description**: Drops items from a specific inventory slot.
- **Categories**: `inventory`
- **Requires Trigger Data**: `PLAYER`

## Configuration Example

```yaml
- id: drop_item_slot
  args:
    slot: hand # The slot to drop, can be any numeric slot, hand, or 'any' (Defaults to any)
    amount: 1 # (Optional) The amount of items to drop, defaults to full stack
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

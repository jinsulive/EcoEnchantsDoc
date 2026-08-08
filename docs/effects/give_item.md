---
title: give_item
titleZh: give_item
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# give_item <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Gives a player an item

## Overview

| Property | Value |
|----------|-------|
| Type ID | `give_item` |
| Module | libreforge |
| Category | Item |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `item` | Item List | ✅ | — | — | The item to give \| Source: The item or list of items to give to the player. |
| `items` | Item List | ✅ | — | — | You can also specify a list of items \| Source: The item or list of items to give to the player. |
| `slot` | String | — | — | — | The slot to give in, can be any numeric slot, hand, or 'any' \| Source: The inventory slot type to place the item into. If omitted the item is dropped into the player's inventory via telekinesis. Example: `mainhand` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectGiveItem.kt`).

- **Source Description**: Gives the player one or more items, optionally placing them into a specific inventory slot.
- **Categories**: `inventory`
- **Requires Trigger Data**: `PLAYER`

## Configuration Example

```yaml
- id: give_item
  args:
    item: "diamond_sword razor:5" # The item to give
    items: # You can also specify a list of items
      - "ecoitems:enchanted_diamond 1"
      - "diamond_pickaxe 1 unbreaking:2"
    slot: hand # (Optional) The slot to give in, can be any numeric slot, hand, or 'any' (Defaults to any)
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

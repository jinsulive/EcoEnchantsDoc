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

| Parameter | Description |
|-----------|-------------|
| `item` | The item to give |
| `items` | You can also specify a list of items |
| `slot` | The slot to give in, can be any numeric slot, hand, or 'any' |

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

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

> Drops items from the player's inventory

## Overview

| Property | Value |
|----------|-------|
| Type ID | `drop_item_slot` |
| Module | libreforge |
| Category | Item |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `slot` | The slot to drop, can be any numeric slot, hand, or 'any' |
| `amount` | The amount of items to drop, defaults to full stack |

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

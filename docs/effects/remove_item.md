---
title: remove_item
titleZh: remove_item
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# remove_item <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Removes an item from the player's inventory

## Overview

| Property | Value |
|----------|-------|
| Type ID | `remove_item` |
| Module | libreforge |
| Category | Item |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `item` | The item to remove |

## Configuration Example

```yaml
- id: remove_item
  args:
    item: diamond # The item to remove
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

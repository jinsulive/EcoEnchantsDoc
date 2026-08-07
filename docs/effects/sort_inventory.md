---
title: sort_inventory
titleZh: sort_inventory
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# sort_inventory <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Sorts a section of the player's inventory alphabetically by item type

## Overview

| Property | Value |
|----------|-------|
| Type ID | `sort_inventory` |
| Module | libreforge |
| Category | Item |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `type` | The section to sort: all, hotbar, or main |

## Configuration Example

```yaml
- id: sort_inventory
  args:
    type: main # The section to sort: all, hotbar, or main
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

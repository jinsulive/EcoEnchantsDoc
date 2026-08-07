---
title: clear_inventory
titleZh: clear_inventory
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# clear_inventory <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Clears a section of the player's inventory

## Overview

| Property | Value |
|----------|-------|
| Type ID | `clear_inventory` |
| Module | libreforge |
| Category | Item |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `type` | The section to clear: all, hotbar, main, or armor |

## Configuration Example

```yaml
- id: clear_inventory
  args:
    type: all # The section to clear: all, hotbar, main, or armor
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

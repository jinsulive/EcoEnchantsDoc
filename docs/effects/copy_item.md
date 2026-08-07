---
title: copy_item
titleZh: copy_item
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# copy_item <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Copies an item from one inventory slot to another

## Overview

| Property | Value |
|----------|-------|
| Type ID | `copy_item` |
| Module | libreforge |
| Category | Item |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `from_slot` | The source inventory slot index |
| `to_slot` | The destination inventory slot index |

## Configuration Example

```yaml
- id: copy_item
  args:
    from_slot: 0 # The source inventory slot index
    to_slot: 1 # The destination inventory slot index
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

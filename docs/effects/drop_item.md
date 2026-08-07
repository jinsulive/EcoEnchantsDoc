---
title: drop_item
titleZh: drop_item
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# drop_item <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Drops an item at a location

## Overview

| Property | Value |
|----------|-------|
| Type ID | `drop_item` |
| Module | libreforge |
| Category | Item |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `item` | The item to give |

## Configuration Example

```yaml
- id: drop_item
  args:
    item: "diamond_sword first_strike:6" # The item to give
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

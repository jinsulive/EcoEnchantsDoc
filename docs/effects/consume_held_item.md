---
title: consume_held_item
titleZh: consume_held_item
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# consume_held_item <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Consume items held in the player's main hand

## Overview

| Property | Value |
|----------|-------|
| Type ID | `consume_held_item` |
| Module | libreforge |
| Category | Item |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `amount` | The amount of items to remove (i.e. 1 apple, 2 apples, etc) |

## Configuration Example

```yaml
- id: consume_held_item
  args:
    amount: 1 # The amount of items to remove (i.e. 1 apple, 2 apples, etc)
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

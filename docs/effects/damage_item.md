---
title: damage_item
titleZh: damage_item
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# damage_item <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Damages the item

## Overview

| Property | Value |
|----------|-------|
| Type ID | `damage_item` |
| Module | libreforge |
| Category | Item |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `damage` | The durability to damage |

## Configuration Example

```yaml
- id: damage_item
  args:
    damage: 2 # The durability to damage
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

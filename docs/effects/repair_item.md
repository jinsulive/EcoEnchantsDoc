---
title: repair_item
titleZh: repair_item
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# repair_item <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Repairs the item

## Overview

| Property | Value |
|----------|-------|
| Type ID | `repair_item` |
| Module | libreforge |
| Category | Item |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `damage` | The durability to repair |

## Configuration Example

```yaml
- id: repair_item
  args:
    damage: 2 # The durability to repair
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

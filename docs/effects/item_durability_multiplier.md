---
title: item_durability_multiplier
titleZh: item_durability_multiplier
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# item_durability_multiplier <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Multiplies item durability (only works if holders are items, e.g. in EcoEnchants, EcoItems, etc.). Item durability cannot actually be changed, so this functions like unbreaking where items will instead lose durability more quickly / slowly.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `item_durability_multiplier` |
| Module | libreforge |
| Category | Item |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `multiplier` | The multiplier for the durability |

## Configuration Example

```yaml
- id: item_durability_multiplier
  args:
    multiplier: 1.5 # The multiplier for the durability
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

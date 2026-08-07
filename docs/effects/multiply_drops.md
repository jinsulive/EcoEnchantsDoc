---
title: multiply_drops
titleZh: multiply_drops
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# multiply_drops <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Multiplies drops

## Overview

| Property | Value |
|----------|-------|
| Type ID | `multiply_drops` |
| Module | libreforge |
| Category | Item |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `on_items` | (Optional) The drops to multiply |
| `fortune` | The level of fortune to mimic (Option 1) |
| `multiplier` | The drop multiplier (Option 2) |

## Configuration Example

```yaml
- id: multiply_drops
  args:
    on_items: # (Optional) The drops to multiply
      - diamond
      - emerald
    fortune: 3 # The level of fortune to mimic (Option 1)
    multiplier: 2 # The drop multiplier (Option 2)
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

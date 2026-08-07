---
title: sell_items
titleZh: sell_items
category: effects
subcategory: economy
tags:
  - libreforge
outline: deep
---

# sell_items <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Sells dropped items / item from trigger

## Overview

| Property | Value |
|----------|-------|
| Type ID | `sell_items` |
| Module | libreforge |
| Category | Economy |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `multiplier` | The price multiplier |
| `whitelist` | The only items allowed to be sold, if this is not present all items can be sold |

## Configuration Example

```yaml
- id: sell_items
  args:
    multiplier: 0.5 # The price multiplier
    whitelist: [] # The only items allowed to be sold, if this is not present all items can be sold
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

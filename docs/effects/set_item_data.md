---
title: set_item_data
titleZh: set_item_data
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# set_item_data <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Set item data

## Overview

| Property | Value |
|----------|-------|
| Type ID | `set_item_data` |
| Module | libreforge |
| Category | Item |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `key` | The key to set |
| `value` | The value to set it to |

## Configuration Example

```yaml
- id: set_item_data
  args:
    key: owner # The key to set
    value: "%player_uuid%" # The value to set it to
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

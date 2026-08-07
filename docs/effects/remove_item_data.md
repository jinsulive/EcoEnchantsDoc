---
title: remove_item_data
titleZh: remove_item_data
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# remove_item_data <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Remove item data

## Overview

| Property | Value |
|----------|-------|
| Type ID | `remove_item_data` |
| Module | libreforge |
| Category | Item |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `key` | The key to remove |

## Configuration Example

```yaml
- id: remove_item_data
  args:
    key: owner # The key to remove
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

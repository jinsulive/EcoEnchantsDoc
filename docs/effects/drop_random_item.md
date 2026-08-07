---
title: drop_random_item
titleZh: drop_random_item
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# drop_random_item <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Drops a random item at a location

## Overview

| Property | Value |
|----------|-------|
| Type ID | `drop_random_item` |
| Module | libreforge |
| Category | Item |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `items` | The list of items to choose from |

## Configuration Example

```yaml
- id: drop_random_item
  args:
    items: # The list of items to choose from
      - diamond
      - ancient_debris
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

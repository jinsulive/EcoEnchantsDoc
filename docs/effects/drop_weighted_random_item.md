---
title: drop_weighted_random_item
titleZh: drop_weighted_random_item
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# drop_weighted_random_item <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Drops a random item at a location, with weighting for different items

## Overview

| Property | Value |
|----------|-------|
| Type ID | `drop_weighted_random_item` |
| Module | libreforge |
| Category | Item |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `items` | The list of items to choose from (with weight) |

## Configuration Example

```yaml
- id: drop_weighted_random_item
  args:
    items: # The list of items to choose from
      - items: # You can specify a list of items for each weight
          - diamond 2
          - ancient_debris 2
        weight: 2
      - item: ancient_debris # Or just a single item
        weight: 5
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

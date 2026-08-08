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

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `items` | Dynamic Config | ✅ | — | — | A list of weighted item groups. Each entry has a weight and an items list. |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectDropWeightedRandomItem.kt`).

- **Source Description**: Drops one item chosen from a weighted list at the trigger location.
- **Categories**: `inventory`
- **Requires Trigger Data**: `LOCATION`

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

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

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `items` | Item List | ✅ | — | — | The pool of items to choose from. One is picked at random per trigger. |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectDropRandomItem.kt`).

- **Source Description**: Drops one randomly chosen item from a list at the trigger location.
- **Categories**: `inventory`
- **Requires Trigger Data**: `LOCATION`

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

---
title: sort_inventory
titleZh: sort_inventory
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# sort_inventory <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Sorts a section of the player's inventory alphabetically by item type

## Overview

| Property | Value |
|----------|-------|
| Type ID | `sort_inventory` |
| Module | libreforge |
| Category | Item |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `type` | String | ✅ | — | `all`, `hotbar`, `main` | The section to sort: all, hotbar, or main \| Source: Which section of the inventory to sort: all, hotbar, or main. |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectSortInventory.kt`).

- **Source Description**: Sorts items in the player's inventory by material name and stack size.
- **Categories**: `inventory`, `player`
- **Requires Trigger Data**: `PLAYER`

## Configuration Example

```yaml
- id: sort_inventory
  args:
    type: main # The section to sort: all, hotbar, or main
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

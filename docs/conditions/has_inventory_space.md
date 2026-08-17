---
title: has_inventory_space
titleZh: has_inventory_space
category: conditions
subcategory: player
tags:
  - libreforge
outline: deep
---

# has_inventory_space <Badge type="info" text="libreforge" /> <Badge type="info" text="Condition" />

> Passes when the player has at least one free slot across the checked slot types.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `has_inventory_space` |
| Module | libreforge |
| Category | Player |
| Effect Type | Condition |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `include_armor_slots` | Boolean | — | `true` | — | Whether to count empty armor slots as free space. Defaults to true. |
| `include_offhand` | Boolean | — | `true` | — | Whether to count an empty offhand slot as free space. Defaults to true. |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/conditions/impl/ConditionHasInventorySpace.kt`).

- **Source Description**: Passes when the player has at least one free slot across the checked slot types.

- **Categories**: `player`

## Configuration Example

```yaml
- id: has_inventory_space
  args:
    include_armor_slots: <value>
    include_offhand: <value>
```

## Related Pages

- [All Conditions](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Effects](../effects/)
- [All Triggers](../triggers/)

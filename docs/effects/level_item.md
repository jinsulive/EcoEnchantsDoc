---
title: level_item
titleZh: level_item
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# level_item <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Grants XP to the triggered item's level system.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `level_item` |
| Module | libreforge |
| Category | Item |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `id` | String | ✅ | — | — | The ID of the level type to grant XP for. Example: `mining` |
| `xp` | Expression | ✅ | — | — | The amount of XP to grant to the item. Supports expressions. Example: `%level% * 10` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectLevelItem.kt`).

- **Source Description**: Grants XP to the triggered item's level system.
- **Categories**: `inventory`

## Configuration Example

```yaml
- id: level_item
  args:
    id: mining_progress # The level ID
    xp: "%v% * 2" # The amount of xp to gain
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

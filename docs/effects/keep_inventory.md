---
title: keep_inventory
titleZh: keep_inventory
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# keep_inventory <Badge type="info" text="libreforge" /> <Badge type="warning" text="Permanent" />

> Gives the player keep inventory. This will not make them keep their XP! Use keep_level as well if you want players to keep both items and XP.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `keep_inventory` |
| Module | libreforge |
| Category | Item |
| Effect Type | Permanent |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectKeepInventory.kt`).

- **Source Description**: Prevents the player from dropping their inventory on death.
- **Categories**: `player`, `inventory`

## Configuration Example

```yaml
- id: keep_inventory
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

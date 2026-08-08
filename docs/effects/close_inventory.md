---
title: close_inventory
titleZh: close_inventory
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# close_inventory <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Closes the player's inventory

## Overview

| Property | Value |
|----------|-------|
| Type ID | `close_inventory` |
| Module | libreforge |
| Category | Item |
| Effect Type | Triggered |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectCloseInventory.kt`).

- **Source Description**: Closes any open inventory GUI for the player.
- **Categories**: `inventory`, `player`
- **Requires Trigger Data**: `PLAYER`

## Configuration Example

```yaml
- id: close_inventory
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

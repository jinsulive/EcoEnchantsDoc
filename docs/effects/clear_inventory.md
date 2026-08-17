---
title: clear_inventory
titleZh: clear_inventory
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# clear_inventory <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Clears a section of the player's inventory.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `clear_inventory` |
| Module | libreforge |
| Category | Item |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `type` | String | ✅ | — | `all`, `hotbar`, `main`, `armor` | Which section of the inventory to clear. |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectClearInventory.kt`).

- **Source Description**: Clears a section of the player's inventory.
- **Categories**: `inventory`, `player`
- **Requires Trigger Data**: `PLAYER`

## Configuration Example

```yaml
- id: clear_inventory
  args:
    type: all # The section to clear: all, hotbar, main, or armor
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

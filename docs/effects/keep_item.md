---
title: keep_item
titleZh: keep_item
category: effects
subcategory: player
tags:
  - libreforge
outline: deep
---

# keep_item <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Keeps an item in the player's inventory when they die, instead of it being dropped.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `keep_item` |
| Module | libreforge |
| Category | Player, Inventory |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `slot` | String | — | — | — | The inventory slot of the item to keep, e.g. mainhand or slot_0. If omitted, the item providing this effect is kept. Example: `mainhand` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectKeepItem.kt`).

- **Source Description**: Keeps an item in the player's inventory when they die, instead of it being dropped.

- **Categories**: `player, inventory`

## Configuration Example

```yaml
- id: keep_item
  args:
    slot: <value>
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

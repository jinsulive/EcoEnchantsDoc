---
title: item_magnet
titleZh: item_magnet
category: effects
subcategory: inventory
tags:
  - libreforge
outline: deep
---

# item_magnet <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Pulls nearby dropped items toward the holder while active, optionally restricted to specific item types.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `item_magnet` |
| Module | libreforge |
| Category | Inventory, Movement & Location |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `radius` | Expression | ✅ | — | — | The radius within which dropped items will be pulled, in blocks. Supports expressions. Example: `5 + %level% * 0.5` |
| `items` | Item List | — | `[]` | — | A whitelist of item types to attract. If empty, all items are attracted. |
| `exclude_items` | Item List | — | `[]` | — | A blacklist of item types to never attract, checked after the whitelist. |
| `pull_strength` | Expression | — | `0.3` | — | How strongly items are pulled per tick. Supports expressions. Example: `0.1 + %level% * 0.02` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectItemMagnet.kt`).

- **Source Description**: Pulls nearby dropped items toward the holder while active, optionally restricted to specific item types.

- **Categories**: `inventory, movement`

## Configuration Example

```yaml
- id: item_magnet
  args:
    radius: <value>
    items: <value>
    exclude_items: <value>
    pull_strength: <value>
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

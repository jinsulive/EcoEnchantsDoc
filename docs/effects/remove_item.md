---
title: remove_item
titleZh: remove_item
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# remove_item <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Removes an item from the player's inventory

## Overview

| Property | Value |
|----------|-------|
| Type ID | `remove_item` |
| Module | libreforge |
| Category | Item |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `item` | Item | ✅ | — | — | The item to remove from the player's inventory, including its stack size. |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectRemoveItem.kt`).

- **Source Description**: Removes a specified item (and its stack amount) from the player's inventory.
- **Categories**: `inventory`
- **Requires Trigger Data**: `PLAYER`

## Configuration Example

```yaml
- id: remove_item
  args:
    item: diamond # The item to remove
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

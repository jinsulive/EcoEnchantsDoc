---
title: copy_item
titleZh: copy_item
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# copy_item <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Copies an item from one inventory slot to another

## Overview

| Property | Value |
|----------|-------|
| Type ID | `copy_item` |
| Module | libreforge |
| Category | Item |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `from_slot` | String | ✅ | — | — | The slot to copy the item from, e.g. mainhand or offhand. Example: `mainhand` |
| `to_slot` | String | ✅ | — | — | The slot to copy the item into. Example: `offhand` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectCopyItem.kt`).

- **Source Description**: Copies the item from one inventory slot into another slot.
- **Categories**: `inventory`
- **Requires Trigger Data**: `PLAYER`

## Configuration Example

```yaml
- id: copy_item
  args:
    from_slot: 0 # The source inventory slot index
    to_slot: 1 # The destination inventory slot index
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

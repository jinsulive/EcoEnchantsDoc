---
title: autosmelt
titleZh: autosmelt
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# autosmelt <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Autosmelts drops (requires a drop trigger)

## Overview

| Property | Value |
|----------|-------|
| Type ID | `autosmelt` |
| Module | libreforge |
| Category | Item |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `drop_xp` | Boolean | ✅ | — | — | Whether to drop smelting XP alongside the smelted item. |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectAutosmelt.kt`).

- **Source Description**: Automatically smelts blocks as they are mined, converting drops to their furnace output.
- **Categories**: `world`, `inventory`

## Configuration Example

```yaml
- id: autosmelt
  args:
    drop_xp: true # If the furnace xp should be dropped
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

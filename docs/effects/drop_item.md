---
title: drop_item
titleZh: drop_item
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# drop_item <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Drops an item at a location

## Overview

| Property | Value |
|----------|-------|
| Type ID | `drop_item` |
| Module | libreforge |
| Category | Item |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `item` | Item | ✅ | — | — | The item to drop. Accepts eco item lookup strings. |
| `add_to_drops` | Boolean | — | `false` | — | If true and the trigger has a drop event, adds the item to that event's drop list instead of spawning it directly. |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectDropItem.kt`).

- **Source Description**: Drops an item at the trigger location.
- **Categories**: `inventory`
- **Requires Trigger Data**: `LOCATION`

## Configuration Example

```yaml
- id: drop_item
  args:
    item: "diamond_sword first_strike:6" # The item to give
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

---
title: replant_crops
titleZh: replant_crops
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# replant_crops <Badge type="info" text="libreforge" /> <Badge type="warning" text="Permanent" />

> Automatically replants crops

## Overview

| Property | Value |
|----------|-------|
| Type ID | `replant_crops` |
| Module | libreforge |
| Category | Item |
| Effect Type | Permanent |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `consume_seeds` | Boolean | ✅ | — | — | Whether seeds should be taken from the player's inventory when replanting. |
| `only_fully_grown` | Boolean | ✅ | — | — | Whether to only replant crops that are fully grown. |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectReplantCrops.kt`).

- **Source Description**: Automatically replants harvested crops at age 0 when the player breaks them.
- **Categories**: `world`

## Configuration Example

```yaml
- id: replant_crops
  args:
    consume_seeds: true # If seeds should be used when replanting crops
    only_fully_grown: true # If only fully grown crops should be replanted
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

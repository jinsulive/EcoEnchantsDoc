---
title: harvest_crop
titleZh: harvest_crop
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# harvest_crop <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Harvests a crop block and resets it to age 0

## Overview

| Property | Value |
|----------|-------|
| Type ID | `harvest_crop` |
| Module | libreforge |
| Category | Item |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `only_fully_grown` | Boolean | ✅ | — | — | Whether the crop must be fully grown before it is harvested. |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectHarvestCrop.kt`).

- **Source Description**: Harvests the triggered crop block and resets its growth to zero.
- **Categories**: `world`
- **Requires Trigger Data**: `BLOCK`

## Configuration Example

```yaml
- id: harvest_crop
  args:
    only_fully_grown: true # Whether to only harvest fully grown crops
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

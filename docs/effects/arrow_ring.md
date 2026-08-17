---
title: arrow_ring
titleZh: arrow_ring
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# arrow_ring <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Spawns a ring of arrows falling downward at the trigger location.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `arrow_ring` |
| Module | libreforge |
| Category | Item |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `amount` | Expression | ✅ | — | — | The number of arrows in the ring. Supports expressions. Example: `8 + %level%` |
| `height` | Expression | ✅ | — | — | The height above the location to spawn the arrows. Supports expressions. |
| `radius` | Expression | ✅ | — | — | The radius of the arrow ring. Supports expressions. Example: `3 + %level% * 0.3` |
| `arrow_damage` | Expression | ✅ | — | — | The damage each arrow deals. Supports expressions. Example: `%level% * 1.5` |
| `fire_ticks` | Expression | ✅ | — | — | How many ticks the arrows are on fire. Supports expressions. |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectArrowRing.kt`).

- **Source Description**: Spawns a ring of arrows falling downward at the trigger location.
- **Categories**: `combat`
- **Requires Trigger Data**: `LOCATION`

## Configuration Example

```yaml
- id: arrow_ring
  args:
    amount: 12 # The amount of arrows to spawn
    height: 3 # The height at which to spawn the arrows
    radius: 1.5 # The radius of the ring
    arrow_damage: 10 # The amount of damage for the arrows to deal
    fire_ticks: 30 # The fire ticks for the arrows to have
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

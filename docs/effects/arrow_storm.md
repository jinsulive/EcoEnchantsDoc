---
title: arrow_storm
titleZh: arrow_storm
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# arrow_storm <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Rains arrows down from above the trigger location.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `arrow_storm` |
| Module | libreforge |
| Category | Item |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `amount` | Expression | ✅ | — | — | The number of arrows to rain down. Supports expressions. Example: `10 + %level%` |
| `height` | Expression | ✅ | — | — | The height above the target to spawn the arrows. Supports expressions. |
| `spread` | Expression | ✅ | — | — | The horizontal spread radius for arrow spawning. Supports expressions. Example: `3 + %level% * 0.3` |
| `damage` | Expression | — | — | — | The damage each arrow deals. If omitted, uses the arrow's default damage. Example: `%level% * 2` |
| `respect_flame` | Boolean | — | `true` | — | Whether arrows inherit the Flame enchantment from the held bow. |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectArrowStorm.kt`).

- **Source Description**: Rains arrows down from above the trigger location.
- **Categories**: `combat`
- **Requires Trigger Data**: `LOCATION`
- **Inherits Config**: Yes — this effect inherits its sub-configuration; see the corresponding sub-config page.

## Configuration Example

```yaml
- id: arrow_storm
  args:
    amount: 10 # The number of arrows to spawn
    height: 10 # The height above the target location to spawn arrows
    spread: 3 # The horizontal spread radius of the arrow spawn positions
    damage: 2.0 # (Optional) The damage each arrow deals
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

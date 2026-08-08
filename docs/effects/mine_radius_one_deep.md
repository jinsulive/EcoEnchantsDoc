---
title: mine_radius_one_deep
titleZh: mine_radius_one_deep
category: effects
subcategory: movement
tags:
  - libreforge
outline: deep
---

# mine_radius_one_deep <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Mines a square radius around a block, but only one block deep

## Overview

| Property | Value |
|----------|-------|
| Type ID | `mine_radius_one_deep` |
| Module | libreforge |
| Category | Movement |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `radius` | Expression(数学表达式) | ✅ | — | — | The radius of blocks to break in the flat layer. Supports expressions. Example: `3 + %level% / 20` |
| `blacklisted_blocks` | Block List | — | `[]` | — | A list of blocks that should never be broken by this effect. |
| `check_hardness` | Boolean | — | `true` | — | Whether blocks harder than the triggered block should be skipped. |
| `disable_on_sneak` | Boolean | — | `false` | — | Whether the effect should be disabled while the player is sneaking. |
| `whitelist` | Block List | — | `[]` | — | A list of blocks that are allowed to be broken. If omitted, all blocks are eligible. |
| `no_corners` | Boolean | — | `false` | — | Whether corner blocks at the edge of the radius should be excluded (plus-sign shape). |
| `prevent_trigger` | Boolean | — | `false` | — | Whether breaking these blocks should prevent triggering further effects. |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectMineRadiusOneDeep.kt`).

- **Source Description**: Mines blocks in a radius around the triggered block, only one layer deep in the direction the player is facing.
- **Categories**: `world`
- **Requires Trigger Data**: `PLAYER`

## Configuration Example

```yaml
- id: mine_radius_one_deep
  args:
    radius: 1 # The radius around the center block: 1 = 3x3x1, 2 = 5x5x1, etc
    blacklisted_blocks: # The blocks to not mine
      - obsidian
    check_hardness: true # If only blocks with the same (or lower) hardness than the mined block can be broken
    disable_on_sneak: true # If the effect shouldn't activate while sneaking
    whitelist: [] # The only blocks allowed to mine - Remove if you don't want this
    no_corners: false # If the corners shouldn't be broken (plus-sign shape) - Defaults to false
    prevent_trigger: true # Optional, if the mine_block trigger should not be called from this
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

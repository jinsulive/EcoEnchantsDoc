---
title: mine_radius
titleZh: mine_radius
category: effects
subcategory: movement
tags:
  - libreforge
outline: deep
---

# mine_radius <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Mines a square radius around a block

## Overview

| Property | Value |
|----------|-------|
| Type ID | `mine_radius` |
| Module | libreforge |
| Category | Movement |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `radius` | Expression(数学表达式) | ✅ | — | — | The radius around the center block: 1 = 3x3x3, 2 = 5x5x5, etc \| Source: The radius of blocks to break around the triggered block. Supports expressions. Example: `2 + %level% / 20` |
| `blacklisted_blocks` | Block List | — | `[]` | — | The blocks to not mine \| Source: A list of blocks that should never be broken by this effect. |
| `check_hardness` | Boolean | — | `true` | — | If only blocks with the same (or lower) hardness than the mined block can be broken \| Source: Whether blocks harder than the triggered block should be skipped. |
| `disable_on_sneak` | Boolean | — | `false` | — | If the effect shouldn't activate while sneaking \| Source: Whether the effect should be disabled while the player is sneaking. |
| `whitelist` | Block List | — | `[]` | — | The only blocks allowed to mine - Remove if you don't want this \| Source: A list of blocks that are allowed to be broken. If omitted, all blocks are eligible. |
| `prevent_trigger` | Boolean | — | `false` | — | Optional, if the mine_block trigger should not be called from this \| Source: Whether breaking these blocks should prevent triggering further effects. |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectMineRadius.kt`).

- **Source Description**: Mines all blocks in a cube radius around the triggered block.
- **Categories**: `world`
- **Requires Trigger Data**: `PLAYER`

## Configuration Example

```yaml
- id: mine_radius
  args:
    radius: 1 # The radius around the center block: 1 = 3x3x3, 2 = 5x5x5, etc
    blacklisted_blocks: # The blocks to not mine
      - obsidian
    check_hardness: true # If only blocks with the same (or lower) hardness than the mined block can be broken
    disable_on_sneak: true # If the effect shouldn't activate while sneaking
    whitelist: [] # The only blocks allowed to mine - Remove if you don't want this
    prevent_trigger: true # Optional, if the mine_block trigger should not be called from this
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

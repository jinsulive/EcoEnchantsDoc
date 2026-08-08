---
title: mine_vein
titleZh: mine_vein
category: effects
subcategory: movement
tags:
  - libreforge
outline: deep
---

# mine_vein <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Mines a vein of blocks

## Overview

| Property | Value |
|----------|-------|
| Type ID | `mine_vein` |
| Module | libreforge |
| Category | Movement |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `limit` | Expression(数学表达式) | ✅ | — | — | The maximum amount of blocks to mine \| Source: The maximum number of connected blocks to break in one vein. Supports expressions. Example: `10 + %level%` |
| `blocks` | Block List | — | `[]` | — | (Optional) The blocks allowed to mine - if this is not specified, only blocks of the same type as the first block will be mined. \| Source: A list of block types to consider part of the vein. Defaults to the same type as the mined block. |
| `disable_on_sneak` | Boolean | — | `false` | — | If the effect shouldn't activate while sneaking \| Source: Whether to disable vein mining when the player is sneaking. |
| `prevent_trigger` | Boolean | — | `false` | — | Optional, if the mine_block trigger should not be called from this \| Source: Whether to prevent the vein blocks from re-triggering this effect. |
| `filters` | Custom | — | — | — | (Optional) Filters for the blocks |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectMineVein.kt`).

- **Source Description**: Mines an entire connected vein of the same block type up to a configurable limit.
- **Categories**: `world`
- **Requires Trigger Data**: `PLAYER`

## Configuration Example

```yaml
- id: mine_vein
  args:
    limit: 10 # The maximum amount of blocks to mine
    blocks: [] # (Optional) The blocks allowed to mine - if this is not specified, only blocks of the same type as the first block will be mined.
    disable_on_sneak: true # If the effect shouldn't activate while sneaking
    prevent_trigger: true # Optional, if the mine_block trigger should not be called from this
    filters: # (Optional) Filters for the blocks
      player_placed: false
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

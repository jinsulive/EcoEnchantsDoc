---
title: mine_shape
titleZh: mine_shape
category: effects
subcategory: world
tags:
  - libreforge
outline: deep
---

# mine_shape <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Breaks blocks in a custom 2D grid shape relative to the block the player mines.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `mine_shape` |
| Module | libreforge |
| Category | World |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `shape` | String List | ✅ | — | — | A list of strings forming a grid where 'T' is the trigger block and 'X' marks blocks to break. Example: `XXX, XTX, XXX` |
| `depth` | Expression | — | `1` | — | How many layers deep to mine behind the trigger block. Supports expressions. |
| `whitelist` | Block List | — | `[]` | — | A list of blocks that are allowed to be broken. Defaults to all blocks. |
| `blacklisted_blocks` | Block List | — | `[]` | — | A list of blocks that will never be broken by this effect. |
| `prevent_trigger` | Boolean | — | `false` | — | Whether to prevent the broken blocks from re-triggering this effect. |
| `disable_on_sneak` | Boolean | — | `false` | — | Whether to disable the shape mining when the player is sneaking. |
| `check_hardness` | Boolean | — | `true` | — | Whether to skip blocks harder than the trigger block. Defaults to true. |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectMineShape.kt`).

- **Source Description**: Breaks blocks in a custom 2D grid shape relative to the block the player mines.

- **Categories**: `world`

## Configuration Example

```yaml
- id: mine_shape
  args:
    shape: <value>
    depth: <value>
    whitelist: <value>
    blacklisted_blocks: <value>
    prevent_trigger: <value>
    disable_on_sneak: <value>
    check_hardness: <value>
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

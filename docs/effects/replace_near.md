---
title: replace_near
titleZh: replace_near
category: effects
subcategory: world
tags:
  - libreforge
outline: deep
---

# replace_near <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Replaces blocks of one type with another within a specified radius around the trigger location.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `replace_near` |
| Module | libreforge |
| Category | World |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `radius` | Expression | ✅ | — | — | The horizontal radius to search for blocks. Supports expressions. Example: `3 + %level% * 0.3` |
| `radius_y` | Expression | ✅ | — | — | The vertical radius to search for blocks. Supports expressions. Example: `2 + %level% * 0.2` |
| `replace_to` | Block | ✅ | — | — | The block type to replace matching blocks with. |
| `whitelist` | Block List | — | — | — | A list of block types that are allowed to be replaced. If omitted, all non-air blocks are eligible. |
| `blacklist` | Block List | — | — | — | A list of block types that should never be replaced. |
| `duration` | Expression | — | — | — | How long (in ticks) before the replaced blocks revert to their original type. Supports expressions. Example: `20 * %level%` |
| `disable_on_sneak` | Boolean | — | `false` | — | Whether to skip replacement when the player is sneaking. |
| `exposed_only` | Boolean | — | `false` | — | Whether to only replace blocks that have air directly above them. |
| `source_only` | Boolean | — | `false` | — | Whether to only replace source liquid blocks (level 0). |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectReplaceNear.kt`).

- **Source Description**: Replaces blocks of one type with another within a specified radius around the trigger location.
- **Categories**: `world`
- **Requires Trigger Data**: `PLAYER`

## Configuration Example

```yaml
- id: replace_near
  args:
    radius: 5 # The horizontal radius to replace
    radius_y: 5 # The vertical radius to replace
    replace_to: obsidian # The block to replace to
    duration: 40 # (Optional) The duration to replace for before returning back to the original state
    whitelist: # (Optional) A list of blocks to replace
      - lava
    exposed_only: true # (Optional) If only blocks with air above them should be replaced
    source_only: true # (Optional) If only source blocks should be replaced (for liquids)
    disable_on_sneak: true # If the effect should not activate while sneaking
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

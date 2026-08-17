---
title: drill
titleZh: drill
category: effects
subcategory: movement
tags:
  - libreforge
outline: deep
---

# drill <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Breaks a line of blocks in front of the player in their look direction.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `drill` |
| Module | libreforge |
| Category | Movement |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `amount` | Expression | ✅ | — | — | The number of blocks to break in a line. Supports expressions. Example: `3 + %level%` |
| `check_hardness` | Boolean | ✅ | — | — | If true, only blocks with hardness ≤ the trigger block are broken. |
| `disable_on_sneak` | Boolean | — | `false` | — | If true, the drill effect is disabled while the player is sneaking. |
| `prevent_trigger` | Boolean | — | `false` | — | If true, breaking additional blocks will not fire further libreforge triggers. |
| `whitelist` | Block List | — | — | — | Only these block types will be broken by the drill. |
| `blacklisted_blocks` | Block List | — | — | — | These block types will never be broken by the drill. |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectDrill.kt`).

- **Source Description**: Breaks a line of blocks in front of the player in their look direction.
- **Categories**: `world`
- **Requires Trigger Data**: `PLAYER`

## Configuration Example

```yaml
- id: drill
  args:
    amount: 4 # The amount of blocks to mine
    blacklisted_blocks: # The blocks to not mine
      - obsidian
    check_hardness: true # If only blocks with the same (or lower) hardness than the mined block can be broken
    disable_on_sneak: true # If the effect shouldn't activate while sneaking
    whitelist: [] # The only blocks allowed to mine - Remove if you don't want this
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

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

| Parameter | Description |
|-----------|-------------|
| `radius` | The radius around the center block: 1 = 3x3x3, 2 = 5x5x5, etc |
| `blacklisted_blocks` | The blocks to not mine |
| `check_hardness` | If only blocks with the same (or lower) hardness than the mined block can be broken |
| `disable_on_sneak` | If the effect shouldn't activate while sneaking |
| `whitelist` | The only blocks allowed to mine - Remove if you don't want this |
| `prevent_trigger` | Optional, if the mine_block trigger should not be called from this |

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

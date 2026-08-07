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

| Parameter | Description |
|-----------|-------------|
| `limit` | The maximum amount of blocks to mine |
| `blocks` | (Optional) The blocks allowed to mine - if this is not specified, only blocks of the same type as the first block will be mined. |
| `disable_on_sneak` | If the effect shouldn't activate while sneaking |
| `prevent_trigger` | Optional, if the mine_block trigger should not be called from this |
| `filters` | (Optional) Filters for the blocks |

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

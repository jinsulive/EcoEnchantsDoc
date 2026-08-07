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

> Mine blocks behind the initial mined block

## Overview

| Property | Value |
|----------|-------|
| Type ID | `drill` |
| Module | libreforge |
| Category | Movement |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `amount` | The amount of blocks to mine |
| `blacklisted_blocks` | The blocks to not mine |
| `check_hardness` | If only blocks with the same (or lower) hardness than the mined block can be broken |
| `disable_on_sneak` | If the effect shouldn't activate while sneaking |
| `whitelist` | The only blocks allowed to mine |

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

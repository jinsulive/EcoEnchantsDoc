---
title: aoe_blocks
titleZh: aoe_blocks
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# aoe_blocks <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Runs effects for all blocks within an area of effect (the list of shapes is found in the aoe page)

## Overview

| Property | Value |
|----------|-------|
| Type ID | `aoe_blocks` |
| Module | libreforge |
| Category | Utility |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `effects` | The effects to run for each block |
| `shape` | The shape of the AOE area |
| `radius` | The radius of the cone |
| `distance` | The length of the beam |
| `pierce_blocks` | If the beam should pass through blocks |
| `pierce_entities` | If the beam should pass through entities |

## Configuration Example

```yaml
- id: aoe_blocks
  args:
    effects: # The effects to run for each block
      - id: break_block
    shape: beam # The shape of the AOE area (see above)
    radius: 3 # The radius of the cone (see above)
    distance: 15 # The length of the beam (see above)
    pierce_blocks: true # If the beam should pass through blocks (see above)
    pierce_entities: true # If the beam should pass through entities (see above)
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

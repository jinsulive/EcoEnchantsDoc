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

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `effects` | Effect List | ✅ | — | — | The effects to run on each block within the AOE. |
| `shape` | String | ✅ | — | `circle`, `cone`, `offset_circle`, `scan_in_front`, `beam` | The AOE shape to use. |
| `radius` | Custom | — | — | — | The radius of the cone |
| `distance` | Custom | — | — | — | The length of the beam |
| `pierce_blocks` | Custom | — | — | — | If the beam should pass through blocks |
| `pierce_entities` | Custom | — | — | — | If the beam should pass through entities |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectAOEBlocks.kt`).

- **Source Description**: Runs a set of effects on all non-air blocks within an AOE shape.
- **Categories**: `meta`
- **Inherits Config**: Yes — this effect inherits its sub-configuration; see the corresponding sub-config page.

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

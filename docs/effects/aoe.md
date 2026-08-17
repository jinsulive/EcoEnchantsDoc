---
title: aoe
titleZh: aoe
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# aoe <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Runs a set of effects on all nearby entities within an AOE shape.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `aoe` |
| Module | libreforge |
| Category | Utility |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `effects` | Effect List | ✅ | — | — | The effects to run on each entity within the AOE. |
| `shape` | String | ✅ | — | `circle`, `cone`, `offset_circle`, `scan_in_front`, `beam` | The AOE shape to use. |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectAOE.kt`).

- **Source Description**: Runs a set of effects on all nearby entities within an AOE shape.
- **Categories**: `meta`
- **Inherits Config**: Yes — this effect inherits its sub-configuration; see the corresponding sub-config page.

## Configuration Example

```yaml
- id: aoe
  args:
      effects: # The effects to run for each entity
          - id: damage_victim
            args:
                damage: 2
                true-damage: true
      shape: cone # The shape of the AOE area (see above)
      radius: 3 # The radius of the cone (see above)
      angle: 120 # The angle of the cone (see above)
    ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

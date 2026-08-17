---
title: vortex
titleZh: vortex
category: effects
subcategory: world
tags:
  - libreforge
outline: deep
---

# vortex <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Pulls nearby entities toward the trigger location for a duration, then deals damage to all affected entities.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `vortex` |
| Module | libreforge |
| Category | World |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `radius` | Expression | ✅ | — | — | The radius within which entities will be pulled toward the vortex. Supports expressions. Example: `5 + %level% * 0.5` |
| `duration` | Expression | ✅ | — | — | How many ticks to pull entities before dealing damage. Supports expressions. Example: `20 * %level%` |
| `damage` | Expression | ✅ | — | — | The damage dealt to all affected entities at the end of the vortex. Supports expressions. Example: `%level% * 2` |
| `pull_strength` | Expression | — | `0.3` | — | How strongly entities are pulled per tick. Supports expressions. Example: `0.1 + %level% * 0.02` |
| `whitelist` | Entity List | — | — | — | A list of entity types to exclusively target. If omitted, all entities are targeted. |
| `blacklist` | Entity List | — | — | — | A list of entity types to exclude from the vortex. |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectVortex.kt`).

- **Source Description**: Pulls nearby entities toward the trigger location for a duration, then deals damage to all affected entities.
- **Categories**: `movement`, `combat`
- **Requires Trigger Data**: `PLAYER`

## Configuration Example

```yaml
- id: vortex
  args:
    radius: 6 # The radius in blocks to pull entities from
    duration: 40 # The duration in ticks to pull entities
    damage: 5.0 # The damage dealt to all affected entities at the end
    pull_strength: 0.3 # (Optional) The strength of the pull each tick, defaults to 0.3
    whitelist: # (Optional) A list of entity types to pull, if not specified all entities will be pulled
      - zombie
      - skeleton
    blacklist: # (Optional) A list of entity types to ignore, if not specified no entities will be ignored
      - ender_dragon
      - wither
      - warden
      - elder_guardian
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

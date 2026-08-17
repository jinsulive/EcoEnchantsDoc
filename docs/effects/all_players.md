---
title: all_players
titleZh: all_players
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# all_players <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Runs a set of effects on every online player.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `all_players` |
| Module | libreforge |
| Category | Utility |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `effects` | Effect List | ✅ | — | — | The effects to run on every online player. |
| `run-type` | String | — | — | `normal`, `cycle`, `random` | The chain executor to use. |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectAllPlayers.kt`).

- **Source Description**: Runs a set of effects on every online player.
- **Categories**: `meta`

## Configuration Example

```yaml
- id: all_players
  args:
    effects: # The effects to run for each player
      - id: damage_victim
        args:
          damage: 2
          true-damage: true
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

---
title: random_player
titleZh: random_player
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# random_player <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Runs effects for a random player on the server

## Overview

| Property | Value |
|----------|-------|
| Type ID | `random_player` |
| Module | libreforge |
| Category | Utility |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `effects` | Effect List | ✅ | — | — | The list of effects to run on the randomly selected player. |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectRandomPlayer.kt`).

- **Source Description**: Picks a random online player and runs the specified effects targeting them.
- **Categories**: `meta`

## Configuration Example

```yaml
- id: random_player
  args:
    effects: # The effects to run for the player
      - id: kick
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

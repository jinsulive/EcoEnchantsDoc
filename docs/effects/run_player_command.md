---
title: run_player_command
titleZh: run_player_command
category: effects
subcategory: audio_message
tags:
  - libreforge
outline: deep
---

# run_player_command <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Runs a command as a player

## Overview

| Property | Value |
|----------|-------|
| Type ID | `run_player_command` |
| Module | libreforge |
| Category | Audio & Message |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `command` | String List | ✅ | — | — | The command or list of commands to run as the player. Use %player% and %victim% as placeholders. Example: `me does a flip!, kill %victim%` |
| `as_op` | Boolean | — | `false` | — | Whether to temporarily grant the player operator permissions while running the commands. |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectRunPlayerCommand.kt`).

- **Source Description**: Runs one or more commands as the player when triggered.
- **Categories**: `chat`
- **Requires Trigger Data**: `PLAYER`

## Configuration Example

```yaml
- id: run_player_command
  args:
    command: "kick %victim% Slapped out of the server" # Supports %player% and %victim% as placeholders (victim will only be used if there is a player as a victim for this effect)
    as_op: true # If the command should be ran as op
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

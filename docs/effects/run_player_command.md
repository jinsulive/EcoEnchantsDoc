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

| Parameter | Description |
|-----------|-------------|
| `command` | Supports %player% and %victim% as placeholders (victim will only be used if there is a player as a victim for this effect) |
| `as_op` | If the command should be ran as op |

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

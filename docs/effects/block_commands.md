---
title: block_commands
titleZh: block_commands
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# block_commands <Badge type="info" text="libreforge" /> <Badge type="warning" text="Permanent" />

> Prevents the execution of certain commands

## Overview

| Property | Value |
|----------|-------|
| Type ID | `block_commands` |
| Module | libreforge |
| Category | Utility |
| Effect Type | Permanent |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `messages` | String List | — | — | — | Messages to send to the player when a blocked command is attempted. Example: `&cYou can't use that command right now!, &7Complete your quest first.` |
| `commands` | String List | ✅ | — | — | The list of command names to block (without the leading slash). |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectBlockCommands.kt`).

- **Source Description**: Prevents the player from using specific commands while the holder is active.
- **Categories**: `player`, `chat`

## Configuration Example

```yaml
- id: block_commands
  args:
    messages: # (Optional) the messages to send if a player tries to run the commands
      - "&cYou can't do this!"
    commands: # The list of commands to block
      - rtp
      - spawn
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

---
title: run_command
titleZh: run_command
category: effects
subcategory: audio_message
tags:
  - libreforge
outline: deep
---

# run_command <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Runs one or more commands as the console when triggered.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `run_command` |
| Module | libreforge |
| Category | Audio & Message |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `commands` / `command` (either) | String List | ✅ | — | — | The command or list of commands to run as console. Use %player% and %victim% as placeholders. Example: `say %player% used an ability!, effect give %player% speed 5 1` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectRunCommand.kt`).

- **Source Description**: Runs one or more commands as the console when triggered.
- **Categories**: `chat`

## Configuration Example

```yaml
- id: run_command
  args:
    command: "tempban %victim% 24h Hardcore Mode Ban, killed by %player%" # Supports %player% and %victim% as placeholders (victim will only be used if there is a player as a victim for this effect)
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

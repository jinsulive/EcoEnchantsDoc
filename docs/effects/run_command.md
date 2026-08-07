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

> Runs a command from console

## Overview

| Property | Value |
|----------|-------|
| Type ID | `run_command` |
| Module | libreforge |
| Category | Audio & Message |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `command` | Supports %player% and %victim% as placeholders (victim will only be used if there is a player as a victim for this effect) |

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

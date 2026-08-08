---
title: send_title
titleZh: send_title
category: effects
subcategory: audio_message
tags:
  - libreforge
outline: deep
---

# send_title <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Send a title/subtitle to the player

## Overview

| Property | Value |
|----------|-------|
| Type ID | `send_title` |
| Module | libreforge |
| Category | Audio & Message |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `title` | String | ✅ | — | — | The main title text to display. Supports placeholders. Example: `Level Up!` |
| `subtitle` | String | ✅ | — | — | The subtitle text to display below the title. Supports placeholders. Example: `You reached level %player_level%!` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectSendTitle.kt`).

- **Source Description**: Sends a title and subtitle to the player's screen.
- **Categories**: `visual`, `chat`
- **Requires Trigger Data**: `PLAYER`

## Configuration Example

```yaml
- id: send_title
  args:
    title: "&aCongratulations %player%!" # The title
    subtitle: "&3You won $1000" # The subtitle
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

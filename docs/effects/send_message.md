---
title: send_message
titleZh: send_message
category: effects
subcategory: audio_message
tags:
  - libreforge
outline: deep
---

# send_message <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Sends one or more chat messages to the player.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `send_message` |
| Module | libreforge |
| Category | Audio & Message |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `message` / `messages` (either) | String List | ✅ | — | — | The message or list of messages to send to the player. Supports placeholders. Example: `Hi %player_name%!, You have %player_level% levels.` |
| `action_bar` | Boolean | — | `false` | — | Whether to display the first message in the action bar instead of chat. |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectSendMessage.kt`).

- **Source Description**: Sends one or more chat messages to the player.
- **Categories**: `chat`
- **Requires Trigger Data**: `PLAYER`

## Configuration Example

```yaml
- id: send_message
  args:
    message: "&cYou have been blinded!" # The message to send
    messages: # You can also specify a list of messages
      - ""
      - "&fYou have been blinded!"
      - ""
    action_bar: true # If the message should go to the action bar instead of chat
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

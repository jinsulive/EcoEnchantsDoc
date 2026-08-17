---
title: send_minimessage
titleZh: send_minimessage
category: effects
subcategory: audio_message
tags:
  - libreforge
outline: deep
---

# send_minimessage <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Sends one or more MiniMessage-formatted messages to the player, with optional action bar display.

> **Requires:** Paper

## Overview

| Property | Value |
|----------|-------|
| Type ID | `send_minimessage` |
| Module | libreforge |
| Category | Audio & Message |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `message` / `messages` (either) | String_list | ✅ | — | — | The MiniMessage-formatted message(s) to send. Supports placeholders. |
| `action_bar` | Boolean | — | `false` | — | Whether to display the first message in the action bar instead of chat. Defaults to false. |

## Configuration Example

```yaml
- id: send_minimessage
  args:
    message: "<red>You have been blinded!" # The message to send
    action_bar: true # If the message should go to the action bar instead of chat
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

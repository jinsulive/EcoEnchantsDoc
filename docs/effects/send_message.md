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

> Sends the player a message

## Overview

| Property | Value |
|----------|-------|
| Type ID | `send_message` |
| Module | libreforge |
| Category | Audio & Message |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `message` | The message to send |
| `messages` | You can also specify a list of messages |
| `action_bar` | If the message should go to the action bar instead of chat |

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

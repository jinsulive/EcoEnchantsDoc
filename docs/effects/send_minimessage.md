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

> Sends the player a minimessage message, supports clickable components, etc.

> **Requires:** Paper

## Overview

| Property | Value |
|----------|-------|
| Type ID | `send_minimessage` |
| Module | libreforge |
| Category | Audio & Message |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `message` | The message to send |
| `action_bar` | If the message should go to the action bar instead of chat |

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

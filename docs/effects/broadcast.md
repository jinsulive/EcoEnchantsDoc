---
title: broadcast
titleZh: broadcast
category: effects
subcategory: audio_message
tags:
  - libreforge
outline: deep
---

# broadcast <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Send a message to everyone online

## Overview

| Property | Value |
|----------|-------|
| Type ID | `broadcast` |
| Module | libreforge |
| Category | Audio & Message |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `message` | String List | ✅ | — | — | The message(s) to broadcast to all players. Example: `&aWelcome to the server, %player%!` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectBroadcast.kt`).

- **Source Description**: Broadcasts one or more messages to all online players.
- **Categories**: `chat`

## Configuration Example

```yaml
- id: broadcast
  args:
    message: "%player%&f has just won &a$1000&f!" # The message to send
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

---
title: kick
titleZh: kick
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# kick <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Kicks the player

## Overview

| Property | Value |
|----------|-------|
| Type ID | `kick` |
| Module | libreforge |
| Category | Utility |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `message` | String | ✅ | — | — | The message to send \| Source: The kick screen message shown to the player. Example: `&cYou have been kicked, %player%.` |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectKick.kt`).

- **Source Description**: Kicks the player from the server with a specified message.
- **Categories**: `player`
- **Requires Trigger Data**: `PLAYER`

## Configuration Example

```yaml
- id: kick
  args:
    message: "&cYou have been kicked!" # The message to send
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

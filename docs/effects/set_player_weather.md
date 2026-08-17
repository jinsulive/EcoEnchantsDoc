---
title: set_player_weather
titleZh: set_player_weather
category: effects
subcategory: player
tags:
  - libreforge
outline: deep
---

# set_player_weather <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Overrides the weather shown to the player on their client, without affecting the server.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `set_player_weather` |
| Module | libreforge |
| Category | Player, Visual |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `weather` | String | ✅ | — | `clear`, `downfall` | The client weather to display. |
| `reset` | Boolean | — | `false` | — | If true, resets the player's weather back to the server weather. |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectSetPlayerWeather.kt`).

- **Source Description**: Overrides the weather shown to the player on their client, without affecting the server.

- **Categories**: `player, visual`

## Configuration Example

```yaml
- id: set_player_weather
  args:
    weather: <value>
    reset: <value>
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

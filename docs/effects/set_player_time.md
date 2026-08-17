---
title: set_player_time
titleZh: set_player_time
category: effects
subcategory: player
tags:
  - libreforge
outline: deep
---

# set_player_time <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Overrides the time of day shown to the player on their client, without affecting the server.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `set_player_time` |
| Module | libreforge |
| Category | Player, Visual |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `time` | Integer | ✅ | — | — | The time in ticks to display (0=dawn, 6000=noon, 12000=dusk, 18000=midnight). |
| `relative` | Boolean | — | `false` | — | If true, the time is applied relative to the world's current time instead of as a fixed value. |
| `reset` | Boolean | — | `false` | — | If true, resets the player's time back to the server time. |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectSetPlayerTime.kt`).

- **Source Description**: Overrides the time of day shown to the player on their client, without affecting the server.

- **Categories**: `player, visual`

## Configuration Example

```yaml
- id: set_player_time
  args:
    time: <value>
    relative: <value>
    reset: <value>
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

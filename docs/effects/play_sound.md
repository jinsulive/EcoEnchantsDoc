---
title: play_sound
titleZh: play_sound
category: effects
subcategory: audio_message
tags:
  - libreforge
outline: deep
---

# play_sound <Badge type="info" text="libreforge" /> <Badge type="info" text="Triggered" />

> Plays a sound to the triggering player at their location.

## Overview

| Property | Value |
|----------|-------|
| Type ID | `play_sound` |
| Module | libreforge |
| Category | Audio & Message |
| Effect Type | Triggered |

## Parameters

| Parameter | Type | Required | Default | Choices | Description |
|-----------|------|----------|---------|---------|-------------|
| `sound` | Sound | ✅ | — | — | The sound to play. Supports Minecraft sound names and resource pack sounds. |
| `pitch` | Expression | ✅ | — | — | The pitch of the sound, between 0.5 and 2.0. Supports expressions. |
| `volume` | Expression | ✅ | — | — | The volume of the sound. Supports expressions. |
| `category` | String | — | `MASTER` | `SoundCategory.entries.map` | The sound category to play the sound in. |

## 📝 Source Notes

> The following information is from the libreforge source code (`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectPlaySound.kt`).

- **Source Description**: Plays a sound to the triggering player at their location.
- **Categories**: `sound`
- **Requires Trigger Data**: `PLAYER`

## Configuration Example

```yaml
- id: play_sound
  args:
    sound: entity_wolf_growl # The sound to play (https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Sound.html)
    pitch: 0.7 # The pitch of the sound (0.5 - 2)
    volume: 10 # The volume of the sound
    category: MASTER # The sound category (https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/SoundCategory.html)
  ...other config (eg triggers, filters, mutators, etc)
```

## Related Pages

- [All Effects](./)
- [Guide: Effect Basics](../guide/effect-basics)
- [All Triggers](../triggers/)
- [All Conditions](../conditions/)

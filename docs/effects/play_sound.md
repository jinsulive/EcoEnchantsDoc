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

> Plays a sound to the player

## Overview

| Property | Value |
|----------|-------|
| Type ID | `play_sound` |
| Module | libreforge |
| Category | Audio & Message |
| Effect Type | Triggered |

## Parameters

| Parameter | Description |
|-----------|-------------|
| `sound` | The sound to play (https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Sound.html) |
| `pitch` | The pitch of the sound (0.5 - 2) |
| `volume` | The volume of the sound |
| `category` | The sound category (https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/SoundCategory.html) |

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

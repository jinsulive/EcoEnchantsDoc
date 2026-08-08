---
title: play_sound
titleEn: play_sound
category: effects
subcategory: audio_message
tags:
  - libreforge
outline: deep
---

# play_sound <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Plays a sound to the player

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `play_sound` |
| 所属模块 | libreforge |
| 分类 | 音频与消息（Audio & Message） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `sound` | Sound | ✅ | — | — | The sound to play (https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Sound.html) \| Source: The sound to play. Supports Minecraft sound names and resource pack sounds. |
| `pitch` | Expression(数学表达式) | ✅ | — | — | The pitch of the sound (0.5 - 2) \| Source: The pitch of the sound, between 0.5 and 2.0. Supports expressions. |
| `volume` | Expression(数学表达式) | ✅ | — | — | The volume of the sound \| Source: The volume of the sound. Supports expressions. |
| `category` | String | — | `MASTER` | — | The sound category (https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/SoundCategory.html) \| Source: The sound category to play the sound in. |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectPlaySound.kt`）。

- **源码描述**: Plays a sound to the triggering player at their location.
- **所属分类**: `sound`
- **需要触发器数据**: `PLAYER`

## 配置示例

```yaml
- id: play_sound
  args:
    sound: entity_wolf_growl # The sound to play (https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Sound.html)
    pitch: 0.7 # The pitch of the sound (0.5 - 2)
    volume: 10 # The volume of the sound
    category: MASTER # The sound category (https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/SoundCategory.html)
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)

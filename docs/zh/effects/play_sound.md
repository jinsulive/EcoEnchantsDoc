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

| 参数名 | 说明 |
|--------|------|
| `sound` | The sound to play (https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Sound.html) |
| `pitch` | The pitch of the sound (0.5 - 2) |
| `volume` | The volume of the sound |
| `category` | The sound category (https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/SoundCategory.html) |

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

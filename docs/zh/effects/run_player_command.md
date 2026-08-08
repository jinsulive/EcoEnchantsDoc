---
title: run_player_command
titleEn: run_player_command
category: effects
subcategory: audio_message
tags:
  - libreforge
outline: deep
---

# run_player_command <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Runs a command as a player

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `run_player_command` |
| 所属模块 | libreforge |
| 分类 | 音频与消息（Audio & Message） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `command` | String List | ✅ | — | — | Supports %player% and %victim% as placeholders (victim will only be used if there is a player as a victim for this effect) \| Source: The command or list of commands to run as the player. Use %player% and %victim% as placeholders. Example: `me does a flip!, kill %victim%` |
| `as_op` | Boolean | — | `false` | — | If the command should be ran as op \| Source: Whether to temporarily grant the player operator permissions while running the commands. |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectRunPlayerCommand.kt`）。

- **源码描述**: Runs one or more commands as the player when triggered.
- **所属分类**: `chat`
- **需要触发器数据**: `PLAYER`

## 配置示例

```yaml
- id: run_player_command
  args:
    command: "kick %victim% Slapped out of the server" # Supports %player% and %victim% as placeholders (victim will only be used if there is a player as a victim for this effect)
    as_op: true # If the command should be ran as op
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)

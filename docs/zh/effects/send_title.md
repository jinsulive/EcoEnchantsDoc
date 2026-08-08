---
title: send_title
titleEn: send_title
category: effects
subcategory: audio_message
tags:
  - libreforge
outline: deep
---

# send_title <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Send a title/subtitle to the player

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `send_title` |
| 所属模块 | libreforge |
| 分类 | 音频与消息（Audio & Message） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `title` | String | ✅ | — | — | The title \| Source: The main title text to display. Supports placeholders. Example: `Level Up!` |
| `subtitle` | String | ✅ | — | — | The subtitle \| Source: The subtitle text to display below the title. Supports placeholders. Example: `You reached level %player_level%!` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectSendTitle.kt`）。

- **源码描述**: Sends a title and subtitle to the player's screen.
- **所属分类**: `visual`, `chat`
- **需要触发器数据**: `PLAYER`

## 配置示例

```yaml
- id: send_title
  args:
    title: "&aCongratulations %player%!" # The title
    subtitle: "&3You won $1000" # The subtitle
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)

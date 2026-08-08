---
title: send_message
titleEn: send_message
category: effects
subcategory: audio_message
tags:
  - libreforge
outline: deep
---

# send_message <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 向玩家发送消息。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `send_message` |
| 所属模块 | libreforge |
| 分类 | 音频与消息（Audio & Message） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `message` | String List | ✅ | — | — | 要发送给玩家的消息或消息列表。支持占位符。示例：`Hi %player_name%!, You have %player_level% levels.` |
| `messages` | String List | ✅ | — | — | 你也可以指定一个消息列表。 |
| `action_bar` | Boolean | — | `false` | — | 是否在快捷栏上方（action bar）显示消息而非聊天栏。 |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectSendMessage.kt`）。

- **源码描述**: 向玩家发送一条或多条聊天消息。
- **所属分类**: `chat`
- **需要触发器数据**: `PLAYER`

## 配置示例

```yaml
- id: send_message
  args:
    message: "&cYou have been blinded!" # The message to send
    messages: # You can also specify a list of messages
      - ""
      - "&fYou have been blinded!"
      - ""
    action_bar: true # If the message should go to the action bar instead of chat
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)

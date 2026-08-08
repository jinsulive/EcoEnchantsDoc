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

> Sends the player a message

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
| `message` | String List | ✅ | — | — | The message to send \| Source: The message or list of messages to send to the player. Supports placeholders. Example: `Hi %player_name%!, You have %player_level% levels.` |
| `messages` | String List | ✅ | — | — | You can also specify a list of messages \| Source: The message or list of messages to send to the player. Supports placeholders. Example: `Hi %player_name%!, You have %player_level% levels.` |
| `action_bar` | Boolean | — | `false` | — | If the message should go to the action bar instead of chat \| Source: Whether to display the first message in the action bar instead of chat. |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectSendMessage.kt`）。

- **源码描述**: Sends one or more chat messages to the player.
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

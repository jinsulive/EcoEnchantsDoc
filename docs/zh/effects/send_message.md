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

| 参数名 | 说明 |
|--------|------|
| `message` | The message to send |
| `messages` | You can also specify a list of messages |
| `action_bar` | If the message should go to the action bar instead of chat |

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

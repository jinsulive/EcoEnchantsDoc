---
title: send_minimessage
titleEn: send_minimessage
category: effects
subcategory: audio_message
tags:
  - libreforge
outline: deep
---

# send_minimessage <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Sends the player a minimessage message, supports clickable components, etc.

> **需要依赖：** Paper

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `send_minimessage` |
| 所属模块 | libreforge |
| 分类 | 音频与消息（Audio & Message） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `message` | The message to send |
| `action_bar` | If the message should go to the action bar instead of chat |

## 配置示例

```yaml
- id: send_minimessage
  args:
    message: "<red>You have been blinded!" # The message to send
    action_bar: true # If the message should go to the action bar instead of chat
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)

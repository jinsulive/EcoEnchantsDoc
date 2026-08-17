---
title: broadcast
titleEn: broadcast
category: effects
subcategory: audio_message
tags:
  - libreforge
outline: deep
---

# broadcast <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 向所有在线玩家发送消息。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `broadcast` |
| 所属模块 | libreforge |
| 分类 | 音频与消息（Audio & Message） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `message` / `messages`（任一） | String List | ✅ | — | — | The message(s) to broadcast to all players. 例: `&aWelcome to the server, %player%!` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectBroadcast.kt`）。

- **源码描述**: 向所有在线玩家广播一条或多条消息。
- **所属分类**: `chat`

## 配置示例

```yaml
- id: broadcast
  args:
    message: "%player%&f has just won &a$1000&f!" # The message to send
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)

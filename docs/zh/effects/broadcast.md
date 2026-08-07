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

> Send a message to everyone online

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `broadcast` |
| 所属模块 | libreforge |
| 分类 | 音频与消息（Audio & Message） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `message` | The message to send |

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

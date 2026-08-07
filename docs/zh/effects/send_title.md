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

| 参数名 | 说明 |
|--------|------|
| `title` | The title |
| `subtitle` | The subtitle |

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

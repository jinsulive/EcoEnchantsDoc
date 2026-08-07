---
title: run_command
titleEn: run_command
category: effects
subcategory: audio_message
tags:
  - libreforge
outline: deep
---

# run_command <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Runs a command from console

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `run_command` |
| 所属模块 | libreforge |
| 分类 | 音频与消息（Audio & Message） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `command` | Supports %player% and %victim% as placeholders (victim will only be used if there is a player as a victim for this effect) |

## 配置示例

```yaml
- id: run_command
  args:
    command: "tempban %victim% 24h Hardcore Mode Ban, killed by %player%" # Supports %player% and %victim% as placeholders (victim will only be used if there is a player as a victim for this effect)
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)

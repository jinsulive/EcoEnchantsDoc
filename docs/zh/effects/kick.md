---
title: kick
titleEn: kick
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# kick <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Kicks the player

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `kick` |
| 所属模块 | libreforge |
| 分类 | 工具（Utility） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `message` | The message to send |

## 配置示例

```yaml
- id: kick
  args:
    message: "&cYou have been kicked!" # The message to send
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)

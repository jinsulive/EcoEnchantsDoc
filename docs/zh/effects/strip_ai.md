---
title: strip_ai
titleEn: strip_ai
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# strip_ai <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Strips a mob's AI temporarily

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `strip_ai` |
| 所属模块 | libreforge |
| 分类 | 工具（Utility） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `duration` | The amount of ticks to strip AI for |

## 配置示例

```yaml
- id: strip_ai
  args:
    duration: 60 # The amount of ticks to strip AI for
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)

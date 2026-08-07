---
title: set_freeze_ticks
titleEn: set_freeze_ticks
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# set_freeze_ticks <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Sets the victims freeze ticks (frost / powdered snow effect)

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `set_freeze_ticks` |
| 所属模块 | libreforge |
| 分类 | 工具（Utility） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `ticks` | The ticks to set (How long the victim has been in snow) |

## 配置示例

```yaml
- id: set_freeze_ticks
  args:
    ticks: 20 # The ticks to set (How long the victim has been in snow)
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)

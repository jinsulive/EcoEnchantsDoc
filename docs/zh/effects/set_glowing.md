---
title: set_glowing
titleEn: set_glowing
category: effects
subcategory: visual
tags:
  - libreforge
outline: deep
---

# set_glowing <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Sets an entity's glowing state, optionally reverting it after a duration

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `set_glowing` |
| 所属模块 | libreforge |
| 分类 | 视觉（Visual） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `glowing` | (Optional) Whether to enable glowing, defaults to true |
| `duration` | (Optional) Ticks before the glowing state is reverted |

## 配置示例

```yaml
- id: set_glowing
  args:
    glowing: true # (Optional) Whether to enable glowing, defaults to true
    duration: 100 # (Optional) Ticks before the glowing state is reverted
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)

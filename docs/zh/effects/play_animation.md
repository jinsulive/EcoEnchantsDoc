---
title: play_animation
titleEn: play_animation
category: effects
subcategory: visual
tags:
  - libreforge
outline: deep
---

# play_animation <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Plays a Model Engine animation (The entity must have a custom model active)

> **需要依赖：** Model Engine

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `play_animation` |
| 所属模块 | libreforge |
| 分类 | 视觉（Visual） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `animation` | The name of the animation |

## 配置示例

```yaml
- id: play_animation
  args:
    animation: strike # The name of the animation
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)

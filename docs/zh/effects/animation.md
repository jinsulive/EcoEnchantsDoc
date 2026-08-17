---
title: animation
titleEn: animation
category: effects
subcategory: visual
tags:
  - libreforge
outline: deep
---

# animation <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 播放动画。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `animation` |
| 所属模块 | libreforge |
| 分类 | 视觉（Visual） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `animation` | String | ✅ | — | `spin_item` | The animation to play. |
| `animation_args` | 子节 | — | — | — | **子节参数（嵌套配置）** —— 详见下方子节字段。 |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectAnimation.kt`）。

- **源码描述**: 在触发位置播放指定的动画。
- **所属分类**: `visual`
- **需要触发器数据**: `LOCATION`
- **继承子配置**: 是（此效果继承子配置，详见对应子配置页）

## 配置示例

```yaml
- id: animation
  args:
    animation: spin_item # The ID of the animation
    animation_args: # Arguments for the animation
      item: "ecoitems:hardened_diamond_sword finishing:5"
      amount: 4
      duration: 100
      radius: 2
      speed: 1
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)

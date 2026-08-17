---
title: stop_animation
titleEn: stop_animation
category: effects
subcategory: bettermodel
tags:
  - libreforge
outline: deep
---

# stop_animation <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 停止触发实体或受害者身上的 BetterModel 动画。

> **需要依赖：** BetterModel

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `stop_animation` |
| 所属模块 | libreforge |
| 分类 | Visual, Entity |
| 组件类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `animation` | String | ✅ | — | — | The name of the animation to stop. |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/integrations/bettermodel/impl/EffectStopAnimation.kt`）。

- **源码描述**: 停止触发实体或受害者身上的 BetterModel 动画。

- **所属分类**: `visual, entity`

## 配置示例

```yaml
- id: stop_animation
  args:
    animation: <value>
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)

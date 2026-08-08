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

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `glowing` | Boolean | — | `true` | — | (Optional) Whether to enable glowing, defaults to true \| Source: Whether to enable or disable the glowing effect. |
| `duration` | Expression(数学表达式) | — | — | — | (Optional) Ticks before the glowing state is reverted \| Source: How long to apply the glow, in ticks. Reverts when expired. Supports expressions. Example: `20 * %level%` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectSetGlowing.kt`）。

- **源码描述**: Makes the target entity glow, optionally reverting after a duration.
- **所属分类**: `visual`
- **需要触发器数据**: `VICTIM`

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

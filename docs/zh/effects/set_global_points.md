---
title: set_global_points
titleEn: set_global_points
category: effects
subcategory: economy
tags:
  - libreforge
outline: deep
---

# set_global_points <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 设置全局点数（不了解可查看点数百科页面）。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `set_global_points` |
| 所属模块 | libreforge |
| 分类 | 经济（Economy） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `type` | String | ✅ | — | — | 要设置的全局点数类型。 |
| `amount` | Expression(数学表达式) | ✅ | — | — | 要设置成的数值。支持表达式。示例：`%level% * 10` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectSetGlobalPoints.kt`）。

- **源码描述**: 将全局点数计数设置为指定值。
- **所属分类**: `economy`, `points`

## 配置示例

```yaml
- id: set_global_points
  args:
    type: global_stock # The point to set
    amount: 0 # The amount to set it to
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)

---
title: multiply_item_points
titleEn: multiply_item_points
category: effects
subcategory: economy
tags:
  - libreforge
outline: deep
---

# multiply_item_points <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Multiply item points (check the points wiki page if you don't know what these are)

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `multiply_item_points` |
| 所属模块 | libreforge |
| 分类 | 经济（Economy） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `type` | String | ✅ | — | — | The point to multiply \| Source: The item point type to multiply. |
| `multiplier` | Expression(数学表达式) | ✅ | — | — | The multiplier \| Source: The multiplier to apply to the item's point value. Supports expressions. Example: `1 + %level% * 0.1` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectMultiplyItemPoints.kt`）。

- **源码描述**: Multiplies a point value stored on the found item by the specified amount.
- **所属分类**: `economy`, `points`

## 配置示例

```yaml
- id: multiply_item_points
  args:
    type: point_name # The point to multiply
    multiplier: 2.5 # The multiplier
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)

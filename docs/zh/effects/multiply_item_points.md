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

> 倍率化物品点数（不了解可查看点数百科页面）。

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
| `type` | String | ✅ | — | — | The item point type to multiply. |
| `multiplier` | Expression | ✅ | — | — | The multiplier to apply to the item's point value. Supports expressions. 例: `1 + %level% * 0.1` |
| `amount` | Expression | — | — | — |  |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectMultiplyItemPoints.kt`）。

- **源码描述**: 以指定数值倍率化掉落物品上存储的点数值。
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

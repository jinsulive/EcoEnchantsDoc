---
title: give_item_points
titleEn: give_item_points
category: effects
subcategory: economy
tags:
  - libreforge
outline: deep
---

# give_item_points <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 增加/扣除物品点数（不了解可查看点数百科页面）。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `give_item_points` |
| 所属模块 | libreforge |
| 分类 | 经济（Economy） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `type` | String | ✅ | — | — | The item point type to add to. |
| `amount` | Expression | ✅ | — | — | The amount of points to add to the item. Supports expressions. 例: `%level% * 5` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectGiveItemPoints.kt`）。

- **源码描述**: 向触发物品上的指定点数类型添加点数。
- **所属分类**: `economy`, `points`

## 配置示例

```yaml
- id: give_item_points
  args:
    type: point_name # The point to add/subtract
    amount: 1 # The amount to add/subtract
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)

---
title: set_item_points
titleEn: set_item_points
category: effects
subcategory: economy
tags:
  - libreforge
outline: deep
---

# set_item_points <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 设置物品点数（不了解可查看点数百科页面）。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `set_item_points` |
| 所属模块 | libreforge |
| 分类 | 经济（Economy） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `type` | String | ✅ | — | — | 要设置的物品点数类型。 |
| `amount` | Expression | ✅ | — | — | 要将物品点数计数器设置成的数值。支持数学表达式。 例: `%level% * 10` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectSetItemPoints.kt`）。

- **源码描述**: 将触发物品上的点数值设置为指定数量。
- **所属分类**: `economy`, `points`
- **需要触发器数据**: `ITEM`

## 配置示例

```yaml
- id: set_item_points
  args:
    type: blocks_broken # The point to set
    amount: 0 # The amount to set it to
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)

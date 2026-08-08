---
title: points_equal
titleEn: points_equal
category: conditions
subcategory: economy
tags:
  - libreforge
outline: deep
---

# points_equal <Badge type="info" text="libreforge" />

> 需要玩家恰好拥有一定数量的点数（不了解可查看点数百科页面）。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `points_equal` |
| 所属模块 | libreforge |
| 分类 | 经济与点数（Economy & Points） |

::: tip 反向参数
每个条件都支持可选的 `inverse` 参数，用于取反条件。
:::

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `type` | String | ✅ | — | — | 要检查的点数类型标识。 |
| `amount` | Expression(数学表达式) | ✅ | — | — | 点数数量（玩家必须拥有的精确点数）。示例：`%level% * 10` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/conditions/impl/ConditionPointsEqual.kt`）。

- **源码描述**: 当玩家指定类型的点数恰好等于给定数量时通过。
- **所属分类**: `economy`

## 配置示例

```yaml
- id: points_equal
  args:
    type: g_souls # The type of point
    amount: 10 # The amount of points
```

## 关联页面

- [所有条件](./)
- [指南：配置条件](../guide/effect-basics)
- [所有效果](../effects/)
- [所有触发器](../triggers/)

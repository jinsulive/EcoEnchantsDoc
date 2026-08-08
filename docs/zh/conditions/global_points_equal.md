---
title: global_points_equal
titleEn: global_points_equal
category: conditions
subcategory: economy
tags:
  - libreforge
outline: deep
---

# global_points_equal <Badge type="info" text="libreforge" />

> 需要服务器的点数恰好等于一定数量（不了解可查看点数百科页面）。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `global_points_equal` |
| 所属模块 | libreforge |
| 分类 | 经济与点数（Economy & Points） |

::: tip 反向参数
每个条件都支持可选的 `inverse` 参数，用于取反条件。
:::

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `type` | String | ✅ | — | — | 点数类型（全局点数类型标识）。 |
| `amount` | Expression(数学表达式) | ✅ | — | — | 点数数量（要求的精确全局点数）。示例：`%level% * 10` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/conditions/impl/ConditionGlobalPointsEqual.kt`）。

- **源码描述**: 当指定类型的全局点数恰好等于指定数量时通过。
- **所属分类**: `economy`

## 配置示例

```yaml
- id: global_points_equal
  args:
    type: g_souls # The type of point
    amount: 10 # The amount of points
```

## 关联页面

- [所有条件](./)
- [指南：配置条件](../guide/effect-basics)
- [所有效果](../effects/)
- [所有触发器](../triggers/)

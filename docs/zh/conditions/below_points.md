---
title: below_points
titleEn: below_points
category: conditions
subcategory: economy
tags:
  - libreforge
outline: deep
---

# below_points <Badge type="info" text="libreforge" />

> Requires a player to have a below amount of points (check the points wiki page if you don't know what these are)

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `below_points` |
| 所属模块 | libreforge |
| 分类 | 经济与点数（Economy & Points） |

::: tip 反向参数
每个条件都支持可选的 `inverse` 参数，用于取反条件。
:::

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `type` | String | ✅ | — | — | The type of point \| Source: The points type identifier. |
| `amount` | Expression(数学表达式) | ✅ | — | — | The maximum amount of points \| Source: The points threshold; the player must be below this amount. Example: `%level% * 10` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/conditions/impl/ConditionBelowPoints.kt`）。

- **源码描述**: Passes when the player's points of the given type are below the specified amount.
- **所属分类**: `economy`

## 配置示例

```yaml
- id: below_points
  args:
    type: g_souls # The type of point
    amount: 10 # The maximum amount of points
```

## 关联页面

- [所有条件](./)
- [指南：配置条件](../guide/effect-basics)
- [所有效果](../effects/)
- [所有触发器](../triggers/)

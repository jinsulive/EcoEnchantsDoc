---
title: above_points
titleEn: above_points
category: conditions
subcategory: economy
tags:
  - libreforge
outline: deep
---

# above_points <Badge type="info" text="libreforge" />

> 需要玩家拥有一定数量的点数（不了解可查看点数百科页面）。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `above_points` |
| 所属模块 | libreforge |
| 分类 | 经济与点数（Economy & Points） |

::: tip 反向参数
每个条件都支持可选的 `inverse` 参数，用于取反条件。
:::

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `type` | String | ✅ | — | — | The points type identifier. |
| `amount` | Expression | ✅ | — | — | The minimum number of points required. 例: `%level% * 10` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/conditions/impl/ConditionAbovePoints.kt`）。

- **源码描述**: 当玩家指定类型的点数达到或高于最小值时通过。
- **所属分类**: `economy`

## 配置示例

```yaml
- id: above_points
  args:
    type: g_souls # The type of point
    amount: 10 # The minimum amount of points
```

## 关联页面

- [所有条件](./)
- [指南：配置条件](../guide/effect-basics)
- [所有效果](../effects/)
- [所有触发器](../triggers/)

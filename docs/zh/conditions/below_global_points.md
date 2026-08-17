---
title: below_global_points
titleEn: below_global_points
category: conditions
subcategory: economy
tags:
  - libreforge
outline: deep
---

# below_global_points <Badge type="info" text="libreforge" />

> 需要服务器的点数低于一定数量。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `below_global_points` |
| 所属模块 | libreforge |
| 分类 | 经济与点数（Economy & Points） |

::: tip 反向参数
每个条件都支持可选的 `inverse` 参数，用于取反条件。
:::

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `type` | String | ✅ | — | — | The global points type identifier. |
| `amount` | Expression | ✅ | — | — | The global points threshold; the value must be below this amount. 例: `%level% * 10` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/conditions/impl/ConditionBelowGlobalPoints.kt`）。

- **源码描述**: 当指定类型的全局点数低于指定数量时通过。
- **所属分类**: `economy`

## 配置示例

```yaml
- id: below_global_points
  args:
    type: item_stock # The type of point
    amount: 10 # The maximum amount of points
```

## 关联页面

- [所有条件](./)
- [指南：配置条件](../guide/effect-basics)
- [所有效果](../effects/)
- [所有触发器](../triggers/)

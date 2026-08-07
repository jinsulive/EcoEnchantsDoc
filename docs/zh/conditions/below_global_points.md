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

> Requires the server to have a below an amount of points

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

| 参数名 | 说明 |
|--------|------|
| `type` | The type of point |
| `amount` | The maximum amount of points |

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

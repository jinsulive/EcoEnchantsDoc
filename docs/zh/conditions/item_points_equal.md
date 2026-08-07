---
title: item_points_equal
titleEn: item_points_equal
category: conditions
subcategory: economy
tags:
  - libreforge
outline: deep
---

# item_points_equal <Badge type="info" text="libreforge" />

> Requires an item to have exactly a certain amount of points (check the points wiki page if you don't know what these are)

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `item_points_equal` |
| 所属模块 | libreforge |
| 分类 | 经济与点数（Economy & Points） |

::: tip 反向参数
每个条件都支持可选的 `inverse` 参数，用于取反条件。
:::

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `type` | The type of point |
| `amount` | The amount of points to equal |

## 配置示例

```yaml
- id: item_points_equal
  args:
    type: point_name # The type of point
    amount: 10 # The amount of points to equal
```

## 关联页面

- [所有条件](./)
- [指南：配置条件](../guide/effect-basics)
- [所有效果](../effects/)
- [所有触发器](../triggers/)

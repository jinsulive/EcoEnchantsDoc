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

> Multiply item points (check the points wiki page if you don't know what these are)

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `multiply_item_points` |
| 所属模块 | libreforge |
| 分类 | 经济（Economy） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `type` | The point to multiply |
| `multiplier` | The multiplier |

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

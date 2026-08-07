---
title: set_global_points
titleEn: set_global_points
category: effects
subcategory: economy
tags:
  - libreforge
outline: deep
---

# set_global_points <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Set global points (check the points wiki page if you don't know what these are)

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `set_global_points` |
| 所属模块 | libreforge |
| 分类 | 经济（Economy） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `type` | The point to set |
| `amount` | The amount to set it to |

## 配置示例

```yaml
- id: set_global_points
  args:
    type: global_stock # The point to set
    amount: 0 # The amount to set it to
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)

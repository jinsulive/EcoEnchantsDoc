---
title: add_points
titleEn: add_points
category: effects
subcategory: economy
tags:
  - libreforge
outline: deep
---

# add_points <Badge type="info" text="libreforge" /> <Badge type="info" text="永久型" />

> Add / subtract points (check the points wiki page if you don't know what these are)

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `add_points` |
| 所属模块 | libreforge |
| 分类 | 经济（Economy） |
| 效果类型 | 永久型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `type` | The point to add/subtract |
| `amount` | The amount to add/subtract |

## 配置示例

```yaml
- id: add_points
  args:
    type: g_souls # The point to add/subtract
    amount: 1 # The amount to add/subtract
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)

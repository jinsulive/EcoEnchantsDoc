---
title: multiply_points
titleEn: multiply_points
category: effects
subcategory: economy
tags:
  - libreforge
outline: deep
---

# multiply_points <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Multiply points (check the points wiki page if you don't know what these are)

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `multiply_points` |
| 所属模块 | libreforge |
| 分类 | 经济（Economy） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `type` | The point to multiply |
| `multiplier` | The amount to multiply it by |

## 配置示例

```yaml
- id: multiply_points
  args:
    type: g_souls # The point to multiply
    multiplier: 2 # The amount to multiply it by
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)

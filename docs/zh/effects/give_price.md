---
title: give_price
titleEn: give_price
category: effects
subcategory: economy
tags:
  - libreforge
outline: deep
---

# give_price <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Pay a price to a player

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `give_price` |
| 所属模块 | libreforge |
| 分类 | 经济（Economy） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `value` | The value of the price |
| `type` | The price type |

## 配置示例

```yaml
- id: give_price
  args:
    value: 1000 # The value of the price
    type: coins # The price type
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)

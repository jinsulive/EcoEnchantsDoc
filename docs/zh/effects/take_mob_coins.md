---
title: take_mob_coins
titleEn: take_mob_coins
category: effects
subcategory: economy
tags:
  - libreforge
outline: deep
---

# take_mob_coins <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Take mob coins from the player

> **需要依赖：** UltimateMobCoins

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `take_mob_coins` |
| 所属模块 | libreforge |
| 分类 | 经济（Economy） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `amount` | The amount of mob coins to take |

## 配置示例

```yaml
- id: take_mob_coins
  args:
    amount: 10 # The amount of mob coins to take
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)

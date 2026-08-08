---
title: give_mob_coins
titleEn: give_mob_coins
category: effects
subcategory: economy
tags:
  - libreforge
outline: deep
---

# give_mob_coins <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 给予玩家怪物硬币。

> **需要依赖：** UltimateMobCoins

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `give_mob_coins` |
| 所属模块 | libreforge |
| 分类 | 经济（Economy） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `amount` | 要给予的怪物硬币数量。 |

## 配置示例

```yaml
- id: give_mob_coins
  args:
    amount: 10 # The amount of mob coins to give
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)

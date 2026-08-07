---
title: give_battlepass_tier
titleEn: give_battlepass_tier
category: effects
subcategory: economy
tags:
  - libreforge
outline: deep
---

# give_battlepass_tier <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Give battlepass tiers to the player.

> **需要依赖：** EcoBattlepass

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `give_battlepass_tier` |
| 所属模块 | libreforge |
| 分类 | 经济（Economy） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `amount` | The amount of tiers to give |
| `battlepass` | The battlepass ID |

## 配置示例

```yaml
- id: give_battlepass_tier
  args:
    amount: 2 # The amount of tiers to give
    battlepass: example # The battlepass ID
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)

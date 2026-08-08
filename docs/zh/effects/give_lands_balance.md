---
title: give_lands_balance
titleEn: give_lands_balance
category: effects
subcategory: economy
tags:
  - libreforge
outline: deep
---

# give_lands_balance <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 将金钱存入领地银行余额。

> **需要依赖：** Lands

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `give_lands_balance` |
| 所属模块 | libreforge |
| 分类 | 经济（Economy） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `amount` | 要给予的数量，负数表示收取。 |
| `only_trusted` | 是否仅受信任的玩家可以使用此效果。 |

## 配置示例

```yaml
- id: give_lands_balance
  args:
      amount: 1000 # The amount to give, use negative values to take
      only_trusted: true # (Optional) If only trusted players can use this effect. Defaults to true.
    ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)

---
title: set_lands_balance
titleEn: set_lands_balance
category: effects
subcategory: economy
tags:
  - libreforge
outline: deep
---

# set_lands_balance <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 设置领地银行的余额。

> **需要依赖：** Lands

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `set_lands_balance` |
| 所属模块 | libreforge |
| 分类 | 经济（Economy） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `amount` | Expression | ✅ | — | — | The value to set the land's balance to. Supports expressions. |
| `only_trusted` | Boolean | — | `true` | — | Whether to restrict the effect to trusted land members. Defaults to true. |

## 配置示例

```yaml
- id: set_lands_balance
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

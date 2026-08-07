---
title: take_money
titleEn: take_money
category: effects
subcategory: economy
tags:
  - libreforge
outline: deep
---

# take_money <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Takes money from the player

> **需要依赖：** Vault

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `take_money` |
| 所属模块 | libreforge |
| 分类 | 经济（Economy） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `amount` | The amount of money to take |

## 配置示例

```yaml
- id: take_money
  args:
    amount: 1000 # The amount of money to take
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)

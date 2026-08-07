---
title: below_balance
titleEn: below_balance
category: conditions
subcategory: economy
tags:
  - libreforge
outline: deep
---

# below_balance <Badge type="info" text="libreforge" />

> Requires a player to have below a certain amount of money

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `below_balance` |
| 所属模块 | libreforge |
| 分类 | 经济与点数（Economy & Points） |

::: tip 反向参数
每个条件都支持可选的 `inverse` 参数，用于取反条件。
:::

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `balance` | The maximum amount of money |

## 配置示例

```yaml
- id: below_balance
  args:
    balance: 150000.50 # The maximum amount of money
```

## 关联页面

- [所有条件](./)
- [指南：配置条件](../guide/effect-basics)
- [所有效果](../effects/)
- [所有触发器](../triggers/)

---
title: lands_balance_equal
titleEn: lands_balance_equal
category: conditions
subcategory: player_state
tags:
  - libreforge
outline: deep
---

# lands_balance_equal <Badge type="info" text="libreforge" />
> **需要依赖：** Lands

> 需要领地银行余额等于某个值。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `lands_balance_equal` |
| 所属模块 | libreforge |
| 分类 | 玩家状态（Player State） |

::: tip 反向参数
每个条件都支持可选的 `inverse` 参数，用于取反条件。
:::

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `amount` | Expression | ✅ | — | — | 所需的确切领地余额。 |

## 配置示例

```yaml
- id: lands_balance_equal
  args:
    amount: 10000 # The required balance
```

## 关联页面

- [所有条件](./)
- [指南：配置条件](../guide/effect-basics)
- [所有效果](../effects/)
- [所有触发器](../triggers/)

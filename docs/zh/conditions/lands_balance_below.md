---
title: lands_balance_below
titleEn: lands_balance_below
category: conditions
subcategory: player_state
tags:
  - libreforge
outline: deep
---

# lands_balance_below <Badge type="info" text="libreforge" />

> Requires the Land's bank balance to be below a value

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `lands_balance_below` |
| 所属模块 | libreforge |
| 分类 | 玩家状态（Player State） |

::: tip 反向参数
每个条件都支持可选的 `inverse` 参数，用于取反条件。
:::

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `amount` | The maximum balance |

## 配置示例

```yaml
- id: lands_balance_below
  args:
    amount: 10000 # The maximum balance
```

## 关联页面

- [所有条件](./)
- [指南：配置条件](../guide/effect-basics)
- [所有效果](../effects/)
- [所有触发器](../triggers/)

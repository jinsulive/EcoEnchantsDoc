---
title: has_edprison_currency
titleEn: has_edprison_currency
category: conditions
subcategory: player_state
tags:
  - libreforge
outline: deep
deprecated: true
---

# has_edprison_currency <Badge type="info" text="libreforge" />
> ⚠️ **已废弃** —— 该组件已从 libreforge 移除，不再生效。此处仅作参考保留。

> 需要玩家拥有一定数量的 EdPrison 货币。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `has_edprison_currency` |
| 所属模块 | libreforge |
| 分类 | 玩家状态（Player State） |

::: tip 反向参数
每个条件都支持可选的 `inverse` 参数，用于取反条件。
:::

## 参数说明

| 参数名 | 说明 |
|--------|------|
| `type` | 货币类型。 |
| `amount` | 所需货币数量（原文如此，应为 amount）。 |

## 配置示例

```yaml
- id: has_edprison_currency
  args:
    type: blocks # The currency type
    amount: 1500 # The amnount of currency required
```

## 关联页面

- [所有条件](./)
- [指南：配置条件](../guide/effect-basics)
- [所有效果](../effects/)
- [所有触发器](../triggers/)

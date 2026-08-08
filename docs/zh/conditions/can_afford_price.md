---
title: can_afford_price
titleEn: can_afford_price
category: conditions
subcategory: economy
tags:
  - libreforge
outline: deep
---

# can_afford_price <Badge type="info" text="libreforge" />

> Requires a player to be able to afford a certain price

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `can_afford_price` |
| 所属模块 | libreforge |
| 分类 | 经济与点数（Economy & Points） |

::: tip 反向参数
每个条件都支持可选的 `inverse` 参数，用于取反条件。
:::

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `value` | Expression(数学表达式) | ✅ | — | — | The value of the price \| Source: The amount or expression for the price value. Example: `%level% * 100` |
| `type` | String | ✅ | — | — | The price type \| Source: The price type identifier (e.g. coins, xpl). Example: `coins` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/conditions/impl/ConditionCanAffordPrice.kt`）。

- **源码描述**: Passes when the player can afford the specified price.
- **所属分类**: `economy`

## 配置示例

```yaml
- id: can_afford_price
  args:
    value: 1000 # The value of the price
    type: coins # The price type
```

## 关联页面

- [所有条件](./)
- [指南：配置条件](../guide/effect-basics)
- [所有效果](../effects/)
- [所有触发器](../triggers/)

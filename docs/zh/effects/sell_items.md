---
title: sell_items
titleEn: sell_items
category: effects
subcategory: economy
tags:
  - libreforge
outline: deep
---

# sell_items <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Sells dropped items / item from trigger

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `sell_items` |
| 所属模块 | libreforge |
| 分类 | 经济（Economy） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `multiplier` | Expression(数学表达式) | — | `1.0` | — | The price multiplier \| Source: A multiplier applied to the sell price of each item. Supports expressions. Example: `1 + %level% * 0.05` |
| `whitelist` | Item List | — | — | — | The only items allowed to be sold, if this is not present all items can be sold \| Source: A list of item types that are allowed to be sold. If omitted, all sellable items are sold. |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectSellItems.kt`）。

- **源码描述**: Sells sellable items from the drop trigger.
- **所属分类**: `economy`, `inventory`
- **需要触发器数据**: `PLAYER`

## 配置示例

```yaml
- id: sell_items
  args:
    multiplier: 0.5 # The price multiplier
    whitelist: [] # The only items allowed to be sold, if this is not present all items can be sold
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)

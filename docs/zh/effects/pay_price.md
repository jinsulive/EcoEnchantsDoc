---
title: pay_price
titleEn: pay_price
category: effects
subcategory: economy
tags:
  - libreforge
outline: deep
---

# pay_price <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Pay a price

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `pay_price` |
| 所属模块 | libreforge |
| 分类 | 经济（Economy） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `value` | String | ✅ | — | — | 要从玩家处扣除的数值。支持数学表达式和占位符。 例: `%level% * 10` |
| `type` | String | ✅ | — | — | 价格类型标识符（例如 coins、xp、xpl、item）。 例: `coins` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectPayPrice.kt`）。

- **源码描述**: 从玩家处扣除指定类型的价格。
- **所属分类**: `economy`
- **需要触发器数据**: `PLAYER`

## 配置示例

```yaml
- id: pay_price
  args:
    value: 1000 # The value of the price
    type: coins # The price type
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)

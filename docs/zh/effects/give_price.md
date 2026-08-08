---
title: give_price
titleEn: give_price
category: effects
subcategory: economy
tags:
  - libreforge
outline: deep
---

# give_price <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 向玩家支付价格。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `give_price` |
| 所属模块 | libreforge |
| 分类 | 经济（Economy） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `value` | Expression(数学表达式) | ✅ | — | — | 价格的值（以表达式字符串形式给出，可引用占位符）。示例：`%level% * 100` |
| `type` | String | ✅ | — | — | 价格类型标识（例如 coins、xp、points:mytype）。示例：`points:mytype` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectGivePrice.kt`）。

- **源码描述**: 使用 eco 价格系统给予玩家奖励，支持任意已注册的价格类型。
- **所属分类**: `economy`
- **需要触发器数据**: `PLAYER`

## 配置示例

```yaml
- id: give_price
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

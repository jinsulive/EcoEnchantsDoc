---
title: bleed
titleEn: bleed
category: effects
subcategory: combat
tags:
  - libreforge
outline: deep
---

# bleed <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Makes your victim bleed, damaging them repeatedly

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `bleed` |
| 所属模块 | libreforge |
| 分类 | 战斗（Combat） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `damage` | Expression(数学表达式) | ✅ | — | — | The damage to deal on each bleed tick \| Source: The damage dealt per interval. Supports expressions. Example: `%level% * 0.5` |
| `interval` | Expression(数学表达式) | ✅ | — | — | The delay between bleed ticks \| Source: The number of ticks between each damage application. Supports expressions. |
| `amount` | Expression(数学表达式) | ✅ | — | — | The amount of bleed ticks \| Source: The number of times damage is dealt. Supports expressions. Example: `3 + %level%` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectBleed.kt`）。

- **源码描述**: Deals damage to the victim repeatedly over a set number of ticks.
- **所属分类**: `combat`
- **需要触发器数据**: `VICTIM`

## 配置示例

```yaml
- id: bleed
  args:
    damage: 5 # The damage to deal on each bleed tick
    interval: 15 # The delay between bleed ticks
    amount: 10 # The amount of bleed ticks
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)

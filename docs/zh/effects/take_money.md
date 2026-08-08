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

> 从玩家处收取金钱。

> **需要依赖：** Vault

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `take_money` |
| 所属模块 | libreforge |
| 分类 | 经济（Economy） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `amount` | Expression(数学表达式) | ✅ | — | — | 要收取的金钱数量。支持表达式。示例：`%level% * 10` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectTakeMoney.kt`）。

- **源码描述**: 从玩家余额中移除指定数量的金钱。
- **所属分类**: `economy`
- **需要触发器数据**: `PLAYER`

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

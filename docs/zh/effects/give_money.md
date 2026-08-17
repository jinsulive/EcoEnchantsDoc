---
title: give_money
titleEn: give_money
category: effects
subcategory: economy
tags:
  - libreforge
outline: deep
---

# give_money <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 给予玩家金钱。

> **需要依赖：** Vault

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `give_money` |
| 所属模块 | libreforge |
| 分类 | 经济（Economy） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `amount` | Expression | ✅ | — | — | The amount of money to deposit into the player's balance. Supports expressions. 例: `%level% * 10` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectGiveMoney.kt`）。

- **源码描述**: 触发时将金钱存入玩家的经济余额。
- **所属分类**: `economy`
- **需要触发器数据**: `PLAYER`

## 配置示例

```yaml
- id: give_money
  args:
    amount: 1000 # The amount of money to give
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)

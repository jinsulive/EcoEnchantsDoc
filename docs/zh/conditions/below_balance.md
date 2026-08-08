---
title: below_balance
titleEn: below_balance
category: conditions
subcategory: economy
tags:
  - libreforge
outline: deep
---

# below_balance <Badge type="info" text="libreforge" />

> 需要玩家的金钱低于一定数量。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `below_balance` |
| 所属模块 | libreforge |
| 分类 | 经济与点数（Economy & Points） |

::: tip 反向参数
每个条件都支持可选的 `inverse` 参数，用于取反条件。
:::

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `balance` | Expression(数学表达式) | ✅ | — | — | 最大金钱数量（余额阈值，玩家必须低于此金额）。示例：`%level% * 500` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/conditions/impl/ConditionBelowBalance.kt`）。

- **源码描述**: 当玩家的经济余额低于指定数量时通过。
- **所属分类**: `economy`

## 配置示例

```yaml
- id: below_balance
  args:
    balance: 150000.50 # The maximum amount of money
```

## 关联页面

- [所有条件](./)
- [指南：配置条件](../guide/effect-basics)
- [所有效果](../effects/)
- [所有触发器](../triggers/)

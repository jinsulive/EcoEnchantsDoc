---
title: above_balance
titleEn: above_balance
category: conditions
subcategory: economy
tags:
  - libreforge
outline: deep
---

# above_balance <Badge type="info" text="libreforge" />

> Requires a player to have a certain amount of money

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `above_balance` |
| 所属模块 | libreforge |
| 分类 | 经济与点数（Economy & Points） |

::: tip 反向参数
每个条件都支持可选的 `inverse` 参数，用于取反条件。
:::

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `balance` | Expression(数学表达式) | ✅ | — | — | The minimum amount of money \| Source: The minimum economy balance required. Example: `%level% * 500` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/conditions/impl/ConditionAboveBalance.kt`）。

- **源码描述**: Passes when the player's economy balance is at or above the minimum.
- **所属分类**: `economy`

## 配置示例

```yaml
- id: above_balance
  args:
    balance: 150000.50 # The minimum amount of money
```

## 关联页面

- [所有条件](./)
- [指南：配置条件](../guide/effect-basics)
- [所有效果](../effects/)
- [所有触发器](../triggers/)

---
title: sell_multiplier
titleEn: sell_multiplier
category: effects
subcategory: economy
tags:
  - libreforge
outline: deep
---

# sell_multiplier <Badge type="info" text="libreforge" /> <Badge type="warning" text="永久型" />

> 倍率化出售物品获得的金钱。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `sell_multiplier` |
| 所属模块 | libreforge |
| 分类 | 经济（Economy） |
| 效果类型 | 永久型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `multiplier` | Expression | ✅ | — | — | 要应用的倍率。支持数学表达式。 继承自 `MultiplierEffect` 抽象模板。 |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectSellMultiplier.kt`）。

- **源码描述**: 玩家通过商店出售物品时，倍率化出售价格。
- **所属分类**: `economy`

## 配置示例

```yaml
- id: sell_multiplier
  args:
    multiplier: 1.05 # The sell multiplier
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)

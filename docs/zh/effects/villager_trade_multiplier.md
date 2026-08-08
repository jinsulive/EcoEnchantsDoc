---
title: villager_trade_multiplier
titleEn: villager_trade_multiplier
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# villager_trade_multiplier <Badge type="info" text="libreforge" /> <Badge type="warning" text="永久型" />

> 倍率化村民交易的花费。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `villager_trade_multiplier` |
| 所属模块 | libreforge |
| 分类 | 工具（Utility） |
| 效果类型 | 永久型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `multiplier` | Custom | — | — | — | 村民交易价格倍率。 |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectVillagerTradeMultiplier.kt`）。

- **源码描述**: 玩家打开村民交易界面时，倍率化交易的物品花费。
- **所属分类**: `economy`

## 配置示例

```yaml
- id: villager_trade_multiplier
  args:
    multiplier: 0.5 # The multiplier for villager trade costs
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)

---
title: dont_consume_xp_chance
titleEn: dont_consume_xp_chance
category: effects
subcategory: item
tags:
  - libreforge
outline: deep
---

# dont_consume_xp_chance <Badge type="info" text="libreforge" /> <Badge type="warning" text="永久型" />

> 附魔物品时不消耗经验值。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `dont_consume_xp_chance` |
| 所属模块 | libreforge |
| 分类 | 物品（Item） |
| 效果类型 | 永久型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `chance` | Expression | ✅ | — | — | 该效果触发的百分比概率（0–100）。支持数学表达式。 继承自 `ChanceMultiplierEffect` 抽象模板。 |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectDontConsumeXpChance.kt`）。

- **源码描述**: 赋予附魔台不消耗经验等级的一定百分比概率。
- **所属分类**: `economy`

## 配置示例

```yaml
- id: dont_consume_xp_chance
  args:
    chance: 20 # The chance to not consume xp
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)

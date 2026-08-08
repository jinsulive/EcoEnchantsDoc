---
title: food_multiplier
titleEn: food_multiplier
category: effects
subcategory: healing
tags:
  - libreforge
outline: deep
---

# food_multiplier <Badge type="info" text="libreforge" /> <Badge type="warning" text="永久型" />

> Multiplies food gain from eating

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `food_multiplier` |
| 所属模块 | libreforge |
| 分类 | 治疗（Healing） |
| 效果类型 | 永久型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `multiplier` | Custom | — | — | — | The multiplier for food gained by eating |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectFoodMultiplier.kt`）。

- **源码描述**: Multiplies the amount of food level gained when the player eats.
- **所属分类**: `player`

## 配置示例

```yaml
- id: food_multiplier
  args:
    multiplier: 2 # The multiplier for food gained by eating
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)

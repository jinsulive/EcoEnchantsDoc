---
title: explosion_knockback_resistance_multiplier
titleEn: explosion_knockback_resistance_multiplier
category: effects
subcategory: combat
tags:
  - libreforge
outline: deep
---

# explosion_knockback_resistance_multiplier <Badge type="info" text="libreforge" /> <Badge type="warning" text="永久型" />

> Multiplies explosion resistance

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `explosion_knockback_resistance_multiplier` |
| 所属模块 | libreforge |
| 分类 | 战斗（Combat） |
| 效果类型 | 永久型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `multiplier` | Expression(数学表达式) | ✅ | — | — | The multiplier for explosion knockback resistance \| Source: The value to add to the explosion knockback resistance attribute. Supports expressions. Example: `%level% * 0.1` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectExplosionKnockbackResistanceMultiplier.kt`）。

- **源码描述**: Adds a flat value to the player's explosion knockback resistance attribute.
- **所属分类**: `combat`, `player`, `attribute`

## 配置示例

```yaml
- id: explosion_knockback_resistance_multiplier
  args:
    multiplier: 2 # The multiplier for explosion knockback resistance
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)

---
title: knockback_resistance_multiplier
titleEn: knockback_resistance_multiplier
category: effects
subcategory: utility
tags:
  - libreforge
outline: deep
---

# knockback_resistance_multiplier <Badge type="info" text="libreforge" /> <Badge type="warning" text="永久型" />

> 倍率化击退抗性。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `knockback_resistance_multiplier` |
| 所属模块 | libreforge |
| 分类 | 工具（Utility） |
| 效果类型 | 永久型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `multiplier` | Expression | ✅ | — | — | 要应用的击退抗性倍率。支持数学表达式。 例: `%level% * 0.1` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectKnockbackResistanceMultiplier.kt`）。

- **源码描述**: 倍率化玩家的击退抗性，减少其被击中时被推开的距离。
- **所属分类**: `combat`, `player`, `attribute`

## 配置示例

```yaml
- id: knockback_resistance_multiplier
  args:
    multiplier: 2 # The multiplier for knockback resistance
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)

---
title: sneaking_speed_multiplier
titleEn: sneaking_speed_multiplier
category: effects
subcategory: movement
tags:
  - libreforge
outline: deep
---

# sneaking_speed_multiplier <Badge type="info" text="libreforge" /> <Badge type="warning" text="永久型" />

> 倍率化潜行速度。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `sneaking_speed_multiplier` |
| 所属模块 | libreforge |
| 分类 | 移动（Movement） |
| 效果类型 | 永久型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `multiplier` | Expression(数学表达式) | ✅ | — | — | 潜行速度倍率。支持表达式。示例：`1 + %level% * 0.05` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectSneakingSpeedMultiplier.kt`）。

- **源码描述**: 潜行时倍率化玩家的移动速度。
- **所属分类**: `movement`, `player`, `attribute`

## 配置示例

```yaml
- id: sneaking_speed_multiplier
  args:
    multiplier: 2 # The multiplier for sneaking speed
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)

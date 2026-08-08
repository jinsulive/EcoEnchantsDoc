---
title: jump_strength_multiplier
titleEn: jump_strength_multiplier
category: effects
subcategory: movement
tags:
  - libreforge
outline: deep
---

# jump_strength_multiplier <Badge type="info" text="libreforge" /> <Badge type="warning" text="永久型" />

> Multiplies jump strength

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `jump_strength_multiplier` |
| 所属模块 | libreforge |
| 分类 | 移动（Movement） |
| 效果类型 | 永久型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `multiplier` | Expression(数学表达式) | ✅ | — | — | The multiplier for jump strength \| Source: The jump strength multiplier to apply. Supports expressions. Example: `1 + %level% * 0.05` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectJumpStrengthMultiplier.kt`）。

- **源码描述**: Multiplies the player's jump strength, making them jump higher or lower.
- **所属分类**: `movement`, `player`, `attribute`

## 配置示例

```yaml
- id: jump_strength_multiplier
  args:
    multiplier: 2.1 # The multiplier for jump strength
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)

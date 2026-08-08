---
title: gravity_multiplier
titleEn: gravity_multiplier
category: effects
subcategory: movement
tags:
  - libreforge
outline: deep
---

# gravity_multiplier <Badge type="info" text="libreforge" /> <Badge type="warning" text="永久型" />

> Multiplies gravity

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `gravity_multiplier` |
| 所属模块 | libreforge |
| 分类 | 移动（Movement） |
| 效果类型 | 永久型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `multiplier` | Expression(数学表达式) | ✅ | — | — | The multiplier for gravity \| Source: The gravity multiplier to apply. Supports expressions. Example: `1 - %level% * 0.05` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectGravityMultiplier.kt`）。

- **源码描述**: Multiplies the player's gravity, making them fall faster or slower.
- **所属分类**: `movement`, `player`, `attribute`

## 配置示例

```yaml
- id: gravity_multiplier
  args:
    multiplier: 0.5 # The multiplier for gravity
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)

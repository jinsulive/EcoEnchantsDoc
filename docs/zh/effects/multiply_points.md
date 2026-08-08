---
title: multiply_points
titleEn: multiply_points
category: effects
subcategory: economy
tags:
  - libreforge
outline: deep
---

# multiply_points <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Multiply points (check the points wiki page if you don't know what these are)

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `multiply_points` |
| 所属模块 | libreforge |
| 分类 | 经济（Economy） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `type` | String | ✅ | — | — | The point to multiply \| Source: The player point type to multiply. |
| `multiplier` | Expression(数学表达式) | ✅ | — | — | The amount to multiply it by \| Source: The multiplier to apply to the player's point value. Supports expressions. Example: `1 + %level% * 0.1` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectMultiplyPoints.kt`）。

- **源码描述**: Multiplies a player's point value for the specified point type by the given amount.
- **所属分类**: `economy`, `points`
- **需要触发器数据**: `PLAYER`

## 配置示例

```yaml
- id: multiply_points
  args:
    type: g_souls # The point to multiply
    multiplier: 2 # The amount to multiply it by
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)

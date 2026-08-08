---
title: give_points
titleEn: give_points
category: effects
subcategory: economy
tags:
  - libreforge
outline: deep
---

# give_points <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Add / subtract points (check the points wiki page if you don't know what these are)

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `give_points` |
| 所属模块 | libreforge |
| 分类 | 经济（Economy） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `type` | String | ✅ | — | — | The point to add/subtract \| Source: The player point type to add to. |
| `amount` | Expression(数学表达式) | — | `0` | — | The amount to add/subtract \| Source: The amount of points to add to the player. Supports expressions. Defaults to 0. Example: `%level% * 10` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectGivePoints.kt`）。

- **源码描述**: Adds points to a specific player point type when triggered.
- **所属分类**: `economy`, `points`
- **需要触发器数据**: `PLAYER`

## 配置示例

```yaml
- id: give_points
  args:
    type: g_souls # The point to add/subtract
    amount: 1 # The amount to add/subtract
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)

---
title: add_points
titleEn: add_points
category: effects
subcategory: economy
tags:
  - libreforge
outline: deep
---

# add_points <Badge type="info" text="libreforge" /> <Badge type="info" text="永久型" />

> Add / subtract points (check the points wiki page if you don't know what these are)

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `add_points` |
| 所属模块 | libreforge |
| 分类 | 经济（Economy） |
| 效果类型 | 永久型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `type` | String | ✅ | — | — | The point to add/subtract \| Source: The player point type to add to. |
| `amount` | Expression(数学表达式) | ✅ | — | — | The amount to add/subtract \| Source: The amount of points to add. Supports expressions. Example: `%level% * 5` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectAddPoints.kt`）。

- **源码描述**: Permanently increases a player's point counter while the holder is active.
- **所属分类**: `economy`, `points`

## 配置示例

```yaml
- id: add_points
  args:
    type: g_souls # The point to add/subtract
    amount: 1 # The amount to add/subtract
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)

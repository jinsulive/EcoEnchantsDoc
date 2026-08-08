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

> 增加/扣除点数（不了解可查看点数百科页面）。

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
| `type` | String | ✅ | — | — | 要增加/扣除的玩家点数类型。 |
| `amount` | Expression(数学表达式) | ✅ | — | — | 要增加/扣除的点数数量。支持表达式。示例：`%level% * 5` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectAddPoints.kt`）。

- **源码描述**: 持有器激活期间，永久增加玩家的点数计数。
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

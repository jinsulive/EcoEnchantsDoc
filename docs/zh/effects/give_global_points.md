---
title: give_global_points
titleEn: give_global_points
category: effects
subcategory: economy
tags:
  - libreforge
outline: deep
---

# give_global_points <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> Add / subtract global points (check the points wiki page if you don't know what these are)

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `give_global_points` |
| 所属模块 | libreforge |
| 分类 | 经济（Economy） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `type` | String | ✅ | — | — | The point to add/subtract \| Source: The global point type to add to. |
| `amount` | Expression(数学表达式) | — | `0` | — | The amount to add/subtract \| Source: The amount of global points to add. Supports expressions. Defaults to 0. Example: `%level% * 10` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectGiveGlobalPoints.kt`）。

- **源码描述**: Adds points to a global (server-wide) point counter when triggered.
- **所属分类**: `economy`, `points`

## 配置示例

```yaml
- id: give_global_points
  args:
    type: item_stock # The point to add/subtract
    amount: 1 # The amount to add/subtract
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)

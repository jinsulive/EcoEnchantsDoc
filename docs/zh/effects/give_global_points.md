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

> 增加/扣除全局点数（不了解可查看点数百科页面）。

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
| `type` | String | ✅ | — | — | 要增加到的全局点数类型。 |
| `amount` | Expression | — | `0` | — | 要添加的全局点数数量。支持数学表达式。默认为 0。 例: `%level% * 10` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectGiveGlobalPoints.kt`）。

- **源码描述**: 触发时向全局（服务器级）点数计数添加点数。
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

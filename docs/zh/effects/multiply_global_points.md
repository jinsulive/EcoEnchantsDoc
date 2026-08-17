---
title: multiply_global_points
titleEn: multiply_global_points
category: effects
subcategory: economy
tags:
  - libreforge
outline: deep
---

# multiply_global_points <Badge type="info" text="libreforge" /> <Badge type="info" text="触发型" />

> 倍率化全局点数（不了解可查看点数百科页面）。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `multiply_global_points` |
| 所属模块 | libreforge |
| 分类 | 经济（Economy） |
| 效果类型 | 触发型 |

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `type` | String | ✅ | — | — | The global point type to multiply. |
| `multiplier` | Expression | ✅ | — | — | The multiplier to apply to the global point counter. Supports expressions. 例: `1 + %level% * 0.1` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/effects/impl/EffectMultiplyGlobalPoints.kt`）。

- **源码描述**: 以指定数值倍率化全局点数计数。
- **所属分类**: `economy`, `points`

## 配置示例

```yaml
- id: multiply_global_points
  args:
    type: item_stock # The point to multiply
    multiplier: 2 # The amount to multiply it by
  ...other config (eg triggers, filters, mutators, etc)
```

## 关联页面

- [所有效果](./)
- [指南：Effect 基础](../guide/effect-basics)
- [所有触发器](../triggers/)
- [所有条件](../conditions/)

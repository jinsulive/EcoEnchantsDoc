---
title: light_level_below
titleEn: light_level_below
category: conditions
subcategory: world
tags:
  - libreforge
outline: deep
---

# light_level_below <Badge type="info" text="libreforge" />

> 需要光照等级低于或等于某个等级。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `light_level_below` |
| 所属模块 | libreforge |
| 分类 | 世界与环境（World & Environment） |

::: tip 反向参数
每个条件都支持可选的 `inverse` 参数，用于取反条件。
:::

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `level` | Integer | ✅ | — | — | 等级（位置允许的最大光照等级 0–15）。 |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/conditions/impl/ConditionLightLevelBelow.kt`）。

- **源码描述**: 当触发者位置的光照等级低于或等于指定值时通过。
- **所属分类**: `world`

## 配置示例

```yaml
- id: light_level_below
  args:
    level: 7 # The level
```

## 关联页面

- [所有条件](./)
- [指南：配置条件](../guide/effect-basics)
- [所有效果](../effects/)
- [所有触发器](../triggers/)

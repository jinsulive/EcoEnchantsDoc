---
title: within_radius_of
titleEn: within_radius_of
category: conditions
subcategory: position
tags:
  - libreforge
outline: deep
---

# within_radius_of <Badge type="info" text="libreforge" />

> Requires a player to be within a certain radius of a location

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `within_radius_of` |
| 所属模块 | libreforge |
| 分类 | 位置与移动（Position & Movement） |

::: tip 反向参数
每个条件都支持可选的 `inverse` 参数，用于取反条件。
:::

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `x` | Expression(数学表达式) | ✅ | — | — | The x coordinate \| Source: The X coordinate of the target location. |
| `y` | Expression(数学表达式) | ✅ | — | — | The y coordinate \| Source: The Y coordinate of the target location. |
| `z` | Expression(数学表达式) | ✅ | — | — | The z coordinate \| Source: The Z coordinate of the target location. |
| `radius` | Expression(数学表达式) | ✅ | — | — | The radius \| Source: The maximum distance from the target location. Example: `15 + %level% * 0.5` |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/conditions/impl/ConditionWithinRadiusOf.kt`）。

- **源码描述**: Passes when the entity is within the specified radius of a given coordinate.
- **所属分类**: `world`

## 配置示例

```yaml
- id: within_radius_of
  args:
    x: 100 # The x coordinate
    y: 100 # The y coordinate
    z: 100 # The z coordinate
    radius: 25 # The radius
```

## 关联页面

- [所有条件](./)
- [指南：配置条件](../guide/effect-basics)
- [所有效果](../effects/)
- [所有触发器](../triggers/)

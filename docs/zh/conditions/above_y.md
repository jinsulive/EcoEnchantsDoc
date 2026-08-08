---
title: above_y
titleEn: above_y
category: conditions
subcategory: position
tags:
  - libreforge
outline: deep
---

# above_y <Badge type="info" text="libreforge" />

> 需要玩家的 Y 坐标高于某一高度。

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 ID | `above_y` |
| 所属模块 | libreforge |
| 分类 | 位置与移动（Position & Movement） |

::: tip 反向参数
每个条件都支持可选的 `inverse` 参数，用于取反条件。
:::

## 参数说明

| 参数名 | 类型 | 必填 | 默认值 | 可选值 | 说明 |
|--------|------|------|--------|--------|------|
| `y` | Expression(数学表达式) | ✅ | — | — | 最小 Y 坐标。 |

## 📝 源码注记

> 以下信息来自 libreforge 源码（`libreforge/core/common/src/main/kotlin/com/willfp/libreforge/conditions/impl/ConditionAboveY.kt`）。

- **源码描述**: 当实体的 Y 坐标达到或高于指定值时通过。
- **所属分类**: `world`

## 配置示例

```yaml
- id: above_y
  args:
    y: 64
```

## 关联页面

- [所有条件](./)
- [指南：配置条件](../guide/effect-basics)
- [所有效果](../effects/)
- [所有触发器](../triggers/)
